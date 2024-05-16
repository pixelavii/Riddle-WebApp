import logo from '/Logo/bgicon.png';
import './signin.css';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Main3 from '../main/main3';

const SignIn = () => {

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const endUser = Object.fromEntries(formData);

    let Email = endUser.Email;
    let Password = endUser.Password;

    try {
      const response = await axios.post("http://localhost:8800/signin", { Email, Password });
      if (response.data.success) {
        alert("Signin Successfully");
      }
      navigate("/");
    } catch (err) {
      alert("Invalid Email or Password");
    }
  }

  return (
    <>
      <Navbar />
      <div className="signin-container">
        <div className="inside-signin-container">
          <form className="card-item" onSubmit={handleLogin}>
            <img src={logo} alt="" />
            <a className="singup-item">Log In</a>

            <div className="inputBox1">
              <input type="email" required="required" name='Email' />
              <span className="user">Email</span>
            </div>

            <div className="inputBox">
              <input type="password" required="required" name='Password' />
              <span>Password</span>
            </div>

            <button className="enter-button" type='submit'>Log In</button>
            <Link to="/forgetpassword" style={{ textDecoration: 'none' }}>Forget Password?</Link>
            <p>Don't have an account? <Link to="/signup" style={{ textDecoration: 'none' }}>Sign Up</Link></p>
          </form>
        </div>
      </div>
      <Main3 />
      <Footer />
    </>
  )
}

export default SignIn