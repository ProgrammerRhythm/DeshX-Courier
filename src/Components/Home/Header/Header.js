import React from 'react';
import './Header.css'
import headerLogo from '../../../Images/food-delivery1_ccexpress.png'
import Navbar from '../../Navbar/Navbar';
const Header = () => {
    return (
        <div className="bg-img">
        <Navbar></Navbar>
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


          <div class="box modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
              <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                  <div class="row model-1">
                      <div className="col-6">
                      <h5 class="modal-title" id="exampleModalToggleLabel">Sign In</h5>
                      </div>
                      <div className="col-6">
                      <button type="button" class="btn-close float-end" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                  </div>
                  <div class="modal-body">
                    <form>
                    <input type="text" required id="TakeNum" maxlength="11" placeholder="Enter Mobile Number" /> <br />
                     <input type="password" required id="TakePassword" placeholder="Enter Password" />
                    </form>
                  </div>
                  <div class="modal-footer">
                    <div className="row">
                      <div className="col-6">
                      <button style={{padding: '10px 25px',borderRadius: '30px'}} class="btn btn-primary styleBtn"   data-bs-target="#exampleModalToggle2" placeholder="log-in" data-bs-toggle="modal">Log In</button>
                      </div>
                      <div className="col-6">
                      <button style={{padding: '10px 25px',borderRadius: '30px',width:'120px'}} class="btn btn-primary styleBtn"  type="" data-bs-target="#exampleModalToggle3" placeholder="log-in" data-bs-toggle="modal">Sign In</button>
                      </div>
                    </div>
                  </div>
                  </div>
              </div>
              </div>



              <div class="box modal fade" id="exampleModalToggle3" aria-hidden="true" aria-labelledby="exampleModalToggleLabel3" tabindex="-1">
              <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                  <div class="row model-1">
                      <div className="col-12 cross">
                      <button type="button" class="btn-close float-end" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                  </div>
                  <div class="modal-body">
                    <h3>Congratulations!</h3>
                    <h5>You have successfully Sign In</h5>
                  </div>
                  </div>
              </div>
              </div>
              {/* <a class="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Open first modal</a> */}
              <div class="box modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
              <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                  <div class="row model-1">
                      <div className="col-6">
                      <h5 class="modal-title" id="exampleModalToggleLabel2">Log In</h5>
                      </div>
                      <div className="col-6">
                      <button type="button" class="btn-close float-end" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                  </div>
                  <div class="modal-body">
                    <input type="text" id="TakeNum" maxlength="11" placeholder="Enter Mobile Number" /> <br />
                     <input type="password" id="TakePassword" placeholder="Enter Password" />
                     <input type="text" id="TakeNum" maxlength="11" placeholder="Enter Mobile Number" /> <br />
                     <input type="password" id="TakePassword" placeholder="Enter Password" />
                     <input type="text" id="TakeNum" maxlength="11" placeholder="Enter Mobile Number" /> <br />
                     <input type="password" id="TakePassword" placeholder="Enter Password" />
                  </div>
                  <div class="modal-footer">
                    <div className="row">
                      <div className="col-12">
                      <button style={{padding: '10px 25px',borderRadius: '30px'}} class="btn btn-primary styleBtn"  data-bs-target="#exampleModalToggle1" placeholder="log-in" data-bs-toggle="modal">Log In</button>
                      </div>
                    </div>
                  </div>
                  </div>
              </div>
              </div>


    </div>
    
    );
};

export default Header;