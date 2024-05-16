import './main2.css';
import image1 from '/BgImage/bikeheading.jpg';
import image2 from '/BgImage/cityride.jpg';
import image3 from '/BgImage/rideown.jpg';

const Main2 = () => {

    let imgStyle1 = {
        backgroundImage: `url(${image1})`,
        height: "40%",
        width: "100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "local"
    }

    let imgStyle2 = {
        backgroundImage: `url(${image2})`,
        height: "40%",
        width: "100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "local"
    }

    let imgStyle3 = {
        backgroundImage: `url(${image3})`,
        height: "40%",
        width: "100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "local"
    }
    return (
        <div className='main2-container'>
            <div className="main2-content">
                <h2>Why ride with Riddle ?</h2>
                <hr />
                <p>Wide range of bikes, Offered here </p>
            </div>
            <div className="main2-inside-container">
                <div className="box">
                    <div className="img1" style={imgStyle1}></div>
                    <div className="box-content">
                        <h4>Ride bike by your own</h4>
                        <hr />
                        <p>Here, you can ride bike by your own. You just have to select a bike nearest to your location, go to pick the selected bike and enjoy the ride by your own.</p>
                    </div>
                </div>
                <div className="box">
                    <div className="img2" style={imgStyle2}></div>
                    <div className="box-content">
                        <h4>Explore the city</h4>
                        <hr />
                        <p>You can go wherever you want to go in that particular city where you rented bike for a selected time period by you. Explore the area by riding yourself.</p>
                    </div>
                </div>
                <div className="box">
                    <div className="img3" style={imgStyle3}></div>
                    <div className="box-content">
                        <h4>Enjoy your solo riding</h4>
                        <hr />
                        <p>You can ride solo or with your friend in the city. Take a trip today for exploring the city where you want to explore several places in the city.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main2