import './main3.css';
import playstore from '/Social Handles/playstore.png';
import appstore from '/Social Handles/appstore.png';
import windowstore from '/Social Handles/windowstore.png';


const Main3 = () => {
  return (
    <div className='storeapp'>
        <h2>Book a Riddle from the App</h2>
        <p>Download the app for exclusive deals and ease of booking</p>
        <div className="riddle-app">
            <ul>
                <li><img src={playstore} alt="" /></li>
                <li><img src={appstore} alt="" /></li>
                <li><img src={windowstore} alt="" /></li>
            </ul>
        </div>
    </div>
  )
}

export default Main3