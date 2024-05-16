import { useState, useEffect, useCallback } from 'react';
import './main1.css';
import bg2image from '/BgImage/bg2.jpg';
import bgicon from '/Logo/bgicon.png';
import { AddressAutofill, config } from '@mapbox/search-js-react';

const Main1 = () => {

  let imgStyle = {
    height: "100px",
    transformStyle: "preserve-3d",
    transform: "rotateX(15deg) rotateY(-20deg)",
    perspective: "500px",
    margin: "auto",
    display: "block",
    // webkitFilter: "drop-shadow(5px 5px 5px #666666)",
    filter: "drop-shadow(rgb(177, 208, 132) -5px 3px 4px"
  };

  let contentStyle = {
    paddingTop: "15px",
    transformStyle: "preserve-3d",
    transform: "rotateX(15deg) rotateY(-20deg)",
    perspective: "500px",
    margin: "auto",
    display: "block",
    wordSpacing: "2px",
    fontSize: "20px",
    fontWeight: "500",
    color: "#FFFFFF",
    textShadow: "0 3px 3px rgba(0, 0, 0, 1)",
    fontFamily: "'Martel', serif"
  }


  const [showFormExpanded, setShowFormExpanded] = useState(false);
  const [showMinimap, setShowMinimap] = useState(false);
  const [feature, setFeature] = useState();
  // const [showValidationText, setShowValidationText] = useState(false);
  const [token, setToken] = useState('');
  const [address, setAddress] = useState('');


  const maptoken = import.meta.env.VITE_MAP_ACCESS_TOKEN;

  useEffect(() => {
    const accessToken = maptoken;
    setToken(accessToken)
    config.accessToken = accessToken;
  }, [])


  // const { formRef, showConfirm } = useConfirmAddress({
  //   minimap: true,
  //   skipConfirmModal: (feature) => {
  //     ['exact', 'high'].includes(feature.properties.match_code.confidence)
  //   }
  // });

  const handleRetrieve = useCallback(
    (res) => {
      const feature = res.features[0];
      setFeature(feature);
      setShowMinimap(true);
      setShowFormExpanded(true);
    },
    [setFeature, setShowMinimap]
  );


    // function handleSaveMarkerLocation(coordinate) {
    //   console.log(`Marker moved to ${JSON.stringify(coordinate)}.`)
    // }

  // const handleSubmit = useCallback(async (e) => {
  //   e.preventDefault();
  //   const result = await showConfirm();
  //   if (result.type === 'nochange') submitForm();
  // }, [showConfirm]);

    // function submitForm() {
    //   setShowValidationText(true);
    //   setTimeout(() => {
    //     resetForm();
    //   }, 2500);
    // }

    // function resetForm() {
    //   const inputs = document.querySelectorAll("input");
    //   inputs.forEach(input => input.value = "");
    //   setShowFormExpanded(false);
    //   setShowValidationText(false);
    //   setFeature(null);
    // }


  return (
    <div className="main1-component" style={{ backgroundImage: `url(${bg2image})` }}>
      <div className="main1-inside-component">
        <img className='main1-image' src={bgicon} alt="" style={imgStyle} />
        <AddressAutofill accessToken={token} onRetrieve={handleRetrieve}>
          <input type="text" name="address" className="input" placeholder="Enter your location" autoComplete="address-line1" />
        </AddressAutofill>
        <p className='mapSlogan' style={contentStyle}>We are there,<br></br>where you start your journey</p>
      </div>
    </div>
  );
}

export default Main1;