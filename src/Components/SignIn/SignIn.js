import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './SignIn.css'
import { Link, useNavigate } from "react-router-dom";

const Sign = () => {

    const [user,setUser] = useState({
        isSigned: true,
        phone: '',
        password: ''
      })
      
      const HandleChange = (e) => {
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

    //   const handleBlur = (e) => {
    //     let fildValid = true;
    //     if(e.target.name === 'phone') {
    //         fildValid =  e.target.value > 10;
    //     }
    //     else if (e.target.name === 'password') {
    //         fildValid = e.target.value.length;
    //     }
    //     if (fildValid) {
    //         const newUserInfo = {...user};
    //         newUserInfo[e.target.name]=e.target.value;
    //         setUser(newUserInfo);
    //     }
    //   }
      const history = useNavigate()
      const handleSubmit = (e) => {
        const jsonUser = localStorage.getItem('user');
        const Luser = JSON.parse(jsonUser)
        let {phone,password} = Luser;
        phone = parseInt(phone)
        const Uphone = parseInt(user.phone)
        console.log(phone,Uphone);
        if (user.phone.length > 10 && user.password.length > 6 && Uphone === phone && user.password===password) {
            const newUserInfo = {...user}
            newUserInfo.isSigned = true;
            setUser(newUserInfo)
            history('/dashboard')
        }
        else{
            const newUserInfo = {...user}
            newUserInfo.isSigned = false;
            setUser(newUserInfo)
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
                     {
                        !user.isSigned && <p style={{textAlign:'center',color: 'red'}}>Phone Number Or Password Incorrect</p>
                     }   
                    <input name="phone" onChange={HandleChange}  placeholder="Phone Number"type="phone" required  id="Email" /><br />
                    {/* <h5>Password</h5> */}
                    <input name="password" onChange={HandleChange}  placeholder="Password" type="password" required id="" /> <br />
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