import { BookOpen } from "lucide-react";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa6";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="footer-logo-icon">
              <BookOpen size={22} />
            </div>
            <h2>EduBlog</h2>
          </div>

          <p>
            Empowering learners and educators worldwide through quality
            educational content and resources.
          </p>
          
          <div className="social-links">
            <a href="#"><FaFacebookF size={24} /></a>

            {/* X (Twitter) */}
            <a href="#"><FaXTwitter size={24} /></a>
           <a href="#"><FaLinkedinIn size={24} /></a>
            <a href="#"><FaInstagram size={24} /></a>
            <a href="#"><FaGithub size={24} /></a>
          </div>
        </div>

        <div className="footer-column">
          <h4>Explore</h4>
          <a href="#">All Articles</a>
          <a href="#">Categories</a>
          <a href="#">Trending</a>
          <a href="#">Resources</a>
        </div>

        <div className="footer-column">
          <h4>Learning</h4>
          <a href="#">For Students</a>
          <a href="#">For Teachers</a>
          <a href="#">Careers</a>
          <a href="#">Contribute</a>
        </div>

        <div className="footer-column">
          <h4>Support</h4>
          <a href="#">Contact Us</a>
          <a href="#">Help Center</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>

      </div>

      <div className="footer-line"></div>

      <div className="footer-bottom">
        <p>
          © 2024 EduBlog. All rights reserved. Empowering education worldwide.
        </p>

        <div className="footer-bottom-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;