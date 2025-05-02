import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Insert = () => {
    const navigate = useNavigate();
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!username || !password) {
            alert("Please fill these fields");
            return;
        }

        axios.post("http://localhost:5000/insert", { username, password })
            .then((res) => {
                alert("User added successfully");
                navigate('/select');
            })
            .catch((err) => {
                console.log("Failed", err);
                alert("Failed to add user. Please try again.");
            });
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header bg-primary text-white">
                            <h3 className="text-center">Add New User</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input
                                        type="text"
                                        id="username"
                                        className="form-control"
                                        value={username}
                                        onChange={e => setUserName(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input
                                        type="password"
                                        id="password"
                                        className="form-control"
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                </div>
                                <button type="submit" className="btn btn-success w-100">Add User</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Insert;
