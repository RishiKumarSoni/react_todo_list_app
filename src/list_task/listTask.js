import './listTask.css';

function ListTask(props) {
    let tasks = props?.taskLists;

    function taskAction(task, type, i){
        if (type === 1){
            props.getEditTaskInfo(task, i);
        } else if (type === 2){
            props.completeTask(task, i);
        } else {
            props.deleteTask(task, i);
        }
    }

    return (
        <div className="listtask">
            <ul>
                {
                tasks.map((task, i) => (
                    <li key={i}>
                        {
                            !task?.status ? ( <span>  {task?.name} </span> ) : ( <span> <del> {task?.name} </del> </span> )
                        }
                        {
                            task?.status ? ( <button type="button" onClick={() => taskAction(task, 3, i)} className="delete">❌</button> ) : 
                            (
                                <span>
                                    <button type="button" onClick={() => taskAction(task, 1, i)} className="edit">✏️</button>
                                    <button type="button" onClick={() => taskAction(task, 2, i)} className="done">✔️</button>
                                    <button type="button" onClick={() => taskAction(task, 3, i)} className="delete">❌</button>
                                </span>
                            )
                        }
                    </li>
                ))
                }
            </ul>
        </div>
    );
}

export default ListTask;