import React from 'react';
import Navbar from '../Navbar/Navbar';
import './SignIn.css'
const sign = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="container StyleIt">
                <h1>Sign In</h1>
                <div className="boxItem">
                    <h5>Phone Number</h5>
                    <input type="phone"  id="Email" /><br />
                    <h5>Password</h5>
                    <input type="password" id="" />
                    <div class="d-grid gap-2">
                        <button class="btn btn-primary" type="button">NEXT</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default sign;