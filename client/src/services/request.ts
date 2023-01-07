import axios from "axios";

const apiLink = import.meta.env.VITE_API_LINK;

export const request = {
  get: (path: string, params?: object) => (
    axios.get(`${apiLink}/${path}`, {params})
  ),
  post: (path: string, body: object) => (
    axios.post(`${apiLink}/${path}`, body)
  )
};