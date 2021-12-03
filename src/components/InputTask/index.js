import React, { useState } from 'react'
import { connect } from "react-redux"
import { addTodo } from "../../store/actions/todo"
import { AiOutlinePlusCircle } from 'react-icons/ai'

import { Form, Button } from 'react-bootstrap'

const InputTask = (props) => {
    const { total, addNewTodo } = props
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const addTask = () => {
        const today = new Date();
        const month = today.getMonth() + 1
        let payload = [{
            id: total + 1,
            title: title,
            description: description,
            status: 0,
            createdAt: today.getFullYear() + '-' + month + '-' + today.getDate() + ' ' + today.getHours() + ':' + today.getMinutes()
        }]
        addNewTodo(payload)
        setTitle("")
        setDescription("")
    }

    return (
        <div className="form-body">
            <Form>
                <Form.Group>
                    <Form.Control placeholder="Add Title" onChange={(event) => setTitle(event.target.value)} required value={title} />
                    <Form.Control as="textarea" placeholder="Add Description" onChange={(event) => setDescription(event.target.value)} required value={description} className="description-form" />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={addTask} disabled={title === ""}><AiOutlinePlusCircle /> Add Task</Button>
            </Form>
        </div>
    )
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        addNewTodo: (data) => dispatch(addTodo(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputTask)
