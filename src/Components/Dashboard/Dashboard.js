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
            <div className="col-0 col-sm-0 col-md-0 col-lg-4 col-xl-4 col-xxl-4 dashboardNav">
            <DashboardNav name={name} className=""></DashboardNav>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8">
                <DashboardDocument></DashboardDocument>
                <ShowButtomNav></ShowButtomNav>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

function DashboardDocument() {
  return (
    <div className='row'>
      <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
        <div className="bg-grad-3 text-white rounded-lg mb-4 overflow-hidden card1 cards">
          <div className="px-3 pt-3">
            <div className="h3 fw-700">
              0
            </div>
            <div className="opacity-50">Products</div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="rgba(255,255,255,0.3)" fill-opacity="1" d="M0,192L26.7,192C53.3,192,107,192,160,202.7C213.3,213,267,235,320,218.7C373.3,203,427,149,480,117.3C533.3,85,587,75,640,90.7C693.3,107,747,149,800,149.3C853.3,149,907,107,960,112C1013.3,117,1067,171,1120,202.7C1173.3,235,1227,245,1280,213.3C1333.3,181,1387,107,1413,69.3L1440,32L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path>
          </svg>
        </div>
      </div>


      <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
        <div className="bg-grad-3 text-white rounded-lg mb-4 overflow-hidden card2 cards">
          <div className="px-3 pt-3">
            <div className="h3 fw-700">
              0
            </div>
            <div className="opacity-50">Products</div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="rgba(255,255,255,0.3)" fill-opacity="1" d="M0,192L26.7,192C53.3,192,107,192,160,202.7C213.3,213,267,235,320,218.7C373.3,203,427,149,480,117.3C533.3,85,587,75,640,90.7C693.3,107,747,149,800,149.3C853.3,149,907,107,960,112C1013.3,117,1067,171,1120,202.7C1173.3,235,1227,245,1280,213.3C1333.3,181,1387,107,1413,69.3L1440,32L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path>
          </svg>
        </div>
      </div>


      <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
        <div className="bg-grad-3 text-white rounded-lg mb-4 overflow-hidden card3 cards">
          <div className="px-3 pt-3">
            <div className="h3 fw-700">
              0
            </div>
            <div className="opacity-50">Products</div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="rgba(255,255,255,0.3)" fill-opacity="1" d="M0,192L26.7,192C53.3,192,107,192,160,202.7C213.3,213,267,235,320,218.7C373.3,203,427,149,480,117.3C533.3,85,587,75,640,90.7C693.3,107,747,149,800,149.3C853.3,149,907,107,960,112C1013.3,117,1067,171,1120,202.7C1173.3,235,1227,245,1280,213.3C1333.3,181,1387,107,1413,69.3L1440,32L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path>
          </svg>
        </div>
      </div>


      <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
        <div className="bg-grad-3 text-white rounded-lg mb-4 overflow-hidden card4 cards">
          <div className="px-3 pt-3">
            <div className="h3 fw-700">
              0
            </div>
            <div className="opacity-50">Products</div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="rgba(255,255,255,0.3)" fill-opacity="1" d="M0,192L26.7,192C53.3,192,107,192,160,202.7C213.3,213,267,235,320,218.7C373.3,203,427,149,480,117.3C533.3,85,587,75,640,90.7C693.3,107,747,149,800,149.3C853.3,149,907,107,960,112C1013.3,117,1067,171,1120,202.7C1173.3,235,1227,245,1280,213.3C1333.3,181,1387,107,1413,69.3L1440,32L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <div className="Card">
            <div className="card-header headerC">
              <h5 className="mb-2 h4">Orders</h5>
            </div>
            <div className="card-body">
              <table className="table">
                <tbody>
                  <tr>
                    <td className='td-first'>Total orders:</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td className='td-first'>Pending orders:</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td className='td-first'>Cancelled orders:</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td className='td-first'>Successful orders:</td>
                    <td>0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <div className="crtp">
            <h4>Create Parcel</h4>
            <div style={{ marginBottom: '25px' }} className="h6 opacity-50">We are ready to deliver your parcel to your desired location</div>
            <button style={{ padding: '10px 30px', borderRadius: '30px', width: '100%', fontWeight: 'bold',marginBottom: '30px'}} className="btn styleBtn">Create Parcel</button>
          </div>
        </div>
      </div>
    </div>
  )
}


function ShowButtomNav(){
  return(
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
  )
}


function DashboardNav(props) {
  return (
    <>
      <div className="">
        <div className="aiz-user-sidenav rounded overflow-auto c-scrollbar-light pb-5 pb-xl-0">
          <div className="p-4 text-xl-center mb-4 border-bottom bg-primary text-white position-relative">
            <span className="avatar avatar-md mb-3">
              <img src="https://monarchmart.com/public/assets/img/avatar-place.png" className="image rounded-circle" onerror="this.onerror=null;this.src='https://monarchmart.com/public/assets/img/avatar-place.png';" alt="" />
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
                  <i className="las la-home aiz-side-nav-icon"></i>
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
          <hr />
          <h4 className="h5 fw-600 text-center">Sold Amount</h4>
          <div className="widget-balance pb-3 pt-1">
            <div className="text-center">
              <div className="heading-4 strong-700 mb-4">
                <small className="d-block fs-12 mb-2">Your sold amount (current month)</small>
                <span className="btn btn-primary fw-600 fs-18">0Tk</span>
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
    </>
  )
}

export default Dashboard;