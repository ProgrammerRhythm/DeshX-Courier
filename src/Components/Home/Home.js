import React from 'react';
import Services from '../Services/Services';
import Header from "../Header/Header";
import About from "../About/About";
import Charges from "../Charges/Charges";
import Map from "../Map/Map"
import FaQs from '../FaQs/FaQs';
import Footer from '../Footer/Footer';
const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <About></About>
            <Map></Map>
            <Charges></Charges>
            <FaQs></FaQs>
            <Footer></Footer>
        </div>
    );
};

export default Home;