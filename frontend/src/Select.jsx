import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link, useParams } from 'react-router-dom';

const Select = () => {
  const [users, setUsers] = useState([""]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
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
    <div className="container mt-4">
      <h2 className="text-center mb-4">List Of Users</h2>
      <Link to="/insert" className="btn btn-primary mb-3">Add User</Link>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Password</th>
            <th colSpan={2} className="text-center">Operations</th>
          </tr>
        </thead>
        <tbody>
          {users && users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.password}</td>
              <td className="d-flex justify-content-around">
                <button 
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
                <Link to={`/update/${user.id}`} className="btn btn-warning btn-sm">
                  Update
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Select;
