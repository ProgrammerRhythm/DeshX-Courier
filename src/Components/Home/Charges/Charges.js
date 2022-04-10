import React from 'react';
import './Charges.css'
const Charges = () => {

    // const click1 = document.getElementById('click1');
    // const click2 = document.getElementById('click2');
    // const click3 = document.getElementById('click3');

    // click1.addEventListener('click', function() {
    //         click1.style.borderBottom = '3px solid #41418c';
            
    // }
    // )
    // click2.addEventListener('click', function() {
    //     click2.style.borderBottom = '3px solid #41418c';
        
    // }
    // )
    // click3.addEventListener('click', function() {
    //     click3.style.borderBottom = '3px solid #41418c';
        
    // }
    // )
    return (

        <div>
            <div className="container styleIt">
            <h1 className='animate__animated animate__backInUp animate__delay-1s'>See your delivery charge</h1>
            <h5 className='animate__animated animate__backInUp animate__delay-1s'>Take a look at how much it will cost to send a parcel.</h5>
            
            
            <div class="btn-group animate__animated animate__backInUp animate__delay-1s" role="group" aria-label="Basic example">
            <button type="button" class="btn btns active" id="click1" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1">Inside City</button>
            <button type="button" id="click2" class="btn btns"  data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2">City Suburb</button>
            <button type="button" class="btn btns" id="click3"  data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3">Outside City</button>
            </div>

            <div id="carouselExampleIndicators" class="carousel slide animate__animated animate__bounceIn animate__delay-1s" data-bs-ride="carousel">
            <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
    <div class="carousel-inner">
        <div class="carousel-item active">
        <div className="container row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xs-3 col-xxl-3 setBorder">
                    <h5>Upto 1 kg</h5> 
                    <h3>৳60</h3>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xs-3 col-xxl-3 setBorder">
                <h5>1 kg to 2 kg</h5> 
                    <h3>৳75</h3>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xs-3 col-xxl-3 setBorder">
                <h5>2 kg to 3 kg</h5> 
                    <h3>৳90</h3>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xs-3 col-xxl-3 setBorder">
                <h5>3 kg to 5 kg</h5> 
                    <h3>৳110</h3>
                </div>
            </div>
        </div>
        <div class="carousel-item">
        <div className="container row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xs-3 col-xxl-3 setBorder">
                    <h5>Upto 1 kg</h5> 
                    <h3>৳100 + 1% COD</h3>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xs-3 col-xxl-3 setBorder">
                <h5>1 kg to 2 kg</h5> 
                    <h3>৳115 + 1% COD</h3>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xs-3 col-xxl-3 setBorder">
                <h5>2 kg to 3 kg</h5> 
                    <h3>৳130 + 1% COD</h3>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xs-3 col-xxl-3 setBorder">
                <h5>3 kg to 5 kg</h5> 
                    <h3>৳150 + 1% COD</h3>
                </div>
            </div>
        </div>
        <div class="carousel-item">
        <div className="container row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xs-3 col-xxl-3 setBorder">
                    <h5>Upto 1 kg</h5> 
                    <h3>৳130 + 1% COD</h3>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xs-3 col-xxl-3 setBorder">
                <h5>1 kg to 2 kg</h5> 
                    <h3>৳160 + 1% COD</h3>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xs-3 col-xxl-3 setBorder">
                <h5>2 kg to 3 kg</h5> 
                    <h3>৳190 + 1% COD</h3>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xs-3 col-xxl-3 setBorder">
                <h5>3 kg to 5 kg</h5> 
                    <h3>৳230 + 1% COD</h3>
                </div>
            </div>
        </div>
    </div>
    </div>

            </div>
        </div>
    );

};

export default Charges;
