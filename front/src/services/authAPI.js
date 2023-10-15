import axios from "axios"
import { URL_LOGIN } from "../config"
import jwt_decode from "jwt-decode"

export  const authenticate = (credentials) => {
    return axios.post(URL_LOGIN, credentials)
        .then(res => res.data)
        .then((data) => {
            localStorage.setItem("authToken", data.jwt)
            localStorage.setItem("username", data.user.username)
            axios.defaults.headers["Authorization"] = "Bearer" + data.jwt
            console.log(isAuthenticate())  
        }) 
        .catch(err => console.log(err.message))
}

export const isAuthenticate = () => {
    const token = localStorage.getItem("authToken")

    if(token){
        const { exp } = jwt_decode(token)
        if(exp * 1000 > new Date().getTime()){
            return true
        }
        return false
    }
    
    return false
}