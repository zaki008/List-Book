import axios from "axios"
import API_ENDPOINT from "../globals/api-endpoint"

const AuthIb = {
    register: async (data) => axios.post(API_ENDPOINT.register, data),
    login: async(data) => axios.post(API_ENDPOINT.login, data)
}

export default AuthIb;