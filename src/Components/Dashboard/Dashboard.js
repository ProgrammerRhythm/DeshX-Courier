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

        
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
            <div class="bg-grad-3 text-white rounded-lg mb-4 overflow-hidden card1 cards">
                <div class="px-3 pt-3">
                <div class="h3 fw-700">
                0
                </div>
                <div class="opacity-50">Products</div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="rgba(255,255,255,0.3)" fill-opacity="1" d="M0,192L26.7,192C53.3,192,107,192,160,202.7C213.3,213,267,235,320,218.7C373.3,203,427,149,480,117.3C533.3,85,587,75,640,90.7C693.3,107,747,149,800,149.3C853.3,149,907,107,960,112C1013.3,117,1067,171,1120,202.7C1173.3,235,1227,245,1280,213.3C1333.3,181,1387,107,1413,69.3L1440,32L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path>
                </svg>
              </div>
            </div>


            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
            <div class="bg-grad-3 text-white rounded-lg mb-4 overflow-hidden card2 cards">
                <div class="px-3 pt-3">
                <div class="h3 fw-700">
                0
                </div>
                <div class="opacity-50">Products</div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="rgba(255,255,255,0.3)" fill-opacity="1" d="M0,192L26.7,192C53.3,192,107,192,160,202.7C213.3,213,267,235,320,218.7C373.3,203,427,149,480,117.3C533.3,85,587,75,640,90.7C693.3,107,747,149,800,149.3C853.3,149,907,107,960,112C1013.3,117,1067,171,1120,202.7C1173.3,235,1227,245,1280,213.3C1333.3,181,1387,107,1413,69.3L1440,32L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path>
                </svg>
              </div>
            </div>


            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
            <div class="bg-grad-3 text-white rounded-lg mb-4 overflow-hidden card3 cards">
                <div class="px-3 pt-3">
                <div class="h3 fw-700">
                0
                </div>
                <div class="opacity-50">Products</div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="rgba(255,255,255,0.3)" fill-opacity="1" d="M0,192L26.7,192C53.3,192,107,192,160,202.7C213.3,213,267,235,320,218.7C373.3,203,427,149,480,117.3C533.3,85,587,75,640,90.7C693.3,107,747,149,800,149.3C853.3,149,907,107,960,112C1013.3,117,1067,171,1120,202.7C1173.3,235,1227,245,1280,213.3C1333.3,181,1387,107,1413,69.3L1440,32L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path>
                </svg>
              </div>
            </div>


            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
              <div class="bg-grad-3 text-white rounded-lg mb-4 overflow-hidden card4 cards">
                <div class="px-3 pt-3">
                <div class="h3 fw-700">
                0
                </div>
                <div class="opacity-50">Products</div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="rgba(255,255,255,0.3)" fill-opacity="1" d="M0,192L26.7,192C53.3,192,107,192,160,202.7C213.3,213,267,235,320,218.7C373.3,203,427,149,480,117.3C533.3,85,587,75,640,90.7C693.3,107,747,149,800,149.3C853.3,149,907,107,960,112C1013.3,117,1067,171,1120,202.7C1173.3,235,1227,245,1280,213.3C1333.3,181,1387,107,1413,69.3L1440,32L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path>
                </svg>
              </div>
            </div>



              </div>
          </div>
              
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <div class="Card">
              <div class="card-header headerC">
              <h5 class="mb-2 h4">Orders</h5>
              </div>
              <div class="card-body">
              <table class="table">
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
                  <div style={{marginBottom: '25px'}} class="h6 opacity-50">We are ready to deliver your parcel to your desired location</div>
                  <button style={{padding: '10px 30px',borderRadius: '30px',width:'100%',fontWeight:'bold'}} className="btn styleBtn">Create Parcel</button>
              </div>
            </div>
          </div>
             
        </div>
        </div>
    );
};

export default Dashboard;