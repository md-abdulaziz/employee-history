import React, { useContext } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext/UserContext';
import "./Delete.css";
const Delete = () => {
    const [ users , setUsers] = useContext(UserContext);
    const {id} = useParams();
    const deleteUser = (id) =>{
        const user = users.filter((user) => user.id != id);
        setUsers(user);
    }
   

    return (
        <div>
        <Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>Are You sure ?</Modal.Title>
  </Modal.Header>
  <Modal.Footer>
      <Link to ="/">
    <Button className ="delete__btn" variant="info">Cancel</Button>
    <Button onClick = {() => deleteUser(id)} variant ="danger">Delete</Button>
    </Link>
  </Modal.Footer>
</Modal.Dialog>
        </div>
    );
};

export default Delete;