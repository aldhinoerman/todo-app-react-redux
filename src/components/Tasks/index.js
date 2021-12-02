import React from 'react'
import CompleteTasks from './CompleteTasks'
import TaskLists from './TaskLists'

import './Tasks.scss'

const Tasks = () => {
    return (
        <div className="grid col-2">
            <TaskLists />
            <CompleteTasks />
        </div>
    )
}

export default Tasks
