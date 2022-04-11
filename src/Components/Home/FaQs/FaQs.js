import React from 'react';
import "./FaQs.css"
import { Link } from "react-router-dom";
const FaQs = () => {
    return (
        <div className="container sscont">
            <h1>Still have questions? We have answers!</h1>
            <h5>Take a look at the most commonly asked questions. We are here to help.</h5>

            <div class="accordion" id="accordionPanelsStayOpenExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    What is DeshX?
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                    <div class="accordion-body">
                        
                    DeshX is a tech-based logistics company operating nationwide and offering end-to-end services like parcel deliveries for SMEs, documents and parcel couriers for individuals and enterprise logistics solutions for corporate companies
                        
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                    What kind of services does DeshX offer?
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                    <div class="accordion-body">
                    DeshX is a complete platform for end-to-end delivery and logistics services for any business or personal needs. The services include parcel delivery, bulk shipment, line hall, truck rental, loading-unloading, warehouse, logistics services and customized solutions as required.
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                    What is the coverage area of ​​DeshX Delivery?
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                    <div class="accordion-body">     
                        DeshX delivers to all 64 districts of Bangladesh. Click the link to see the full list of DeshX delivery areas. Contact your nearest DeshX Hub to book delivery today. Click here to see the full list of DeshX Hubs.
                    </div>
                    </div>
                </div>
                </div>


             <div className="signUp">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                            <h1>Partner up with DeshX today</h1>
                            <h5>Signing up takes only 2 mins</h5>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 btnStyle">
                        <Link id="login" to="/signup"><button style={{padding: '15px 40px'}}   className="btn">Sign up</button></Link>
                            </div>
     
                    </div>
                 </div>   
        </div>
    );
};

export default FaQs;