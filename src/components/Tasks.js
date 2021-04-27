import { useState } from 'react';
import Button from './Button';
import Task from './Task';
const Tasks = ({ tasks, onDelete, onToggle }) => {
    // const [tasks, setTasks] = useState(props.tasks);

    return (
        <>
            {/* {tasks.length === 0 ? 'You don\'t have any task left' : ''} */}
            {tasks.length > 0 ?
                tasks.map((task) => (
                    <Task
                        key={task.id}
                        task={task}
                        onDelete={onDelete}
                        onToggle={onToggle}
                    />
                )) : 'You don\'t have any task left'
            }
        </>
    )
    // return (
    //     <div>
    //         <table>
    //             <thead>
    //                 <tr>
    //                     <th>Id</th>
    //                     <th>Text</th>
    //                     <th>Day</th>
    //                     <th>Reminder</th>
    //                     <th>Action</th>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 {tasks.map((task) => (
    //                     <tr key={task.id}>
    //                         <td key={Math.random()}>{task.id}</td>
    //                         <td key={Math.random()}>{task.text}</td>
    //                         <td key={Math.random()}>{task.day}</td>
    //                         <td key={Math.random()}>{task.reminder ? 'Yes' : 'No'}</td>
    //                         <td>
    //                           <Button backgroundColor='#00f' onClick={() => {editTask(task.id)}} text='Edit'/>
    //                           <Button backgroundColor='#f00' onClick={() => {deleteTask(task.id)}} text='Delete'/>
    //                         </td>
    //                     </tr>
    //                 ))}
    //             </tbody>
    //         </table>
    //     </div>
    // )
}

export default Tasks
