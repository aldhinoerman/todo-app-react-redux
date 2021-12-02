import React from 'react'
import Tasks from './index'

const TaskLists = (props) => {
    const { totalList, loading, data } = props

    const renderItem = () => {
        if (data.length === 0) {
            return (<p>No Item!</p>)
        } else {
            return data.map((item, idx) => {
                return (
                    <Tasks data={item} index={idx} done={false} />
                )
            })
        }
    }

    return (
        <>
            <h2 className="text-center">Tasks</h2>
            {/* Input data */}
            {loading ?
                <p>Loading...</p> :
                renderItem()
            }
        </>
    )
}

export default TaskLists
