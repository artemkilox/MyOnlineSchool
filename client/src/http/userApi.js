import {$authHost, $host} from "./index";
import jwtDecode from "jwt-decode";

export const registration = async (login, password) => {
    const {data} = await $host.post('http://localhost:5000/api/managers/registration', {login, password})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const login = async (login, password) => {
    const {data} = await $host.post('api/managers/login', {login, password})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const check = async () => {
    const {data} = await $host.post('api/managers/auth')
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}