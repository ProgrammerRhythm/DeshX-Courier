import React from 'react';
import { Link } from "react-router-dom";

const ShowButtomNav = () => {
    return (
        <div>
            <div className="fixed-bottom d-lg-none bg-white border-top d-flex justify-content-between px-2" style={{ boxShadow: '0 -5px 10px rgb(0 0 0 / 10%)' }}>
          <Link className="btn btn-sm p-2 d-flex flex-column align-items-center minNav"  to="/dashboard">
            <i className="las la-home fs-18 mr-2 la-2x"></i>
            <span>Dashboard</span>
          </Link>
          <Link className="btn btn-sm p-2 d-flex flex-column align-items-center minNav" to="/parcels">
            <i className="las la-shopping-bag  fs-18 mr-2 la-2x"></i>
            <span>Parcels</span>
          </Link>
          <Link className="btn btn-sm p-2 d-flex flex-column align-items-center minNav" to="/createparcel">
            <i className="las la-plus fs-18 mr-2 la-2x"></i>
            <span>Create Parcel</span>
          </Link>
          <Link className="btn btn-sm p-2 d-flex flex-column align-items-center minNav" to="/">
            <i className="las la-sign-out-alt la-2x"></i>
            <span>logout</span>
          </Link>
        </div>
        </div>
    );
};

export default ShowButtomNav;