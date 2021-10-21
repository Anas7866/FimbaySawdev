import React from 'react'

function Footer() {
    return (
        <div className="col-sm-12 mt-5 pt-5" style={{boxShadow:"2px 2px 10px gray"}}>
        <div className="container">
            <div className="row">
                <div className="col-sm-4">
                    <h3>INFORMATION</h3>
                    <h5 style={{color:'gray'}}>ABOUT US</h5>
                    <h5 style={{color:'gray'}}>DELIVERY INFORMATION</h5>
                    <h5 style={{color:'gray'}}>TERMS & CONDITIONS</h5>
                    <h5 style={{color:'gray'}}>RETURN POLICY</h5>
                    <span className="pr-2" style={{fontSize:"160%"}}><i class="fab fa-cc-paypal"></i></span><span style={{fontSize:"160%"}}><i class="fab fa-cc-visa"></i></span>
                </div>
                <div className="col-sm-4">
                <h3>HELP</h3>
                    <h5 style={{color:'gray'}}>FAQ'S</h5>
                    <h5 style={{color:'gray'}}>PRIVACY POLICY</h5>
                    <h5 style={{color:'gray'}}>FEEDBACK</h5>
                   
               
                    
                </div>
                <div className="col-sm-4">
                <h3>ACCOUNT</h3>
                    <h5 style={{color:'gray'}}>MY ACCOUNT</h5>
                    <h5 style={{color:'gray'}}>REPORT A PROBLEM</h5>
                    <h5 style={{color:'gray'}}>TRACK ORDER</h5>
                </div>
            </div>
            <div className="col-sm-12 text-center mt-2 p-3"  style={{border:"3px solid black"}}>
                <h1>DISCLAMER</h1>
            </div>
            <div className="col-sm-12 mt-3 p-0"  >
                <h6><i style={{fontSize:"110%"}} class="far fa-copyright"></i> 2021 FIMBAY.com</h6>
            </div>
            </div>
        </div>
    )
}

export default Footer
