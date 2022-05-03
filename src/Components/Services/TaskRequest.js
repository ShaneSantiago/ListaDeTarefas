import axios from "axios"
import { BASE_URL } from "./url"

export const create = (form, clear) => {
        
    axios.post(`${BASE_URL}/posts`, form)
    .then((res) => {
        alert("Criado com sucesso")
        clear()
    })
    .catch((error) => {
        alert("Erro na criação do postt")
    })
}