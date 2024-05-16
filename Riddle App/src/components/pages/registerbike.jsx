import './registerbike.css';
import Navbar from '../navbar/navbar';
import icon from '/Logo/bgicon.png';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Footer from '../footer/footer';
import Main3 from '../main/main3';

const RegisterBike = () => {

    let bgStyle = {
        height: "100px",
        margin: "auto",
        display: "block",
        filter: "drop-shadow(rgb(72, 74, 70) -5px 3px 4px)"
    };

    const navigate = useNavigate();

    const FormSubmission = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const obj = Object.fromEntries(formData);

            let data = {
                Name: obj.Name,
                Email: obj.Email,
                Mobile_No: obj.MobileNo,
                Bike_Name: obj.BikeName,
                Bike_No: obj.BikeNo,
                Bike_Model: obj.BikeModel
            }
    
        try{
            await axios.post("http://localhost:8800/registerbike", data )
            alert("Bike Registered Successfully");
            navigate("/");
        }catch(err){
            console.log(err);
        }
    }


    return (
        <>
            <Navbar />
            <div className="register-bike-form">
                <form className="container" onSubmit={FormSubmission}>
                    <div className="card">
                        <img src={icon} alt="" style={bgStyle} />
                        <p>Register Your Bike</p>
                        <div className="inputBox1">
                            <input type="text" required="required" name='Name' />
                            <span className="user">Name</span>
                        </div>

                        <div className="inputBox">
                            <input type="email" required="required" name='Email' />
                            <span>Email</span>
                        </div>

                        <div className="inputBox">
                            <input type="text" required="required" name='MobileNo' />
                            <span>Mobile No.</span>
                        </div>

                        <div className="inputBox">
                            <input type="text" required="required" name='BikeName' />
                            <span>Bike Name</span>
                        </div>

                        <div className="inputBox">
                            <input type="text" required="required" name='BikeNo' />
                            <span>Bike No.</span>
                        </div>

                        <div className="inputBox">
                            <input type="text" required="required" name='BikeModel' />
                            <span>Bike Model</span>
                        </div>

                        <button type='submit' className="enter">Submit</button>

                    </div>
                </form>
            </div>
            <Main3 />
            <Footer />
        </>
    )
}

export default RegisterBike