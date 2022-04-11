import React from 'react';
import './Login.css'
import Navbar from '../Navbar/Navbar';
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="container StyleIt">
                <h1>Sign Up</h1>
                <div className="boxItem">
                    {/* <h5>Phone Number</h5> */}
                    <input placeholder="Phone Number"type="phone" /><br />
                    <input placeholder="Phone Number"type="phone" /><br />
                    <input placeholder="Phone Number"type="phone" /><br />
                    <input placeholder="Phone Number"type="phone" /><br />
                    <input placeholder="Phone Number"type="phone" /><br />
                    <input placeholder="Phone Number"type="phone" /><br />
                    {/* <h5>Password</h5> */}
                    <input placeholder="Password" type="password" id="" /> <br />
                    <Link className='link' to="/signup"><button style={{padding: '10px 30px',borderRadius: '30px'}} className="btn styleBtn">Create Account</button></Link>
                    <p id="or">Or</p>
                    <hr />
                    <Link className='link' to="/signin"><button style={{padding: '10px 30px',borderRadius: '30px'}} id="signIn" className="btn styleBtn">Sign In</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Login;