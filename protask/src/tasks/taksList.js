import React, { useState, useEffect } from "react"
import TASKCRUD from "../CRUD-OPS/tasksCRUD"



const TaskList = (props) => {

    const [task, setTask] = useState([])

    const getAllTaskID = id => {
        TASKCRUD.getProjectsTasks(id)
        .then(res => {
            setTask("tasks",res.data)
            console.log(res.data)
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getAllTaskID(props.match.params.id)
    },[props.match.params.id])

    return(
        <div>
            Tasks here
            {task.task_Name}
            
        </div>
    )
}

export default TaskList