import React from 'react';
import logo from '../../Images/output-onlinegiftools.gif'

const Dashboard = (props) => {
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
              {/* <li className="nav-item">
                <button style={{padding: '10px 30px',borderRadius: '30px'}}  data-bs-toggle="modal" href="#exampleModalToggle"  className="btn styleBtn">Create Parcel</button>
              </li> */}
              <li className="nav-item">
                <div class="dropdown">
                    <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                       <img style={{borderRadius: '50%', height: '40px', width: '40px'}}src={`https://avatars.abstractapi.com/v1/?api_key=792016207dd64ae38c42b470904c44f4&name=${'Rhythm'}`} alt="" />
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="/">Create Parcel</a></li>
                        <li><a class="dropdown-item" href="/profile">Profile Settings</a></li>
                        <li><a class="dropdown-item" href="/">Log Out</a></li>
                    </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
        </div>
    );
};

export default Dashboard;