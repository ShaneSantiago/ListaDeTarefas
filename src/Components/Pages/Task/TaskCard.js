import { Checkbox, Typography } from "@mui/material"
import React, { useState } from "react"
import { List } from "./styled"

const TaskCard = (props) => {
    const [isComplet, setIsComplet] = useState(false)
    
    const handleIsComplet = () => {
        setIsComplet(!isComplet)
    }
    return(
        <List>
            <Typography>{props.task.title}</Typography>
            
            <Checkbox
            checked={isComplet}
            inputProps={{"aria-label" : "controlled"}}
            onChange={handleIsComplet}   
            
            />
           
        </List>
    )
}
export default TaskCard