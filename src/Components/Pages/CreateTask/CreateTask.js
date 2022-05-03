import { Button } from "@mui/material"
import React, { useEffect } from "react"
import useForm from "../../Hooks/useForm"
import { create } from "../../Services/TaskRequest"
import { ContainerTask } from "./styled"


const CreateTask = () => {

    const [form, onChange, clear] = useForm({
        title: ""
    })

    const onSubmitForm = (e) => {
        e.preventDefault()
        create(form, clear)
    }

    
    return(
        <ContainerTask>
            <form onSubmit={onSubmitForm}>
                <input 
                type={"text"}
                name={"title"}
                value={form.title}
                onChange={onChange}
                placeholder="Nova tarefa"
                />

                <Button type="submit">Enviar</Button>
            </form>
        </ContainerTask>
    )
}
export default CreateTask