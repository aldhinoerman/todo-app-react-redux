import React, { useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { MdDelete } from 'react-icons/md'

import { connect } from 'react-redux'
import { removeTodoData, updateDoneTodo, updateUndoneTodo } from '../../store/actions/todo'

const TaskModal = (props) => {
    const {
        data,
        showModal,
        onHideModal,
        deleteTodo,
        updateDoneTodoData,
        updateUndoneTodoData,
        index,
        done
    } = props

    let [title, setTitle] = useState("")
    let [description, setDescription] = useState("")

    const updateData = () => {
        let payload = {
            id: data.id,
            title: title === "" ? data.title : title,
            description: description === "" ? data.description : description,
            status: 0,
            created_at: data.created_at
        }
        done ? updateDoneTodoData(payload) : updateUndoneTodoData(payload)
        onHideModal()
    }
    return (
            <Modal show={showModal} onHide={onHideModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Task Edit
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            className="input-form"
                            defaultValue={data.title}
                            onChange={(event) => setTitle(event.target.value)}
                        />
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            placeholder="No Description"
                            className="input-form"
                            defaultValue={data.description}
                            onChange={(event) => setDescription(event.target.value)}
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={updateData}>Save</Button>
                    {
                        done ? null : <Button variant="danger" onClick={() => { deleteTodo(index); onHideModal() }}><MdDelete /></Button>
                    }
                </Modal.Footer>
            </Modal>
    )
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        deleteTodo: (index) => dispatch(removeTodoData(index)),
        updateUndoneTodoData: (data) => dispatch(updateUndoneTodo(data)),
        updateDoneTodoData: (data) => dispatch(updateDoneTodo(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskModal)
