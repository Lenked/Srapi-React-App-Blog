import { URL_COMMENTS } from "../config"
import axios from 'axios'

export const create = (comment) => {
    return axios.post(URL_COMMENTS, comment)
}

export const findAll = () => {
    return axios.get(URL_COMMENTS).then(response => response.data)
}