import axios from 'axios'
import React from 'react'
import { useState,useEffect } from 'react'
const UserList = () => {
    const [listOfUSer ,setListOfUser]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((listOfUSer)=>setListOfUser(listOfUSer.data))
        .catch((err)=>console.log(err))
    })
  return (
    <div>
        <h2 style={{color:"royalblue"}}>API Chekpoint</h2>
        {listOfUSer.map(list=>
        <div style={{display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width:"60%",
        flexWrap:"wrap",
        margin:"30px auto"
        }}>

             <h4>title: {list.title}</h4>
             <p>body : {list.body}</p>
        </div>
        )
        }
    </div>
  )
}

export default UserList