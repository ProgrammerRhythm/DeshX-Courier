import {useEffect} from 'react';
import AOS  from 'aos';
import 'aos/dist/aos.css';
import './Map.css'
import mapImg from '../../../Images/bangladash-map.svg'
const Map = () => {
    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 1000,
            easing: 'ease'
        });
    })
    return (
        <div className="map-container">
        <div className="container">
            <div className="row">
                <div data-aos="fade-right" data-aos-easing="ease-in-sine" className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                    <img id="map" className="img-fluid" src={mapImg} alt="Map" />
                </div>
                <div data-aos="fade-right" className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 textArea align-middle" >
                    <h1>DeshX provides logistics support in all 64 districts and 493 sub districts across Bangladesh</h1>
                    <h5>Whatever your logistics need, we guarantee the fastest service all over the country</h5>
                    <button  className="btn styleBtns">Check our cover area</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Map;