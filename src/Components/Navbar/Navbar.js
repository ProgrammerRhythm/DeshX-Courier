import React from 'react';
import logo from '../../Images/output-onlinegiftools.gif'

const Navbar = () => {
    return (
        <div>
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
                <button style={{padding: '10px 30px',borderRadius: '30px'}}  data-bs-toggle="modal" href="#exampleModalToggle" className="btn styleBtn">Sing in</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
        </div>
    );
};

export default Navbar;