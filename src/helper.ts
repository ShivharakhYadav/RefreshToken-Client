import { toast } from "react-toastify"

export const showMessage = (message) => {
    toast.error(message, {
        autoClose: 1000
    })
}