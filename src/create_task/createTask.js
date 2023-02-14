import './createTask.css';
import React, { useState, useEffect } from 'react';

function CreateTask(props) {
    const [task, setTask] = useState('');

    let editIndex = props?.editTaskInfo?.index;

    function handleTaskChange(event){
        // console.log(event.target);
        setTask(event.target.value);
    }

    function createNewTask(){
        // console.log("new task should be updated: ", task);
        props.getNewTask(task, editIndex);
        setTask('');
        editIndex = null;
    }

    useEffect( () => {  setTask(props?.editTaskInfo?.name); },
        [props?.editTaskInfo?.name] 
    );

    return(
        <div className="create">
            <h1 className="heading">
                To-Do List
            </h1>

            <div>
                <form className="form">
                    <input type="text" value={task} onChange={handleTaskChange} className="input" placeholder=" add new task" />
                    <button type="button" className="submit" onClick={createNewTask}> Submit </button>
                </form>
            </div>

        </div>
    );
}

export default CreateTask;