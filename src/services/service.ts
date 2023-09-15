import { getData } from './index'
import axios, { AxiosPromise, AxiosError } from 'axios'
const baseUrl = "http://localhost:3002";
// process.env.REACT_APP_BASE_URL

const authInstance = axios.create({
    baseURL: baseUrl + "/auth",
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true
})

authInstance.interceptors.request.use(
    (request) => {
        return request;
    },
    (error) => {
        return Promise.reject(error);
    }
)

authInstance.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        return Promise.reject(error.response?.data);
    }
)

type resultType = {
    data: {
        email: string;
        accessToken: string;
        refreshToken: string;
    },
    success: Boolean,
    message: string
}
export const login = async (payload): Promise<resultType> => {
    try {
        console.log("login called", getData())
        return (await authInstance.post("login", payload)).data
    } catch (error) {
        return error;
    }
}