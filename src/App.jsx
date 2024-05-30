

import { useState } from "react"
import './App.css'


export default function App() {


    const [task, setTask] = useState([])


    const addTask = () => {
        let newTask = document.getElementById("addTask").value

        newTask == "" || task.includes(newTask) ? wrongInputMessage() : check()
    }

    const check = () => {
        let newTask = document.getElementById("addTask").value
        document.getElementById("addTask").value = ""
        setTask(t => [...t, newTask])

        let msg = document.getElementById("wrongInputMessage");
        msg.textContent = ""
    }


    const removeTask = (index) => {
        setTask(task.filter((_, i ) => i !== index));
    }

    const wrongInputMessage = () => {
        let msg = document.getElementById("wrongInputMessage");
        let wrongInputMessage = "Please Enter a valid input or the task maybe already existed in the current list"
        msg.textContent = wrongInputMessage
    }

    return(
        <>
            <div className="super_container">
                <h1>To-Do-List</h1>
                <div className="input_box">
                    <input type="text" id="addTask" />
                    <button className="green" onClick={addTask}>Add</button> <br />
                    <p id="wrongInputMessage"></p>
                </div>
                
                <div className="tasks">
                    {
                        task.map((eachTask, index) => (
                            <div className="box" key={index}>
                                <p>{eachTask}</p>
                                <button className="red" onClick={() => removeTask(index)}>Delete</button>
                            </div>
                        ))
                    }
                </div>
            </div>
                    
            
        </>
    )
}