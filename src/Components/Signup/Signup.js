import React, { useState } from 'react';
import './Signup.css'
import Navbar from '../Navbar/Navbar';
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

    const [user,setUser] = useState({
        isSigned: false,
        name: '',
        email: '',
        password: '',
        phone: '',
        location : '',
        area: '',
      })


    const handleBlur = (e) => {
        if(e.target.name === 'name'){
            const newUserInfo = {...user}
            newUserInfo[e.target.name]=e.target.value;
            setUser(newUserInfo)
            console.log(e.target.value);
        }
        if(e.target.name === 'phone'){
            const newUserInfo = {...user}
            newUserInfo[e.target.name]=e.target.value;
            setUser(newUserInfo)
        }
        if(e.target.name === 'email'){
            const newUserInfo = {...user}
            newUserInfo[e.target.name]=e.target.value;
            setUser(newUserInfo)
        }
        if(e.target.name === 'password'){
            const newUserInfo = {...user}
            newUserInfo[e.target.name]=e.target.value;
            setUser(newUserInfo)
        }
        if(e.target.name === 'location'){
            const newUserInfo = {...user}
            newUserInfo[e.target.name]=e.target.value;
            setUser(newUserInfo)
        }
        if(e.target.name === 'area'){
            const newUserInfo = {...user}
            newUserInfo[e.target.name]=e.target.value;
            setUser(newUserInfo)
        }
    }
  
    const history = useNavigate()

    const handleSubmit = (e) => {
         if (user.phone.length > 10 && user.password.length > 6) {
            const newUserInfo = {...user}
            newUserInfo.isSigned = true;
            setUser(newUserInfo)
            const makeJson = JSON.stringify(user);
            localStorage.setItem('user',makeJson);
            history('/dashboard')
        }
        e.preventDefault();
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="container StyleIt">
                <h1>Sign Up</h1>
                <div className="boxItem">
                    <form onSubmit={handleSubmit}>
                        <input onChange={handleBlur} placeholder="Name" type="text" name="name" id="" /> <br />
                        <input onChange={handleBlur} required name="phone" placeholder="Phone Number" type="phone" /><br />
                        <input onChange={handleBlur} type="email" name="email" id="" placeholder='Email Address (Optional)' /><br />
                        <input onChange={handleBlur} type="text" required name="location" id="" placeholder="Enter your pickup address" /><br />
                        {/* <h5>Password</h5> */} 
                        <input onChange={handleBlur} required placeholder="Password" name="password" type="password"/> <br />
                        {/* <p>Select Nearest Zone</p> */}
                        <select onChange={handleBlur} id="address" name="area">
                            <Chekbox name='Dhaka'></Chekbox>
                            <Chekbox name='Dhaka'></Chekbox>
                            <Chekbox name='Dhaka'></Chekbox>
                            <Chekbox name='Dhaka'></Chekbox>
                            <Chekbox name='Dhaka'></Chekbox>
                            <Chekbox name='Dhaka'></Chekbox>
                        </select> <br />
                        <input type="submit" value="Sign Up" style={{padding: '10px 30px',borderRadius: '30px'}} className='styleBtn btn' />
                        <p id="or">Or</p>
                        <hr />
                    </form>
                    <Link className='link' to="/signin"><button style={{padding: '10px 30px',borderRadius: '30px'}} id="signIn" className="btn styleBtn">Sign In</button></Link>
                    {/* <h5>Phone Number</h5> */}
                   
                </div>
            </div>
        </div>
    );
};

function Chekbox(props){
    return (
        <>
        <option value={props.name}>{props.name}</option>
        </>
    )
}

export default Login;