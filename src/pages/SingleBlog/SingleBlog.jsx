import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

import './SingleBlog.css'
import Navbar from "../../components/Navbar/Navbar";


const SingleBlog = () => {

  const {id} = useParams();
  const [blog,setBlog]  =  useState();

  const fetchBlog = async ()=>{
  const response = await axios.get("https://64ee09451f8721827142370c.mockapi.io/blogs/" + id)
  if(response.status == 200){
    setBlog(response.data)
    console.log(blog)
  }
  }

  // delete blog
  const deleteBlog = ()=>{
    
  }

  useEffect(()=>{
    fetchBlog()

  },[])

  return (
    <>
    <Navbar />
    <div className="blog-post">
    <div className="avatar">
        <img src={blog?.avatar} alt="Author Avatar" />
    </div>
    <div className="post-content">
        <h1 className="post-title">{blog?.title}</h1>
        <p className="post-description">{blog?.description}</p>
    <button onClick={()=>deleteBlog()} >Delete</button>
    </div>
</div>
    </>
  )
}

export default SingleBlog