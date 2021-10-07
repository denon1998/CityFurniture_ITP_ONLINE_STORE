import { text } from 'body-parser';
import React, { Component } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import './style/CardPay.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

import swal from 'sweetalert';


class CardPayClient extends Component {


    constructor(props) {
        super(props);
        this.state = {
            cardnumber: '',
            customerName: '',
            expiry: '',
            cvc: '',
            focus: '',

        }
    }

    handleInputFocus = (e) => {
        this.setState({ focus: e.target.name });
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            ...this.state,
            [name]: value
        })

    }

    onSubmit = (e) => {

        e.preventDefault();


        const { cardnumber, customerName, expiry, cvc } = this.state;

        const data = {
            cardnumber: cardnumber,
            customerName: customerName,
            expiry: expiry,
            cvc: cvc,


        }

        console.log(data)

        //validation start here
        const name = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
        const card = /^[0-9\b]+$/;

        if (cardnumber.length === 0 || customerName.length === 0 || expiry.length === 0 || cvc.length === 0) {
            swal("Fields can not be empty!", "Please fill all the information!", "error");

        } else if ((!card.test(Number(cardnumber)))) {
            swal("Invalid Card Number", "Card Number cannot contain any Characters!", "error");

        }
        else if ((!name.test(String(customerName)))) {
            swal("Invalid Customer Name", "Customer name cannot contain any Numbers!", "error");

        }
        else if (cardnumber.length > 16) {
            swal("Invalid Card Number!", "Do not enter more than 16 Numbers!", "error");
        }

        else if (cardnumber.length < 16) {
            swal("Invalid Card Number!", "Do not enter less than 16 Numbers!", "error");
        }


        else if (customerName.length > 20) {
            swal("Invalid Customer Name!", "Do not enter more than 20 letters!", "error");
        }

        else if (customerName.length < 3) {
            swal("Invalid Customer Name!", "Please check your name again!", "error");
        }

        else if (expiry.length > 5) {
            swal("Invalid  Date!", "Please followed the below format!", "error");
        }
        else if (expiry.length < 5) {
            swal("Invalid  Date!", "please followed the below format!", "error");
        }
        else if ((!card.test(Number(cvc)))) {
            swal("Invalid CVC Number", "CVC cannot contain any Characters!", "error");

        }

        else if (cvc.length < 3) {
            swal("Invalid CVC Number", "CVC should contain 3 numbers only!", "error");
        }
        else if (cvc.length > 3) {
            swal("Invalid CVC Number", "CVC should contain 3 numbers only!", "error");
        }


        else {


            axios.post('https://furniture-store-backend.herokuapp.com/api/cardpost/save', data).then((res) => {

                if (res.data.success) {

                    swal("payment successfully added!");
                    this.props.history.push('/success');

                    this.setState(
                        {
                            cardnumber: "",
                            customerName: "",
                            expiry: "",
                            cvc: "",

                        }
                    )
                }
            })
        }
    }

    //method of demo button
    demo = () => {
        //setState

        this.setState({
            ...this.state,
            cardnumber: "3452632596325842",
            customerName: "Imesh Roshan",
            expiry: "03/26",
            cvc: "852",

        })
    }




    render() {
        return (
            <div className='container' align="center" >

                <br />
                <Cards
                    number={this.state.cardnumber}
                    name={this.state.customerName}
                    expiry={this.state.expiry}
                    cvc={this.state.cvc}
                    focused={this.state.focus}

                />
                <br />
                <h2><b>PAY NOW</b></h2>

                <br />
                <form style={{ width: "35%" }}>
                    <input
                        class="form-control"
                        type="tel"
                        name="cardnumber"
                        placeholder="Card Number"
                        value={this.state.cardnumber}
                        required
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                    />

                    <br />
                    <input
                        class="form-control"
                        type="text"
                        name="customerName"
                        placeholder="Customer Name"
                        value={this.state.customerName}
                        required
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                    />

                    <br />
                    <input
                        class="form-control"
                        type="text"
                        name="expiry"
                        placeholder="MM/YY"
                        value={this.state.expiry}
                        required
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                    />

                    <br />
                    <input
                        class="form-control"
                        type="tel"
                        name="cvc"
                        placeholder="cvc"
                        value={this.state.cvc}
                        required
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                    />

                    <br />
                    <button className="btn btn-outline-primary" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                        <i className="far fa-check-square"></i>
                        &nbsp; PROCEED
                    </button>

                </form>

                <button className="btn btn-outline-primary" style={{ marginTop: '15px' }} onClick={(e) => {
                    this.setState({
                        ...this.state,
                        cardnumber: "3452632596325842",
                        customerName: "Imesh Roshan",
                        expiry: "03/26",
                        cvc: "852",
                    })
                }}>Demo</button>
            </div>
        );
    }
}
export default CardPayClient;
