import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
    <ul className="nav-list">
        <li><a href="/">Home</a></li>
        <li><a href="/createBlog">Add Blog</a></li>
        <li><a href="/">Test</a></li>

      
    </ul>
</nav>
  )
}

export default Navbar