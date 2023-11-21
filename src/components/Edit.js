import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { edit_task } from '../JS/Action';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';


const Edit = ({task}) => {
    const [show,setShow]=useState(false)
    const handeleClose = () => setShow(false)
    const handeleShow = () => setShow (true)
    const [newTask,setNewTask] = useState(task.text)
    const dispatch =useDispatch()
    const handleEdit = () => {
        dispatch(edit_task(task.id,newTask))
        handeleClose()
    }
  return (
    <div>
             <Button variant="primary" onClick={handeleShow}>
        EDIT
      </Button>

      <Modal show={show} onHide={handeleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Control placeholder="edit task" value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handeleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Edit