
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AllBlogs from './pages/AllBlogs/AllBlogs'
import SingleBlog from './pages/SingleBlog/SingleBlog'
import CreateBlog from './pages/CreateBlog/CreateBlog'
import EditBlog from './pages/EditBlog/EditBlog'

function App() {
 

  return (
   <BrowserRouter>
   
   <Routes>

    <Route path="/" element={<AllBlogs />} />
    <Route path="/singleBlog/:id" element={<SingleBlog />} />
    <Route path="/createBlog" element={<CreateBlog />} />
    <Route path="/editBlog/:id" element={<EditBlog />} />

   </Routes>
   </BrowserRouter>
  )
}

export default App
