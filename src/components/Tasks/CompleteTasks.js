import React from 'react'
import Tasks from './index'

const CompleteTasks = (props) => {
    const { loading, data } = props

    const renderItem = () => {
        return data.map((item, idx) => {
            return (
                <Tasks data={item} index={idx} done={true} />
            )
        })
    }
    return (
        <>
            <div>
                <h2 className="text-center">Complete</h2>

                {loading ?
                    <p>Loading...</p> :
                    renderItem()
                }
            </div>
        </>
    )
}

export default CompleteTasks
