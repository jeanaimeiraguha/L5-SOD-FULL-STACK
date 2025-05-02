import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Insert = () => {
    const navigate=useNavigate()
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!username || !password) {
            alert("Please fill these fields");
            return;
        }

        axios.post("http://localhost:5000/insert", { username, password })
            .then((res) => {
                alert("User added successfully");
                navigate('/select')
            })
            .catch((err) => {
                console.log("Failed", err);
                alert("Failed to add user. Please try again.");
            });
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                UserName <input type="text" value={username} onChange={e => setUserName(e.target.value)} /> <br />
                Password <input type="password" value={password} onChange={e => setPassword(e.target.value)} /> <br />
                <button type='submit'>Add</button>
            </form>
        </>
    )
}

export default Insert;