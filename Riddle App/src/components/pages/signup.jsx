import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import logo from '/Logo/bgicon.png';
import './signin.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Main3 from '../main/main3';

const SignUp = () => {

  const navigate = useNavigate();

  const SignupSubmission = async (e) => {
    e.preventDefault();
    const signupData = new FormData(e.target);

    const user = Object.fromEntries(signupData);

    let Userdata = {
      Name: user.Name,
      Email: user.Email,
      Mobile: user.Mobile,
      Password: user.Password,
    }

    try {
      await axios.post("http://localhost:8800/signup", Userdata)
      alert("User Registered Successfully");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }


  return (
    <>
      <Navbar />
      <div className="signin-container">
        <div className="inside-signin-container">
          <form className="card-item" onSubmit={SignupSubmission}>
            <img src={logo} alt="" />
            <a className="singup-item">Sign Up</a>

            <div className="inputBox1">
              <input type="text" required="required" name='Name' />
              <span className="user">Name</span>
            </div>

            <div className="inputBox1">
              <input type="email" required="required" name='Email' />
              <span className="user">Email</span>
            </div>

            <div className="inputBox1">
              <input type="text" required="required" name='Mobile' />
              <span className="user">Mobile No.</span>
            </div>

            <div className="inputBox">
              <input type="password" required="required" name='Password' />
              <span>Password</span>
            </div>

            <button type='submit' className="enter-button">Sign Up</button>
            <p>Already have an account? <Link to="/signin" style={{ textDecoration: 'none' }}>Sign In</Link></p>
          </form>
        </div>
      </div>
      <Main3 />
      <Footer />
    </>

  )
}

export default SignUp