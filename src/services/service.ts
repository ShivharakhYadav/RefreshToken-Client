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
        return Promise.reject(error.response?.data?.message);
    }
)

export const login = async (payload): Promise<AxiosPromise> => {
    try {
        return await authInstance.post("login", payload)
    } catch (error) {
        // error
        // console.log("fn wrrr-->", error.)
        // throw new Error(error ?)
    }
}