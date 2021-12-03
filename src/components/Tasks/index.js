import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'

import { BsFillPenFill, BsCheckCircle } from 'react-icons/bs'
import { MdRestore } from 'react-icons/md'
import Card from '../Card'
import TaskModal from '../TaskModal'
import { doneActionTodo, undoneActionTodo } from '../../store/actions/todo'

const Tasks = (props) => {
    const { data, done, index, actionDone, actionUndone } = props
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Card key={data.id}>
                <h4>{data.title}</h4>
                <p className="text-muted">{data.description}</p>
                <div className="btn-group">
                    {done ?
                        <Button variant="secondary" onClick={() => actionUndone(index, data)}><MdRestore /></Button>
                        :
                        <>
                            <Button variant="primary" onClick={handleShow}><BsFillPenFill /> Edit</Button>
                            <Button variant="success" onClick={() => actionDone(index, data)}><BsCheckCircle /> Complete</Button>
                        </>}
                </div>
            </Card>

            <TaskModal showModal={show} onHideModal={handleClose} data={data} index={index} done={done} />
        </>
    )
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        actionDone: (index, data) => dispatch(doneActionTodo(index, data)),
        actionUndone: (index, data) => dispatch(undoneActionTodo(index, data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks)
