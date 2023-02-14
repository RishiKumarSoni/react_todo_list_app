import CreateTask from './create_task/createTask.js';
import ListTask from './list_task/listTask.js';

import React, { useState} from 'react';

function ManageTask() {
    // create a state for incoming & present task lists
    const [ManageTaskArr, setManageTaskArr] = useState([

        {name: 'update todo list design', status: 0},
        {name: 'revise maths concepts', status: 0},
        {name: 'take care of your health', status: 1},
        
    ]);

    const [editTaskInfo, setEditTaskInfo] = useState();

    // after submit button is clicked
    function getNewTask(task, editIndex){
        if (editIndex >= 0) {
            let temp = [...ManageTaskArr];
            temp[editIndex] = {name: task, status: 0};
            setManageTaskArr([...temp]);

        } else {
            setManageTaskArr([...ManageTaskArr, ...[{name: task, status: 0}]]);
        }
    }

    // after delete button is clicked
    function deleteTask(task, i){
        let temp = [...ManageTaskArr];
        temp.splice(i, 1);
        setManageTaskArr([...temp]);
    }

    // after done button is clicked
    function completeTask(task, i){
        let temp = [...ManageTaskArr];
        task.status = 1;
        temp[i] = task;
        setManageTaskArr([...temp]);
    }
    
    function getEditTaskInfo(task, i){
        setEditTaskInfo({...task, ...{index:i}});
    }

    return (
        <div>
            <CreateTask getNewTask={getNewTask} editTaskInfo={editTaskInfo} />
            <ListTask taskLists={ManageTaskArr} completeTask={completeTask} deleteTask={deleteTask} getEditTaskInfo={getEditTaskInfo}/>
        </div>
    );
}

export default ManageTask;