import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const Update = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
   
    axios.get(`http://localhost:5000/select/${id}`)
      .then((res) => {
        setUsername(res.data.username);
        setPassword(res.data.password);
      })
      .catch((err) => {
        console.error("Error fetching data", err);
        alert("Failed to load user data. Please try again.");
      });
  }, [id]);

  const handleUpdate = () => {
    axios.put(`http://localhost:5000/update/${id}`, {
      username,
      password
    })
      .then(() => {
        alert("User updated successfully");
        navigate('/select'); 
      })
      .catch((err) => {
        console.error("Update failed", err);
        alert("Failed to update user. Please try again.");
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate input fields
    if (!username || !password) {
      alert("Please fill in both fields");
      return;
    }

    handleUpdate(); // Call the update function
  };

  return (
    <div>
      <h2>Update User</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Update;
