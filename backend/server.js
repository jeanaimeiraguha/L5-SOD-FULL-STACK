
import cors from 'cors';
import mysql from 'mysql';
import express from 'express';
const app = express();
app.use(cors());
app.use(express.json());
const db=mysql.createConnection({
     host:'localhost',
     user:'root',// user
     password:'',
     database:'gikonko' // databse name
})
db.connect((err)=>{
     if(err){
          console.log('Error occured')
     }
else{
     console.log("Connected")
}
})
app.get('/select',(req,res)=>{
     const sql="SELECT * FROM users";
db.query(sql, (err, result) => {
     if (err) return res.status(400).json("Error in selecting");
     return res.status(200).json(result);
});
})
app.post('/insert',(req,res)=>{
     const{username,password}=req.body;
     const sql="INSERT INTO users(username,password)VALUES(?,?)";
     db.query(sql,[username,password],(err,result)=>{
          if(err) return res.status(400).json("Failed to insert")
     return res.status(200).json(result)
     })
})

app.listen(3000,()=>{
     console.log("Server is running on http://localhost:3000")
})