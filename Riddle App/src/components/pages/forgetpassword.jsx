import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import logo from '/Logo/bgicon.png';
import './signin.css';
import Main3 from '../main/main3';

const ForgetPassword = () => {
    return (
        <>
            <Navbar />
            <div className="signin-container">
                <div className="inside-signin-container">
                    <form className="card-item">
                        <img src={logo} alt="" />
                        <a className="singup-item">Forget Password</a>

                        <div className="inputBox1">
                            <input type="email" required="required" />
                            <span className="user">Email</span>
                        </div>

                        <button className="enter-button">Reset Password</button>
                    </form>
                </div>
            </div>
            <Main3 />
            <Footer />
        </>
    )
}

export default ForgetPassword