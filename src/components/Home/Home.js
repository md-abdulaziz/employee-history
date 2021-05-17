import React, { useContext } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { UserContext } from '../UserContext/UserContext';
import "./Home.css";

const Home = () => {
  const [ users , setUsers] = useContext(UserContext);

    return (
        <div>
          <Link to ="create/" > 
            <Button className="create__btn" variant = "primary"> Create user </Button> 
            </Link>
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Position</th>
      <th>Salary</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {
      users.map(user => 
        <tr>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.position}</td>
      <td>{user.salary}</td>
      <td>
      <Link to ={"/read/" +user.id}>
        <Button className = "action__btn" variant ="success">
          Read
        </Button>
        </Link>
        <Link to ={"/edit/" +user.id}>
        <Button className = "action__btn" variant ="info">
          Edit
        </Button>
        </Link>
        <Link to ={"/delete/" +user.id}>
        <Button className = "action__btn" variant ="danger">
          Delete
        </Button>
        </Link>
      </td>
    </tr>
        )
    }
    
  </tbody>
</Table>
        </div>
    );
};

export default Home;