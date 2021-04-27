import React from 'react'
import { FaTimes } from 'react-icons/fa';
const Task = ({ task, onDelete, onToggle }) => {
    // const taskCss = {
    //     color: task.reminder ? '#00f' : '#000'
    // }
    return (
        <div className={`event ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => { onToggle(task.id) }}>
            <h3>{task.text} <FaTimes onClick={() => { onDelete(task.id) }} style={{ color: '#f00', cursor: 'pointer' }} /></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
