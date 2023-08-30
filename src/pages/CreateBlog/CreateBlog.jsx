import { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './CreateBlog.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateBlog = () => {
  const navigate = useNavigate()
  const [title,setTitle] = useState("");
  const [description,setDescription] = useState("")
  const [image,setImage] = useState("")
 
const createBlog=async (e)=>{
  e.preventDefault()
  const data = {
    title : title,
    description : description,
    avatar : image
  }
const response =   await axios.post("https://64ee09451f8721827142370c.mockapi.io/blogs/",data)

if(response.status == 201){
 navigate("/")
}else{
  alert("Something went wrong")
}

}

  return (
    <div className="container">
      <Navbar />
        <h1 className="form-title">Add Blog</h1>
        
        
        <form onSubmit={createBlog} >
       
            <input type="text" id="title" placeholder='title' name="title" required onChange={(e)=>setTitle(e.target.value)} />
            
            <textarea id="description" placeholder='description' name="description" rows="4" required onChange={(e)=>setDescription(e.target.value)} ></textarea>
            
            <input type="text" id="image" placeholder='image' name="image" required onChange={(e)=>setImage(e.target.value)} />
            
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default CreateBlog