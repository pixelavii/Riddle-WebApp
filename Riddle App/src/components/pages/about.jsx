import Navbar from '../navbar/navbar'
import './about.css'
import bgImage from '/BgImage/bg1.jpg';
import contextImage from '/BgImage/context-img.jpg';
import facebookPic from '/Social Handles/facebook_black.png';
import linkedinPic from '/Social Handles/linkedin_black.png';
import instagramPic from '/Social Handles/instagram_black.png';
import logo from '/Logo/bgicon.png';
import founder from '/BgImage/avii007.jpg';
import Footer from '../footer/footer';
import Main3 from '../main/main3';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <>
            <Navbar />
            <div className="about-content" style={{ backgroundImage: `url(${bgImage})` }}>
                <h2>Who are we ?</h2>
                <p>The Riddle Story</p>
            </div>
            <div className="about-container">
                <div className="about-container-content">
                    <h2 className='type'>About Riddle</h2>
                    <hr />
                    <p className='type'>Riddle is India’s largest bike rental platform, serving 250+ cities across India.
                        The Riddle app offers you wide range of bikes near you.
                        For rent a bike you just have to download The Riddle App from playstore and enter your current location,
                        after this a wide range of bikes offered here and you just have to choose the bike you want to
                        rent and feed the details about how much time for you rent the Bike.
                        <br />Have a Great Journey !
                    </p>
                </div>
                <div className="about-container-img">
                    <img src={contextImage} alt="" />
                </div>
            </div>
            <div className="meet-the-founder">
                <h2>Meet The Founder</h2>
                <img src={logo} alt="" />
            </div>
            <div className="founder">
                <div className='inside-founder'>
                    <img src={founder} alt="" />
                    <p>Avinash Chaurasia</p>
                    <div className="founder-social-logo">
                        <Link to='https://www.instagram.com/zen.avii/' target='blank'><img src={facebookPic} alt="" /></Link>
                        <Link to='https://www.linkedin.com/in/avinash-chaurasia-398269248/' target='blank'><img src={linkedinPic} alt="" /></Link>
                        <Link to='https://www.instagram.com/zen.avii/' target='blank'><img src={instagramPic} alt="" /></Link>
                    </div>
                </div>
            </div>
            <Main3 />
            <Footer />
        </>
    )
}

export default About