import React from 'react'
import Navbarr from "../Navbar/Navbarr"
import "../Homepage/Homepage.css"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Footer from '../Footer/Footer';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2
    }
};
const responsive1 = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2
    }
};

function Homepage() {
    return (
        <div className="col-sm-12 p-0" style={{ overflowX: "hidden" }}>
            <Navbarr />
            <div className="col-sm-12 p-0 image-responsive-mobile" >
                <img src="images/home.jpg" className="img-fluid" />
            </div>
            <div className="row  margin-div" >
                <div className="col-sm-6  div1 " >
                    <div className="row">
                        <div className="col-md-6 col-6">

                        </div>
                        <div className="col-md-6 col-6 vertically-center ">
                            <h1 style={{ fontSize: "120%",  color: "white" }}>New collection</h1>
                            <h1 style={{ fontSize: "120%", color: "white" }}>Avaliable Now</h1>
                            <button className="btn btn-primary mt-3" style={{ backgroundColor: "white", color: "black", borderColor: "white", borderRadius: "20px"}} > View All </button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 div2" >
                    <div className="row">
                        <div className="col-md-6 col-6">

                        </div>
                        <div className="col-md-6 col-6  vertically-center ">
                            <h1 style={{ fontSize: "120%", color: "white" }}>New collection</h1>
                            <h1 style={{ fontSize: "120%", color: "white" }}>Avaliable Now</h1>
                            <button className="btn btn-primary mt-3" style={{ backgroundColor: "white", color: "black", borderColor: "white", borderRadius: "20px" }} > View All </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-12">
                <Carousel responsive={responsive}>
                    <div>
                        <div className="col-sm-12 text-center">
                            <img src="images/beauty.png" className="img-fluid" style={{width:"80%"}} />
                        </div>
                        <div className="col-sm-12 text-center mt-2">
                            <h4>BEAUTY</h4>
                        </div>
                    </div>
                    
                    <div>
                        <div className="col-sm-12 text-center">
                            <img src="images/sunglasses.png" className="img-fluid" style={{width:"80%"}} />
                        </div>
                        <div className="col-sm-12 text-center mt-2">
                            <h4>SUNGLASSES</h4>
                        </div>
                    </div>

                    <div>
                        <div className="col-sm-12 text-center">
                            <img src="images/shoe.png" className="img-fluid" style={{width:"80%"}} />
                        </div>
                        <div className="col-sm-12 text-center mt-2">
                            <h4>SHOES</h4>
                        </div>
                    </div>

                    <div>
                        <div className="col-sm-12 text-center">
                            <img src="images/jackets.png" className="img-fluid" style={{width:"80%"}} />
                        </div>
                        <div className="col-sm-12 text-center mt-2">
                            <h4>JACKETS</h4>
                        </div>
                    </div>

                    <div>
                        <div className="col-sm-12 text-center">
                            <img src="images/shoe.png" className="img-fluid" style={{width:"80%"}} />
                        </div>
                        <div className="col-sm-12 text-center mt-2">
                            <h4>SHOES</h4>
                        </div>
                    </div>
                </Carousel>
            </div>
            <div className="row mt-5" >
                <div className="col-sm-4">
                    <img src="images/collections.jpg" className="img-fluid" style={{width:"80%"}} />
                </div>
                <div className="col-sm-8 pt-5" style={{margin:"auto"}}>
               
                <Carousel responsive={responsive1}>
                    <div>
                        <div className="col-sm-12 text-center">
                            <img src="images/headphones.png" className="img-fluid" style={{width:"100%"}} />
                        </div>
                        <div className="col-sm-12 text-center mt-2">
                            <h4>HEADPHONES</h4>
                        </div>
                    </div>
                    
                    <div>
                        <div className="col-sm-12 text-center">
                            <img src="images/light.png" className="img-fluid" style={{width:"100%"}} />
                        </div>
                        <div className="col-sm-12 text-center mt-2">
                            <h4>LIGHTS</h4>
                        </div>
                    </div>

                    <div>
                        <div className="col-sm-12 text-center">
                            <img src="images/kitchen.png" className="img-fluid" style={{width:"100%"}} />
                        </div>
                        <div className="col-sm-12 text-center mt-2">
                            <h4>KITCHEN</h4>
                        </div>
                    </div>

                    <div>
                        <div className="col-sm-12 text-center">
                            <img src="images/kitchen.png" className="img-fluid" style={{width:"100%"}} />
                        </div>
                        <div className="col-sm-12 text-center mt-2">
                            <h4>KITACHEN</h4>
                        </div>
                    </div>

                    <div>
                        <div className="col-sm-12 text-center">
                            <img src="images/kitchen.png" className="img-fluid" style={{width:"100%"}} />
                        </div>
                        <div className="col-sm-12 text-center mt-2">
                            <h4>KITCHEN</h4>
                        </div>
                    </div>
                </Carousel>
            
                </div>
            </div>
            <div className="col-sm-12 p-0 mt-5">
            <video autoPlay muted loop >
                    <source src="video/video.mp4" type="video/mp4"  />

                   
                </video>
            </div>
            <Footer/>
            
        </div>
    )
}

export default Homepage
