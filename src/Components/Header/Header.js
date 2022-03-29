import React from 'react';
import './Header.css'
import logo from '../../Images/output-onlinegiftools.gif'
import headerLogo from '../../Images/food-delivery1_ccexpress.png'
const Header = () => {
    return (
        <div className="bg-img">
    <div className="container header1">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand animate__animated animate__fadeInLeft" href="/"><img style={{height: "80px"}} src={logo} alt="" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end animate__animated animate__fadeInRight" id="navbarNav">
            <ul className="navbar-nav responsive">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/about">About us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href='/prices'>Prices</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/other">Others</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/blog">Blog</a>
              </li>
              <li className="nav-item">
                <button style={{padding: '10px 30px',borderRadius: '30px'}}  className="btn styleBtn">Sing in</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

    <div className="container">
        <div className="row main">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 introMar">
              <h1 className="intro">Local Urgent Courier <br /> Delivery Services</h1>
              <p className="intro-wrap">Do you need last minute delivery? we are here to rescue you. <br /> By using our shipping service, your goods will arrive in <br /> less than 90 minutes.
              </p>
              <div className="bttn">
              <button style={{padding: '13px 35px',borderRadius: '30px', fontWeight: 'bold'}}  className="">Book a Delivery</button>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
            <img className="img-fluid" src={headerLogo} alt="" />
            </div>
        </div>
    </div>

    </div>
    
    );
};

export default Header;