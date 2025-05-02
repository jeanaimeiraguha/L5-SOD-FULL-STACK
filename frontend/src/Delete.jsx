// import React from 'react'
// // import { useParams } from 'react-router-dom'
// import axios from 'axios'
// import { useState,useEffect } from 'react'
// import{useNavigate,useParams} from 'react-router-dom'
// const Delete = () => {
//      const navigate=useNavigate();
//      const[user,setUser]=useState([])
// useEffect(()=>{
//      axios.get(`http://localhost:3000/select/${id}`)
//      .then((res)=>{
//           setUser(res.data);
//      })
//      .catch((err)=>{
//           console.log("Failed")
//      })
//       const handleDelete=()=>{
//           axios.delete(`http://localhost:3000/delete/${id}`)
//           .then((res)=>{
//                navigate('/')
//           })
//       }
// },[id])
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Delete

//DELETING DATA
import axios from 'axios'
import {useNavigate,useParams} from 'react-router-dom'
import{useState,useEffect} from 'react'
const Delete=()=>{
     const navigate=useNavigate()
     const [user,setUser]=useState([]);
     useEffect(()=>{
          axios.get(`http://localhost:3000/select/${id}`)
          .then((res)=>{
               setUser(res.data);
          })
          .catch((err)=>{
               console.log("error occured")
          })
          const handleDelete=()=>{
          
               axios.delete(`http://localhost:3000/delete/${id}`)
          .then((res)=>{
               navigate('/select')
          })
          }
     },[id])
     return(
          <>
          
          </>
     )
}
export default Delete;