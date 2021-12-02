import React from 'react'
import Tasks from './index'

const CompleteTasks = (props) => {
    const { totalList, loading, data } = props

    const renderItem = () => {
        return data.map((item, idx) => {
            return (
                <Tasks data={item} index={idx} done={true} />
            )
        })
    }
    return (
        <>
            <h2 className="text-center">Complete</h2>

            {loading ?
                <p>Loading...</p> :
                renderItem()
            }
        </>
    )
}

export default CompleteTasks
