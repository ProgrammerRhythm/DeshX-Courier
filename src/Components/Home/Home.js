import React from 'react';
import Services from '../Services/Services';
import Header from "../Header/Header";
import About from "../About/About";
import Charges from "../Charges/Charges";
// import Map from "../Map/Map"
const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <About></About>
            <Charges></Charges>
            {/* <Map></Map> */}
        </div>
    );
};

export default Home;