import React from 'react';
import Navbar from '../Navbar/Navbar';
import './SignIn.css'
import { Link } from "react-router-dom";

const sign = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="container StyleIt">
                <h1>Sign In</h1>
                <div className="boxItem">
                    {/* <h5>Phone Number</h5> */}
                    <input placeholder="Phone Number"type="phone"  id="Email" /><br />
                    {/* <h5>Password</h5> */}
                    <input placeholder="Password" type="password" id="" /> <br />
                    <Link className='link' to="/signin"><button style={{padding: '10px 30px',borderRadius: '30px'}} className="btn styleBtn">Sign In</button></Link>
                    <p id="or">Or</p>
                    <hr />
                    <Link className='link' to="/signup"><button style={{padding: '10px 30px',borderRadius: '30px'}} className="btn styleBtn">Create Account</button></Link>
                </div>
            </div>
        </div>
    );
};

export default sign;