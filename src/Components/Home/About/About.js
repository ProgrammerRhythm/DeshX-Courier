import {useEffect} from 'react';
import AOS  from 'aos';
import 'aos/dist/aos.css';
import './About.css'
const About = () => {
    useEffect(() => {
        AOS.init();
    })
    return (
        <div>
            <h1 data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="100" data-aos-offset="10" className="us">Why <span style={{color:'#41418c'}}>Us</span></h1>  
            <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-4 letMargin">
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4" data-aos="fade-up" data-aos-duration="3500">
                    <div className="card svgIcon">
                    <img src="https://ecourier.com.bd/wp-content/uploads/icon_solution.svg" alt="" />
                    <div className="card-body">
                        <h5 className="card-title textCenter">One Stop Solution</h5>
                        <p className="card-text cardtCenter">TWe understand how to make logistics work for our merchant partners. Our job is to let our partners focus on their core business while we take care of the rest</p>
                    </div>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4" data-aos="fade-up" data-aos-duration="3500">
                    <div className="card svgIcon">
                    <img id="specialImg" src="https://ecourier.com.bd/wp-content/uploads/icon_wide_cover.svg" alt="" />
                    <div className="card-body">
                        <h5 className="card-title textCenter">Wide Coverage</h5>
                        <p className="card-text cardtCenter">We have a dedicated delivery channel of 350+ delivery agents in Dhaka and Chattogram. We have partnered with 50+ franchises all over the country as well.</p>
                    </div>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4" data-aos="fade-up" data-aos-duration="3500">
                    <div className="card svgIcon">
                    <img src="https://ecourier.com.bd/wp-content/uploads/icon_track.svg" alt="" />
                    <div className="card-body">
                        <h5 className="card-title textCenter">Full Tracking</h5>
                        <p className="card-text cardtCenter">Merchants have full access of tracking every step of the delivery. We provide end to end real time tracking facilities through email, sms and QR code.</p>
                    </div>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="3500" className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                    <div className="card svgIcon">
                    <img src="https://ecourier.com.bd/wp-content/uploads/icon_cash-hand.svg" alt="" />
                    <div className="card-body">
                        <h5 className="card-title textCenter">Delivery confirmation with OTP</h5>
                        <p className="card-text cardtCenter">Two factor authentications - OTP verification is implemented at the time of delivery to ensure an additional layer of security to the delivered package.</p>
                    </div>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="3500" className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                    <div className="card svgIcon">
                    <img src="https://ecourier.com.bd/wp-content/uploads/icon_truck_fast.svg" alt="" />
                    <div className="card-body">
                        <h5 className="card-title textCenter">Fastest Service</h5>
                        <p className="card-text cardtCenter">Our team works round the clock to ensure fastest delivery and minimize cancellation ratio so that we, as a business partner, can ensure our customer’s growth.</p>
                    </div>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="3500" className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                    <div className="card svgIcon">
                    <img src="https://ecourier.com.bd/wp-content/uploads/icon_delivey.svg" alt="" />
                    <div className="card-body">
                        <h5 className="card-title textCenter">Cash on Delivery (COD)</h5>
                        <p className="card-text cardtCenter">We collect cash from your customer and transfer it to you on time through a formal banking channel, and of course with all the detailed supporting information.</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default About;