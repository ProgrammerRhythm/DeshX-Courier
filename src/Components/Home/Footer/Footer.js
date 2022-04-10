import React from 'react';
import './Footer.css'
import logo from '../../../Images/output-onlinegiftools.gif'
const Footer = () => {
    return (
        <div className="Footer">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
                        <img style={{height: '60px'}} src={logo} alt="" />
                        <p style={{padding: '0px 10px',color: 'rgb(66, 66, 66)'}}>Download our app for the fastest solutions</p>
                        <img style={{height: '50px',padding: '0px 10px'}} src="https://en.logodownload.org/wp-content/uploads/2019/06/get-it-on-google-play-badge.png" alt="" />
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3 gap">
                        <h5>Important links</h5>
                        <p>C2C</p>
                        <p>Coverage Area</p>
                        <p>Privacy Policy</p>
                        <p>FAQs</p>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3 gap">
                    <h5>Important links</h5>
                        <p>C2C</p>
                        <p>Coverage Area</p>
                        <p>Privacy Policy</p>
                        <p>FAQs</p>
                    </div>
                    
                    <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3 gap">
                    <h5>Important links</h5>
                        <p>C2C</p>
                        <p>Coverage Area</p>
                        <p>Privacy Policy</p>
                        <p>FAQs</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;