import React from 'react';
import './Services.css'
import deliveryManPic from '../../../Images/delivery-man.png'
import stroe from '../../../Images/stroe.webp'
import service from '../../../Images/customised-solutions.webp'

const Services = () => {
    return (
        <div className="container">
           <h1 className='title animate__animated animate__bounceIn animate__delay-1s'><span id="color">We provide services</span> that you can rely on</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 animate__animated animate__fadeInDown animate__delay-2s">
                <div className="card h-100 style">
                <img src={deliveryManPic} alt="" />
                <div className="card-body">
                    <h5 className="card-title">Parcel Delivery</h5>
                    <p className="card-text">First-mile pickup, last-mile delivery services for individuals (C2C), small businesses (B2C) and corporates (B2B).</p>
                </div>
                </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 animate__animated animate__fadeInDown animate__delay-2s">
                <div className="card h-100 style">
                <img src={stroe} alt="" />
                <div className="card-body">
                    <h5 className="card-title">Warehouse</h5>
                    <p className="card-text">Complete fulfillment solutions including storing, sorting, processing</p>
                </div>
                </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 animate__animated animate__fadeInDown animate__delay-2s">
                <div className="card h-100 style">
                <img src={service} alt="" />
                <div className="card-body">
                    <h5 className="card-title">Customized Solutions</h5>
                    <p className="card-text">Tailor made solutions for your unique business needs.</p>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Services;