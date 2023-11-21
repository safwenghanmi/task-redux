import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add_task } from '../JS/Action';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const Addtask = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();


  const handleAdd = (e) => {
   e.preventDefault()
   if(text){
    dispatch (add_task({id:Math.random(),text , isDone:false}))
   }
   else{
    alert ("can't add an empty task")
   }

  };

  return (
    <div>
      <Form onSubmit={handleAdd}>
        <Form.Control placeholder="enter task title" onChange={(e)=>setText(e.target.value)} value={text} />
        <Button variant="primary" type="submit" onClick={handleAdd}>ADD</Button>
      </Form>
    
     
    </div>
  );
};

export default Addtask;
