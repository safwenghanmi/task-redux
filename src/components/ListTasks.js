import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Task from './Task';

const ListTasks = () => {
  const list= useSelector(state => state.listReducer.listTasks)
  const [status , setStatus] = useState("All")

  return (
    <div>
       <Button onClick={() => setStatus("All")}>ALL</Button>
       <Button onClick={() => setStatus("DONE")}>DONE</Button>
       <Button onClick={() => setStatus("UNDONE")}>UNDONE</Button>

       {
        status === "DONE" ?
        list.filter((el)=> el.isDone=== true)
        .map((el)=> <Task task={el} key={el.id}/>):
        status === "UNDONE" ?
        list.filter((el)=> el.isDone=== false)
        .map((el) => <Task task={el} key={el.id}/>):
        list.map(el => <Task task={el} key={el.id}/>  )
       }
    </div>
  )
}

export default ListTasks
