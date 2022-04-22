import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './SignIn.css'
import { Link } from "react-router-dom";

const Sign = () => {

    const [user,setUser] = useState({
        isSigned: false,
        phone: '',
        password: ''
      })
      
      const handleBlur = (e) => {
        let fildValid = true;
        if(e.target.name === 'phone') {
            fildValid =  e.target.value > 10;
        }
        else if (e.target.name === 'password') {
            fildValid = e.target.value.length;
        }
        if (fildValid) {
            const newUserInfo = {...user};
            newUserInfo[e.target.name]=e.target.value;
            setUser(newUserInfo);
        }
      }
      const handleSubmit = (e) => {
        // console.log(user);
        if (user.phone && user.password) {
            
        }
        e.preventDefault();
      }
    return (
        <div>
            <Navbar></Navbar>
            <div className="container StyleIt">
                <h1>Sign In</h1>
                <div className="boxItem">
                    <form onSubmit={handleSubmit}>
                    <input name="phone" onBlur={handleBlur} placeholder="Phone Number"type="phone" required  id="Email" /><br />
                    {/* <h5>Password</h5> */}
                    <input name="password" onBlur={handleBlur} placeholder="Password" type="password" required id="" /> <br />
                    <input type="submit" value="Sign In" style={{padding: '10px 30px',borderRadius: '30px'}} className='styleBtn btn' />
                    <p id="or">Or</p>
                    <hr />
                    </form>
                    <Link className='link' to="/signup"><button style={{padding: '10px 30px',borderRadius: '30px'}} className="btn styleBtn">Create Account</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Sign;