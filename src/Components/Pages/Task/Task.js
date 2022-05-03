import React from "react"
import { useParams } from "react-router"
import { BASE_URL } from "../../Services/url"
import useRequestData from "../../Hooks/useRequestData"
import { Container } from "./styled"
import CreateTask from "../CreateTask/CreateTask"
import TaskCard from "../Task/TaskCard"

const TaskPage = (props) => {

    const params = useParams()
    const listTask = useRequestData([], `${BASE_URL}/users/${params.id}/todos`)

    const list = listTask.map((task) => {
        return <TaskCard key={task.id} task={task}/>
    })

    return(
        <Container>  
        <div className="form"> 
        <CreateTask />
            {list}
        </div>
        </Container>
    )
}
export default TaskPage