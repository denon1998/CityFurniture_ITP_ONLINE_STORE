import React, { Component } from 'react';
import { Link } from "react-router-dom";

import axios from 'axios';
import swal from 'sweetalert';

class payPal extends Component {




    constructor(props) {
        super(props)

        this.state = {
            cname: '',
            cemail: '',
            cpassword: ''


        }


    }




    changeNameHandler = event => { this.setState({ cname: event.target.value }) }
    changeEmailHandler = event => { this.setState({ cemail: event.target.value }) }
    changePasswordHandler = event => { this.setState({ cpassword: event.target.value }) }




    onSubmit = (event) => {
        event.preventDefault();

        const { cname, cemail, cpassword } = this.state;

        const Paypal = {
            cname: cname,
            cemail: cemail,
            cpassword: cpassword
        }
        console.log(Paypal)

        //validation start here
        const name = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
        const email = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;


        if (cname.length === 0 || cemail.length === 0 || cpassword.length === 0) {
            swal("Fields can not be empty!", "Please fill all the information!", "error");

        } else if ((!name.test(String(cname)))) {
            swal("Invalid Customer Name", "Customer name cannot contain any Numbers!", "error");

        }
        else if (cname.length > 20) {
            swal("Invalid Customer Name!", "Do not enter more than 20 letters!", "error");
        }

        else if (cname.length < 3) {
            swal("Invalid Customer Name!", "Please check your name again!", "error");
        }
        else if ((!email.test(String(cemail)))) {
            swal("Invalid Customer email", "Customer email should contain @ sign!", "error");

        }
        else if (cemail.length > 20) {
            swal("Invalid Customer Email!", "Please recheck your Email address!");
        }

        else if (cemail.length < 3) {
            swal("Invalid Customer Email!", "Please enter Correct Email Address!", "error");
        }
        else if (cpassword.length > 8) {
            swal("Invalid Customer Password!", "Please enter Correct Password!", "error");
        }
        else if (cpassword.length < 8) {
            swal("Invalid Customer Password!", "Please recheck your password", "error");
        }

        //validation end here

        else {

            axios.post("https://furniture-store-backend.herokuapp.com/api/postPay/save", Paypal)
                .then(response => {
                    if (response.data.success) {
                        swal('successful')
                        this.props.history.push('/palSuccess/' + this.state.cpassword + '/' + this.props.match.params.tot);

                    } else {
                        swal('Failed')
                    }
                })

        }
    }

    //method of demo button
   demo =() => { 
    //setState
   
    this.setState( {
      ...this.state,
      cname: "Ishara Maduwanthi",
      cemail: "ishara@gmail.com",
      cpassword: "12352acd",
      
    })
  }
    render() {

        return (
            <div className="App">

                <div className="col-10 mt-5 ml-5 mr-10">

                    <center>
                    <h1 class="topic"><b>PAY NOW </b></h1>
                   
                    <h4>Please do payments to proceed ahead with your selected items</h4>
                    <br></br>
                    </center>
                    <center>
                        <div className="card" style={{ width: '48rem' }}>
                            <form onSubmit={this.onSubmit} className="payform">
                                <h3>Payments through PayPal</h3>
                                <div className="form-group">
                                    <Link to="https://www.paypal.com/lk/home">
                                        <input type="submit" value="Sign in" className="btn signIn" /></Link><br /><br />
                                    <label>Customer Name :   </label><br />
                                    <input type="text" onChange={this.changeNameHandler} value={this.state.cname} className="form-control" /><br />

                                    <label>Email Address: </label> <br />
                                    <input type="text" onChange={this.changeEmailHandler} value={this.state.cemail} className="form-control" /><br />
                                </div>
                                <div className="form-group">
                                    <label>Password: </label><br />
                                    <input type="password" onChange={this.changePasswordHandler}
                                        value={this.state.cpassword} className="formpwd" /><br />
                                </div>


                                <div className="form-group">
                                    <Link to={"/CardPay/"} value="Pay Rs." className="btn btn-primary" onClick={this.onSubmit}>Pay</Link>
                                    <br/>
                                    <br/>
                                    
                                </div>

                            </form>
                            <center>
                            <button className ="btn btn-primary" style={{ textDecoration: 'none', color: 'white', width:'13%' }} onClick={(e) => {
                        this.setState( {
                            ...this.state,
                            cname: "Ishara Maduwanthi",
                            cemail: "ishara@gmail.com",
                            cpassword: "12352acd",
                  })
            }}>Demo</button> 
            </center>
                        </div></center>
                    <div className="form-group">

                    </div><br /><br />
                </div>



            </div>
        );
    }
}
export default payPal;