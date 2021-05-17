import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext/UserContext';
import "./Create.css";

const Create = () => {
    const [ users , setUsers] = useContext(UserContext);
    const [id, setId] = useState("");
    const [name, setName] = useState(""); 
    const [position, setPosition] = useState("");  
    const [salary, setSalary] = useState(""); 
    const updateId = (e) => {
        setId(e.target.value);
    };
    const updateName =(e) =>{
        setName (e.target.value);
    }; 
    const updatePosition =(e) =>{
        setPosition (e.target.value);
    }; 
    const updateSalary =(e) =>{
        setSalary (e.target.value);
    }; 
    const addUser =(e) => {
        e.preventDefault();
        setUsers([...users, {id:id, name:name, position: position, salary :salary}])
    }


    return (
        <div>
 <Form onSubmit ={addUser}>
  <Form.Group>
    <Form.Label>Id</Form.Label>
    <Form.Control
     type="text"
     name ="id"
     value ={id} 
     onChange = {updateId}
    placeholder="Enter ID" />
  </Form.Group>
  <Form.Group >
    <Form.Label>Name</Form.Label>
    <Form.Control
     type="text" 
     name = "name"
     value ={name}
     onChange ={updateName}
     placeholder="Enter Name" />
  </Form.Group>

  <Form.Group >
    <Form.Label>Position</Form.Label>
    <Form.Control
     type="text" 
     name = "position"
     value ={position}
     onChange ={updatePosition}
     placeholder="Enter Position" />
  </Form.Group>
  <Form.Group >
    <Form.Label>Salary</Form.Label>
    <Form.Control
     type="text" 
     name = "salary"
     value ={salary}
     onChange ={updateSalary}
     placeholder="Enter Salary" />
  </Form.Group>
  <Button className ="action__btn" variant="primary" type="submit">
    Create User
  </Button>
  <Link to="/">
      <Button className = "action__btn" variant ="info"> Back to Home
      </Button>
  </Link>
</Form>
</div>
    );
};

export default Create;