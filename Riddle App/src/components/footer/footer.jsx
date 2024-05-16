import './footer.css';
import instagram from '/Social Handles/instagram.png';
import facebook from '/Social Handles/facebook.png';
import twitter from '/Social Handles/twitter.png';
import youtube from '/Social Handles/youtube.png';
import logo from '/Logo/bgicon.png';

const Footer = () => {
  return (
    <div className="footer">
        <div className="discover">
            <p>Discover Riddle</p>
            <ul>
                <li>Career</li>
                <li>Offers</li>
                <li>Media Center</li>
            </ul>
        </div>
        <hr />
        <div className="social">
            <p>Social Links</p>
            <ul>
                <li><img src={instagram} alt="" height="35px"/></li>
                <li><img src={facebook} alt="" height="35px"/></li>
                <li><img src={twitter} alt="" height="35px"/></li>
                <li><img src={youtube} alt="" height="35px"/></li>
            </ul>
        </div>
        <hr />
        <div className="bottom">
            <img src={logo} alt="" height="80px"/>
            <ul>
                <li>Notices</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <hr />
        <p className='copyright'>Copyright © 2024 Riddle Pvt. Ltd. All rights reserved.</p>
    </div>
  )
}

export default Footer