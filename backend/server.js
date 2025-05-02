import cors from 'cors';
import mysql from 'mysql';
import express from 'express';
const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // user
  password: '',
  database: 'gikonko', // database name
});

db.connect((err) => {
  if (err) {
    console.log('Error occurred');
  } else {
    console.log('Connected');
  }
});

// Fetch specific user by id for updating
app.get('/select/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'SELECT * FROM users WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(400).json("Error fetching user data.");
    return res.status(200).json(result[0]); // Send the first matching user
  });
});

// Select all users
app.get('/select', (req, res) => {
  const sql = 'SELECT * FROM users';
  db.query(sql, (err, result) => {
    if (err) return res.status(400).json("Error in selecting users.");
    return res.status(200).json(result);
  });
});

// Insert a new user
app.post('/insert', (req, res) => {
  const { username, password } = req.body;
  const sql = 'INSERT INTO users(username, password) VALUES(?, ?)';
  db.query(sql, [username, password], (err, result) => {
    if (err) return res.status(400).json("Failed to insert user.");
    return res.status(200).json(result);
  });
});

// Delete a user by id
app.delete('/delete/:id', (req, res) => {
  const id = req.params.id;
  const sql = 'DELETE FROM users WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(400).json("Failed to delete user.");
    return res.status(200).json(result);
  });
});

// Update user by id
app.put('/update/:id', (req, res) => {
  const id = req.params.id;
  const { username, password } = req.body;
  const sql = 'UPDATE users SET username = ?, password = ? WHERE id = ?';
  db.query(sql, [username, password, id], (err, result) => {
    if (err) return res.status(400).json("Failed to update user.");
    return res.status(200).json(result);
  });
});

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
