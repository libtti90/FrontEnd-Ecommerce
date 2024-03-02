import { NavLink } from "react-router-dom";
import logo from '../../../src/assets/logo/logo4.png';



export default function Footer() {
  return (
    <footer className='main-footer'>
            <section className="footer-section">
            <div className="footer-logo">
            <img className="footer-logo" src={logo} alt="" />
            </div>
        </section>

        <section className="footer-section">
            <div>
                <ul className="footer-list" />
                    <li><NavLink to="/" className="link-footer">My Account</NavLink></li>
                    <li><NavLink to="/" className="link-footer">My reviews</NavLink> </li>
                    <li><NavLink to="/" className="link-footer">Email Preferences</NavLink></li>
                    <li><NavLink to="/" className="link-footer">Account settings</NavLink></li>
                    
                    

            </div>
        </section>
        <section className="footer-section">
            <div>
                <ul className="footer-list" />

                <li><NavLink to="/" className="link-footer">Help Center</NavLink></li>
                <li><NavLink to="/" className="link-footer">Shipping Information</NavLink></li>
                <li><NavLink to="/" className="link-footer">Contact Customer</NavLink> </li>
                <li><NavLink to="/" className="link-footer">Return Policy</NavLink></li>
                    
            </div>
        </section>
        <section className="footer-section">
            <div>
                <ul className="footer-list" />

                <li><NavLink to="/" className="link-footer">Tools & Resources</NavLink></li>
                <li><NavLink to="/" className="link-footer">Covers Measuring Guide</NavLink></li>
                <li><NavLink to="/" className="link-footer">How to Install</NavLink> </li>
                <li><NavLink to="/" className="link-footer">Frequently Asked Questions</NavLink></li>
                    
            </div>
        </section>
        <section className="footer-section">
            <div className="social-media">
                <ul className="footer-list" />

                <li><NavLink to="/" className="link-footer">Facebook</NavLink>
 
 <i class="fa-brands fa-facebook"></i></li>
                <li><NavLink to="/" className="link-footer">Instagram</NavLink><i class="fa-brands fa-instagram"></i></li>
                <li><NavLink to="/" className="link-footer">Twitter</NavLink> <i class="fa-brands fa-twitter"></i></li>
                
                    
            </div>
        </section>
        <section className="footer-section-last">
            <div className="terms">
                <ul className="footer-list">
                    <li><NavLink to="/" className="link-footer">TERMS OF SERVICE /</NavLink> </li>

                    <li><NavLink to="/" className="link-footer">PRIVACY POLICY</NavLink></li>
                </ul>
            </div>
        </section>
  </footer>
  )
}
