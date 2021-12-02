import React from 'react'
import { connect } from 'react-redux'
import Card from '../Card'
// import { doneActionTodo, undoneActionTodo } from '../../store/actions/todo'

import './Tasks.scss'

const Tasks = (props) => {
    const { data } = props

    return (
        <>
            <Card key={data.id}>
                <h4>{data.title}</h4>
                <p className="text-muted">{data.description}</p>
            </Card>
        </>
    )
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks)
