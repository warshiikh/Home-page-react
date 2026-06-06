import { BookOpen } from "lucide-react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
         <div className="navbar-logo-icon">
              <BookOpen size={20} />
            </div>
        <h2>EduBlog</h2>
        
</div>
      <ul className="nav-links">
        <li>Home</li>
        <li>Categories</li>
        <li>Articles</li>
        <li>Resources</li>
      </ul>

      <div className="buttons">
        <button className="login">Login</button>
        <button className="signup">Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;