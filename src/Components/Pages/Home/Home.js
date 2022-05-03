import React from "react"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from "../../Services/url"
import { Container, List } from "./styled"
import useRequestData from "../../Hooks/useRequestData"
import Typography from "@mui/material/Typography"
import { Button } from "@mui/material"

const HomePage = () => {

    const list = useRequestData([], `${BASE_URL}/users`)
    
    const navigate = useNavigate()

    const goToTask = (id) => {
        navigate(`/task/${id}`)
    }

    const allUsers = list.map((user) => {
        return <List key={user.id}>
            <Typography variant="h2" component="h2">{user.name}</Typography>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Contato: {user.phone}</p>
            <p>Site: {user.website}</p>
            <Button onClick={() => goToTask(user.id)}>Tarefas</Button>
        </List>
    })
    return(
        <Container>
            {allUsers}
        </Container>
    )
}
export default HomePage