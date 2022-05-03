import { BASE_URL } from "./url"
import axios from "axios"

export const listComplet = (setList) => {
    axios.get(`${BASE_URL}/users`)
    .then((res) => {
        setList(res.data)
    })
    .catch((error) => {
        console.log(error)
    })
}
