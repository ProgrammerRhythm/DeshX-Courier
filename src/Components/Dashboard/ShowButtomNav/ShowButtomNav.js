import React from 'react';

const ShowButtomNav = () => {
    return (
        <div>
            <div className="fixed-bottom d-lg-none bg-white border-top d-flex justify-content-between px-2" style={{ boxShadow: '0 -5px 10px rgb(0 0 0 / 10%)' }}>
          <a className="btn btn-sm p-2 d-flex flex-column align-items-center minNav"  href="/dashboard">
            <i className="las la-home fs-18 mr-2 la-2x"></i>
            <span>Dashboard</span>
          </a>
          <a className="btn btn-sm p-2 d-flex flex-column align-items-center minNav" href="/parcels">
            <i className="las la-shopping-bag  fs-18 mr-2 la-2x"></i>
            <span>Parcels</span>
          </a>
          <a className="btn btn-sm p-2 d-flex flex-column align-items-center minNav" href="/cparcel">
            <i className="las la-plus fs-18 mr-2 la-2x"></i>
            <span>Create Parcel</span>
          </a>
          <a className="btn btn-sm p-2 d-flex flex-column align-items-center minNav" href="/">
            <i className="las la-sign-out-alt la-2x"></i>
            <span>logout</span>
          </a>
        </div>
        </div>
    );
};

export default ShowButtomNav;