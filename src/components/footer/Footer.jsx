import { Link } from 'react-router-dom';
import '../footer/Footer.css';

function Footer() {
  return (
    <div className="footer">

      <div className="top-section">
        <div className="logo">
          <img src="/assets/shoe-bla.png" alt="Ecommerce Logo" className='logo' /> {/* Add logo src */}
        </div>
        {/* <div className="social-box">
          <i className='bx bxl-facebook bx-flashing' ></i>
          <i className='bx bxl-twitter bx-tada' ></i>
          <i className='bx bxl-instagram bx-burst'></i>
          <i className='bx bxl-youtube bx-fade-up' ></i>
        </div> */}
      </div>

      <div className="mid-section">
        <div className="Quick-Links">
          <div className="pages">
            <h3>Pages</h3>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="Products">
            <h3>Products</h3>
            <Link to="#" className='link'>Category 1</Link>
            <Link to="#" className='link'>Category 2</Link>
            <Link to="#" className='link'>Category 3</Link>
          </div>

          <div className="Resources">
            <h3>Resources</h3>
            <Link to="#">FAQs</Link>
            <Link to="#">Quick Start</Link>
            <Link to="#">Documentation</Link>
            <Link to="#">User Guide</Link>
          </div>
        </div>

        <div className="newsLetter">
          <h3>NewsLetter</h3>
          <form action="" className='form'>
            <label htmlFor="newsletter-email">email</label>
            <input
              type="email"
              name="email"
              id="newsletter-email"
              placeholder="mail@starshop.com"
            />
            <div className="form-bottom">
              <div>
                <input type="checkbox" id="agree" /> 
                <label htmlFor="agree" className='checkbox-label'>
                  I agree with the <Link to="/">Privacy Policy</Link> and{' '}
                  <Link to="/">Terms of Conditions</Link>
                </label>
              </div>
              <button type="submit" className="submit">
                Send
              </button>
            </div>
          </form>
        </div>
        
      </div>

      <div className="bottom-section">
        <p className="copyright">
          &copy; 2022 Ecommerce Commerce. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;