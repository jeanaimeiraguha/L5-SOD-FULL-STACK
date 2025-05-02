import { useState, useEffect } from 'react';
import axios from 'axios';
// import {useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
const Select = () => {
  const [users, setUsers] = useState([""]);
  // const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  
    axios.get("http://localhost:5000/select")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log("Failed to fetch users", err);
      });
  

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/delete/${id}`)
      .then((res) => {
        alert("User deleted");
        
      })
      .catch((err) => {
        console.log("Failed to delete user", err);
      });
  };

  return (
    <>
      <h2>List Of Users</h2>
      {/* <Link to="/insert">Add</Link> */}
      <table border={2}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Password</th>
            <th colSpan={2}>Operations</th>
          </tr>
        </thead>
        <tbody>
          {users && users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.password}</td>
              <td>
                <button onClick={() => navigate(`/update/${user.id}`)}>Update</button>
              </td>
              <td>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Select;
