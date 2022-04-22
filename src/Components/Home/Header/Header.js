import {useEffect} from 'react';
import AOS  from 'aos';
import 'aos/dist/aos.css';
import './Header.css'
import headerLogo from '../../../Images/food-delivery1_ccexpress (1).png'
import Navbar from '../../Navbar/Navbar';
const Header = () => {
    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 1000,
            easing: 'ease'
        });
    })

    return (
        <div className="bg-img">
        <Navbar></Navbar>
        <div className="container">
            <div className="row main">
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 introMar animate__animated animate__fadeInLeft">
                  <h1 className="intro">Local Urgent Courier <br /> Delivery Services</h1>
                  <p className="intro-wrap">Do you need last minute delivery? we are here to rescue you. <br /> By using our shipping service, your goods will arrive in <br /> less than 90 minutes.
                  </p>
                  <div className="bttn">
                  <button style={{padding: '13px 35px',borderRadius: '30px', fontWeight: 'bold'}}  className="">Book a Delivery</button>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 animate__animated animate__fadeInRight">
                <img className="img-fluid" src={headerLogo} alt="" />
                </div>
            </div>
        </div>


          


    </div>
    
    );
};

export default Header;