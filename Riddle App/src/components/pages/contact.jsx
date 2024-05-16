import Navbar from '../navbar/navbar';
import './contact.css';
import icon from '/Logo/bgicon.png';
import Main3 from '../main/main3';
import Footer from '../footer/footer';
import { useNavigate } from 'react-router-dom';

const Contact = () => {

  let bgStyle = {
    height: "100px",
    margin: "auto",
    display: "block",
    filter: "drop-shadow(rgb(72, 74, 70) -5px 3px 4px)" 
  };




  const navigate = useNavigate();


  // Sending Email Code

  const contactapikey = import.meta.env.VITE_CONTACT_TOKEN;
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", contactapikey);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert("Message Sent Successfully");
      navigate('/');
    }
  };

  return (
    <>
      <Navbar />
      <div className="contact-form">
      <h2>We will get back to you soon</h2>
        <div className="form-container">
          <img className='icon' src={icon} alt="" style={bgStyle} />
          <form className="form" onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input name="email" id="email" type="email" />
            </div>
            <div className="form-group">
              <label htmlFor="textarea">Enter your message</label>
              <textarea cols="50" rows="10" id="textarea" name="Message"></textarea>
            </div>
            <button type="submit" className="form-submit-btn">Submit</button>
          </form>
        </div>
      </div>
      <Main3 />
      <Footer />
    </>

  )
}

export default Contact