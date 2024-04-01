import axios from 'axios'

export const loginAdmin = async (data) => {
    return await axios.post("/api/v1/admin/login",data)
}
export const logoutAdmin = async (data) => {
    return await axios.post("/api/v1/admin/logout")
}