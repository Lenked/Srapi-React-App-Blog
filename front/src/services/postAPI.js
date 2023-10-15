import axios from "axios"
import { API_URL, URL_POSTS } from "../config"

export const findAll = () => {
    return axios.get(URL_POSTS).then(response => response.data)
}

export const findOne = (id) => {
    return axios.get(`${API_URL}/posts/${id}`).then(res => res.data) 
}

export const getComments = (id) => {
    return axios.get(`${API_URL}/posts/${id}/comments`).then(res => res.data)
}