import React, { useState } from "react";
import './App.css';

export default function App() {
    const [task, setTask] = useState([]);
    const [newTask, setNewTask] = useState("");

    const addTask = () => {
        if (newTask.trim() === "" || task.includes(newTask)) {
            wrongInputMessage();
        } else {
            check();
        }
    }

    const check = () => {
        setTask(prevTask => [...prevTask, newTask]);
        setNewTask("");
        clearErrorMessage();
    }

    const removeTask = (index) => {
        setTask(prevTask => prevTask.filter((_, i ) => i !== index));
    }

    const moveUp = (index) => {
        if (index > 0) {
            setTask(prevTask => {
                const updatedTasks = [...prevTask];
                [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
                return updatedTasks;
            });
        }
    }

    const moveDown = (index) => {
        if (index < task.length - 1) {
            setTask(prevTask => {
                const updatedTasks = [...prevTask];
                [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
                return updatedTasks;
            });
        }
    }

    const wrongInputMessage = () => {
        let msg = document.getElementById("wrongInputMessage");
        msg.textContent = "Please enter a valid input or the task may already exist in the current list";
    }

    const clearErrorMessage = () => {
        let msg = document.getElementById("wrongInputMessage");
        msg.textContent = "";
    }

    return (
        <div className="super_container">
            <h1>To-Do-List</h1>
            <div className="input_box">
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Enter new task"
                />
                <button className="green" onClick={addTask}>Add</button> <br />
                <p id="wrongInputMessage"></p>
            </div>
            
            <div className="tasks">
                {task.map((eachTask, index) => (
                    <div className="box" key={index}>
                        <p>{eachTask}</p>
                        <div className="btns">
                            <button className="red" onClick={() => removeTask(index)}>Delete</button>
                            <button className="frag" onClick={() => moveUp(index)}>up</button>
                            <button className="frag" onClick={() => moveDown(index)}>down</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
