import React from 'react';
import logo from '../../Images/output-onlinegiftools.gif'
import './Dashboard.css'
import DashboardDocument from './DashboardDocument';
import DashboardNav from './DashboardNav';
import ShowButtomNav from './ShowButtomNav';
const Dashboard = (props) => {
  const name = 'Rhythm Munshi'
  return (
    <div className="bodys">
      <div className="container">
        <div className="row Navbar">
          <div className="col-6">
            <a className="navbar-brand animate__animated animate__fadeInLeft" href="/"><img style={{ height: "80px" }} src={logo} alt="" /></a>
          </div>
          <div className="col-6 prc">
            <div className="dropdown">
              <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <img style={{ borderRadius: '50%', height: '40px', width: '40px' }} src={`https://avatars.abstractapi.com/v1/?api_key=792016207dd64ae38c42b470904c44f4&name=${'Rhythm'}`} alt="" />
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item" href="/createparcel">Create Parcel</a></li>
                <li><a className="dropdown-item" href="/profile">Profile Settings</a></li>
                <li><a className="dropdown-item" href="/">Log Out</a></li>
              </ul>
            </div>
          </div>
        </div>



        <div className="dashboard">
          <div className="row">
            <div className="col-0 col-sm-0 col-md-0 col-lg-3 col-xl-3 col-xxl-3 dashboardNav">
            <DashboardNav name={name} className=""></DashboardNav>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9">
                <DashboardDocument></DashboardDocument>
                <ShowButtomNav></ShowButtomNav>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};


export default Dashboard;