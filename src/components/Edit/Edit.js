import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext/UserContext';
import "./Edit.css";

const Edit = () => {
    const [ users , setUsers] = useContext(UserContext);
    const {id} = useParams();
    const user = users.filter((user) => user.id == id);
    const [name, setName] = useState(user[0].name); 
    const [position, setPosition] = useState(user[0].position);  
    const [salary, setSalary] = useState(user[0].salary); 

    const editName =(e) =>{
        setName(e.target.value);
        const edited_name = name;
        user[0].name = edited_name;
    }
    const editPosition =(e) =>{
        setPosition(e.target.value);
        const edited_position = position;
        user[0].position = edited_position;
    }
    const editSalary=(e) =>{
        setSalary(e.target.value);
        const edited_salary = salary;
        user[0].salary = edited_salary;
    }
        const editUser = (e) =>{
            e.preventDefault();
            setUsers([...users]);
        };
    return (
        <div className ="edit">
            <Form>
  <Form.Group>
    <Form.Label> <h1> Id N0  :{user[0].id}</h1></Form.Label>
  </Form.Group>
  <Form.Group >
    <Form.Label>Name</Form.Label>
    <Form.Control
     type="text" 
     name = "name"
     value ={name}
     onChange ={editName}
     placeholder="Enter Name" />
  </Form.Group>

  <Form.Group >
    <Form.Label>Position</Form.Label>
    <Form.Control
     type="text" 
     name = "position"
     value ={position}
     onChange ={editPosition}
     placeholder="Enter Position" />
  </Form.Group>
  <Form.Group >
    <Form.Label>Salary</Form.Label>
    <Form.Control
     type="text" 
     name = "salary"
     value ={salary}
     onChange ={editSalary}
     placeholder="Enter Salary" />
  </Form.Group>
  <Link to="/">
  <Button onSubmit= {() => editUser}variant="primary" type="submit">
    Edit User
  </Button>
      <Button className = "action__btn" variant ="info"> Back to Home
      </Button>
  </Link>
</Form>
        </div>
    );
};

export default Edit;