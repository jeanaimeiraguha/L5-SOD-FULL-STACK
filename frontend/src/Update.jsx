// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate, useParams } from 'react-router-dom';

// const Update = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const { id } = useParams();
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios.get(`http://localhost:3000/select/${id}`)
//       .then((res) => {
//         setUsername(res.data.username); // Assuming backend returns { username, password }
//         setPassword(res.data.password);
//       })
//       .catch((err) => {
//         console.log("Error fetching data", err);
//       });
//   }, [id]);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (!username || !password) {
//       alert("Please fill these fields");
//       return;
//     }

//     axios.put(`http://localhost:3000/update/${id}`, {
//       username,
//       password
//     })
//       .then((res) => {
//         alert("User Updated successfully");
//         navigate('/select');
//       })
//       .catch((err) => {
//         console.log("Update Failed", err);
//       });
//   };

//   return (
//     <div>
//       <h2>Update User</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Username:
//           <input
//             type="text"
//             value={username}
//             onChange={e => setUsername(e.target.value)}
//           />
//         </label>
//         <br />
//         <label>
//           Password:
//           <input
//             type="password"
//             value={password}
//             onChange={e => setPassword(e.target.value)}
//           />
//         </label>
//         <br />
//         <button type="submit">Update</button>
//       </form>
//     </div>
//   );
// };

// export default Update;
