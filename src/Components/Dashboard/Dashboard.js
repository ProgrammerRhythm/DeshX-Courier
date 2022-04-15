import React from 'react';
import logo from '../../Images/output-onlinegiftools.gif'
import './Dashboard.css'
const Dashboard = (props) => {
  const name = 'Rhythm'
    return (
      <div className="bodys">
        <div className="container">
          <div className="row Navbar">
            <div className="col-6">
            <a className="navbar-brand animate__animated animate__fadeInLeft" href="/"><img style={{height: "80px"}} src={logo} alt="" /></a>
            </div>
            <div className="col-6 prc">
            <div class="dropdown">
                    <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                       <img style={{borderRadius: '50%', height: '40px', width: '40px'}}src={`https://avatars.abstractapi.com/v1/?api_key=792016207dd64ae38c42b470904c44f4&name=${'Rhythm'}`} alt="" />
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="/createparcel">Create Parcel</a></li>
                        <li><a class="dropdown-item" href="/profile">Profile Settings</a></li>
                        <li><a class="dropdown-item" href="/">Log Out</a></li>
                    </ul>
                </div>
            </div>
          </div>
          

  
          <div className="dashboard">
            <h1>Welcome {name}</h1>
            <div style={{borderBottom: '3px solid #41418c',borderRadius:'10%',width: '80px'}}></div>
              <div className="row">
                <div className="col-6">
                <div class="cards">
                </div>
                </div>
                <div className="col-6">
                <div class="cards"></div>
                </div>
              </div>
          </div>
              
                
             
        </div>
        </div>
    );
};

export default Dashboard;