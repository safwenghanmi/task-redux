import React from 'react'
import { useDispatch } from "react-redux";
import Edit from './Edit';
import Button from 'react-bootstrap/Button';
import { delete_task , done_task } from '../JS/Action';

const Task = ({task}) => {
  const dispatch = useDispatch()
  return (
    <div className="task-container">
      <span className={task.isDone? "done": null}>{task.text}</span>
      <Edit task= {task}/>
      <Button variant="primary" onClick={()=>dispatch(delete_task (task.id))}>DELETE</Button>
      <Button variant="primary" onClick={()=>dispatch(done_task (task.id))}>{task.isDone ? "UNDONE":"DONE"} </Button>

    </div>
  )
};

export default Task