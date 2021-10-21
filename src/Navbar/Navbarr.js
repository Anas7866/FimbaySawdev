import React from 'react'
import {
    Nav,
    Navbar as Navbarrr,
    NavItem,
    NavDropdown,
    Form,
    FormControl,
    Button,
} from "react-bootstrap";
import "../Navbar/Navbar.css"
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";


function Navbarr() {
    return (
        <div className="col-sm-12 p-0" style={{ position: "absolute", zIndex: "100" }} >
            <div className="row" style={{ backgroundColor: "white" }} >
                <div className="col-sm-6 center-content">
                    <span> <button className="btn btn-primary" style={{ color: "black", backgroundColor: "white", borderColor: 'white', boxShadow: "none" }}><b>ACCOUNT</b></button> </span>
                    <span> <button className="btn btn-primary" style={{ color: "black", backgroundColor: "white", borderColor: 'white', boxShadow: "none" }}><b>CONTACT</b></button> </span>
                    <span> <button className="btn btn-primary" style={{ color: "black", backgroundColor: "white", borderColor: 'white', boxShadow: "none" }}><b>SELLER</b></button> </span>
                </div>
                <div className="col-sm-6  center-content2">
                    <span> <label for="cars"><b>CURRENCY</b>::</label>
                        <select name="cars" id="cars" style={{ borderColor: "white", color: "gray" }}>
                            <option value="volvo">USD</option>
                            <option value="saab">AED</option>
                            <option value="opel">PKR</option>

                        </select></span>
                    <span> <label for="cars"><b>COUNTRY</b>::</label>
                        <select name="cars" id="cars" style={{ borderColor: "white", color: "gray" }}>
                            <option value="volvo">PAKISTAN</option>
                            <option value="saab">DUBAI</option>
                            <option value="opel">INDIA</option>

                        </select></span>
                    <span> <label for="cars"><b>LANGUAGE</b>::</label>
                        <select name="cars" id="cars" style={{ borderColor: "white", color: "gray" }}>
                            <option value="volvo">ENG</option>
                            <option value="saab">URDU</option>
                            <option value="opel">HINDI</option>

                        </select></span>
                </div>
            </div>


            <div className="row pt-4" style={{ backgroundColor: "white" }} >
                <div className="col-sm-4" style={{ margin: "auto" }}>
                    <div className="col-sm-12">
                        <div className="col-sm-12">
                            <input type="text" placeholder="Search" className="form-control" style={{ boxShadow: "none", borderTopRightRadius: "20px", borderBottomLeftRadius: "20px", boxShadow: "2px 2px 13px #888888" }} />
                        </div>
                    </div>

                </div>
                <div className="col-sm-4 text-center">
                    <img src="images/logo.png" className="img-fluid" style={{ width: "60%" }} />

                </div>
                <div className="col-sm-4 center-content3" >
                    <div className="col-sm-12">
                        <span><button className="btn btn-primary" style={{ backgroundColor: "white", borderColor: "white", color: "black" }}><i class="fas fa-user"></i></button></span>
                        <span><button className="btn btn-primary" style={{ backgroundColor: "white", borderColor: "white", color: "black" }}><i class="fas fa-user-plus"></i></button></span>
                        <span><button className="btn btn-primary" style={{ backgroundColor: "white", borderColor: "white", color: "black" }}><i class="fas fa-shopping-cart"></i></button></span>
                        <span><button className="btn btn-primary" style={{ backgroundColor: "white", borderColor: "white", color: "black" }}><i class="fas fa-wallet"></i></button></span>

                    </div>

                </div>



            </div>

            <div className="col-sm-12 p-0 mb-3 navbar-fixed-top" style={{ boxShadow: "0px 15px 10px -15px #111", backgroundColor: "white" }}>


                <Navbarrr className=" " expand="lg" style={{ boxShadow: "0px 15px 10px -15px #111", backgroundColor: "white" }} >

                    <Navbarrr.Toggle aria-controls="navbarScroll "  style={{backgroundColor:"lightgray", margin:"auto"}}/>
                    <Navbarrr.Collapse id="navbarScroll ">
                        <Nav
                            className="m-auto "
                            style={{ maxHeight: 'auto', borderTop: "none" }}
                            navbarScroll
                            id="myDIV"
                        >



                            <ul className="main-navigation" id="navi"  >

                                <li style={{ borderRadius: "20px" }} id="drop"><a href="#" id="a-tag" className="atag menu"> <b>  WHOLESALE</b> </a>

                                </li>


                                <li style={{ borderRadius: "20px" }} id="drop"><a href="#" id="a-tag" className="atag menu"> RETAIL </a>

                                </li>
                                <li style={{ borderRadius: "20px" }} id="drop"><a href="#" id="a-tag" className="atag menu">  CULTURE    </a>

                                </li>
                                <li style={{ borderRadius: "20px" }} id="drop"><a href="#" id="a-tag" className="atag menu">  BRANDS </a>

                                </li>
                                <li style={{ borderRadius: "20px" }} id="drop"><a href="#" id="a-tag" className="atag menu"> AUTOS </a>

                                </li>


                            </ul>











                        </Nav>

                    </Navbarrr.Collapse>
                </Navbarrr>



            </div>

        </div>
    )
}

export default Navbarr;
