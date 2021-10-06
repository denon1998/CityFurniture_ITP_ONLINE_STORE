import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return (<
            nav className="navbar navbar-dark bg-dark navbar-expand-lg" >
            <
                Link to="/home"
                className="navbar-brand" ><font face="Comic sans MS" size="4"> City Furniture </font></Link> <
                    div className="collpase navbar-collapse" >
                <
                    ul className="navbar-nav mr-auto" >

                    
                    <
                        li className="navbar-item" >
                        <
                            Link to="/home"
                            className="nav-link" > Home </Link> </
                    li >

                    <
                    li className="navbar-item" >
                    <
                        Link to="/products"
                        className="nav-link" > Products </Link> </
                    li >
                 

                    <
                        li className="navbar-item" >
                        <
                            Link to="/customized"
                            className="nav-link" > Customized </Link> </
                    li >                        

                    <
                        li className="navbar-item" >
                        <
                            Link to="/order/add"
                            className="nav-link" > Order </Link> </
                    li >

                    <
                        li className="navbar-item" >
                        <
                            Link to="/cart"
                            className="nav-link" > Shopping Cart </Link> </
                    li >

                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    
                    <
                    li className="navbar-item" >
                    <
                        Link to="/"
                        className="nav-link" > Sign Out </Link> </
                    li >


                </ul >
            </div > </nav>
        );
    }
}