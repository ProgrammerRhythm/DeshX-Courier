import React from 'react';
import profile from '../../Images/avatar-man.png'
const DashboardNav = (props) => {
    return (
        <div>
        <div style={{border: '1px solid #ebedf2',marginBottom: '10px'}}>
        <div className="aiz-user-sidenav rounded overflow-auto c-scrollbar-light pb-5 pb-xl-0">
          <div style={{backgroundColor: '#3d3da2de'}} className="p-4 text-lg-center mb-4 border-bottom text-white position-relative">
            <span className="avatar avatar-md mb-3">
              <img src={profile} className="img-fluid rounded-circle" alt="" />
            </span>
            <h4 className="h5 fs-16 mb-1 fw-600">{props.name}</h4>
            <div className="text-truncate opacity-60">{props.phone}</div>
          </div>
          <div className="sidemnenu mb-3">
            <ul className="aiz-side-nav-list px-2 ">

              <li>
                <a href="/dashboard" className="navTextA">
                  <i className="las la-home aiz-side-nav-icon"></i>
                  <span className="navTextS">Dashboard</span>
                </a>
              </li>

              <li>
                <a href="/dashboard" className="navTextA">
                <i className="las la-shopping-bag  fs-18 mr-2"></i>
                  <span className="navTextS">Parcel History</span>
                </a>
              </li>

              <li>
                <a href="/dashboard" className="navTextA">
                  <i className="las la-home aiz-side-nav-icon"></i>
                  <span className="navTextS">Manage Profile</span>
                </a>
              </li>

              <li>
                <a href="/dashboard" className="navTextA">
                  <i className="las la-home aiz-side-nav-icon"></i>
                  <span className="navTextS">Create Parcel</span>
                </a>
              </li>

              <li>
                <a href="/dashboard" className="navTextA">
                  <i className="las la-home aiz-side-nav-icon"></i>
                  <span className="navTextS">Payment Method</span>
                </a>
              </li>

              <li>
                <a href="/dashboard" className="navTextA">
                  <i className="las la-home aiz-side-nav-icon"></i>
                  <span className="navTextS">Coupon</span>
                </a>
              </li>

              <li>
                <a href="/dashboard" className="navTextA">
                  <i className="las la-home aiz-side-nav-icon"></i>
                  <span className="navTextS">Coverage Area</span>
                </a>
              </li>

              <li>
                <a href="/dashboard" className="navTextA">
                  <i className="las la-home aiz-side-nav-icon"></i>
                  <span className="navTextS">Manage pickup location</span>
                </a>
              </li>

            </ul>


          </div>
          <hr  style={{opacity: .1}}/>
          <h4 className="h5 fw-600 text-center">Sold Amount</h4>
          <div className="widget-balance pb-3 pt-1">
            <div className="text-center">
              <div className="heading-4 strong-700 mb-4">
                <small className="d-block fs-12 mb-2">Your sold amount (current month)</small>
                <span className="btn btn-primary">0Tk</span>
              </div>
              <table className="table table-borderless">
                <tbody><tr>
                  <td className="p-1" width="60%">
                    Total Sold:
                  </td>
                  <td className="p-1 fw-600" width="40%">
                    0Tk
                  </td>
                </tr>
                  <tr>
                    <td className="p-1" width="60%">
                      Last Month Sold:
                    </td>
                    <td className="p-1 fw-600" width="40%">
                      0Tk
                    </td>
                  </tr>
                </tbody></table>
            </div>
          </div>
        </div>
        
      </div>
        </div>
    );
};

export default DashboardNav;