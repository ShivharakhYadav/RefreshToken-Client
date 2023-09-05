import axios, { AxiosPromise, AxiosError } from 'axios'
const baseUrl = process.env.REACT_APP_BASE_URL

const authInstance = axios.create({
    baseURL: baseUrl,
    headers: {
        "Content-Type": "application/json"
    }
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
        return (await authInstance.post("login", payload)).data
    } catch (error) {
        return error;
    }
}