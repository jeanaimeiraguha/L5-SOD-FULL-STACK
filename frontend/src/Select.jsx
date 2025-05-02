import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link ,useParams} from 'react-router-dom';
const Select = () => {
  const [users, setUsers] = useState([""]);
  const{id}=useParams()
  const navigate = useNavigate();

  useEffect(() => {
    // fetchUsers();
    axios.get("http://localhost:5000/select")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log("Failed to fetch users", err);
      });
  }, [id]);
  

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/delete/${id}`)
      .then((res) => {
        alert("User deleted");
        navigate('/select')
        
      })
      .catch((err) => {
        console.log("Failed to delete user", err);
      });
  };

  return (
    <>
      <h2>List Of Users</h2>
     <Link to="/insert">Add</Link>
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
             
  {/* <Link to={`/delete/${user.id}`}>Delete</Link> */}

                <button onClick={() => handleDelete(user.id)}>Delete</button>
                <Link to={`/update/${user.id}`}>Update</Link>
                {/* <Link to={`/delete/${user.id}`}>Delete</Link> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Select;
