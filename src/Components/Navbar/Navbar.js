import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Images/output-onlinegiftools.gif'

const Navbar = () => {
    return (
        <div>
      <div className="container header1">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link className='link navbar-brand animate__animated animate__fadeInLeft' to="/">
            <img style={{height: "80px"}} src={logo} alt="" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
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
              <Link className='link' to="/signin"><button style={{padding: '10px 30px',borderRadius: '30px'}} className="btn styleBtn">Sign In</button></Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>

      {/* PopUp SignIn */}


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



export default Navbar;