import React, { Component } from 'react';
import axios from 'axios';
// import swal from '@sweetalert/with-react'
//import './myformStyle.css'
import swal from 'sweetalert';
import {Button} from'react-bootstrap' ;
//import Footer from '../components/client/home/Footer';

export default class Createcontact extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Username: '',
            Phone: '',
            Email: ''
        }
    }

    //set the username 
    onChangeUsername(e) {
        this.setState({
            Username: e.target.value
        })
    }
    
    
     //set phone number
    onChangePhone(e) {
            this.setState({
                Phone: e.target.value
            })
        }
        

    //Set Email
    onChangeEmail(e) {
        this.setState({
            Email: e.target.value
        })
    }

    
    //submit Function
    onSubmit(e) {
        e.preventDefault();

        const {Phone,Email} = this.state;

        const contact = {
            Username: this.state.Username,
            Phone: this.state.Phone,
            Email: this.state.Email

        }

        console.log(contact);

            //validation
            const cup = /^[0-9\b]+$/;
            const cuem = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if((!cup.test(String(Phone))) || (Phone.length != 10)) {
               swal("Invalid Contact Number !", "contact number should be valide pattern", "error");
            } else if ((!cuem.test(String(Email)))) {
               swal("Invalid email address !", "Please enter valid email address !", "error");
            }
                 
           else {

        axios.post('http://furniture-store-backend.herokuapp.com/api/contact/add', contact)
            .then(res => console.log(res.data));

            swal({
                title: "Done!",
                text: "Contact Successfully Added",
                icon: "success",
                button: "Okay!"
            })
            .then((value) => {
                swal(window.location = '#');
            });
    }}

     //demo button method
     demo =() => { 
    
        //setState
        this.setState ({
            Username: "Jone Williyem"
        })
    
        this.setState ({
            Phone: "0753331122"
        })  
    
        this.setState ({
            Email: "jone@gmail.com"
        })
      }

    render() {
        return ( 
            <div >
            <div class="row">
            <div class="col-6">
            <br/> <br/> <br/>

         <h4> Contact Details</h4> <br/>
         <p> Email: <a href="https://webmail.au.syrahost.com/">cityfurniturestore@gmail.com</a></p>
        <hr />
        <p> instagram : <a href="https://www.instagram.com/">City_Furniture_Store</a></p>
        <hr/>
        <p> twitter : <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D">@CityFurnitureStore</a></p>
        <hr/>
        <p> facebook : <a href="https://www.facebook.com/">City Furniture Store</a></p>
        <hr/>
        <p> fax Number : <b> +94 776767677</b></p>
        <hr/>
        <p> Contact Number : <b> +94 776767777</b></p>
        <hr/>
        <p className="mb-0">
        Everyday, we add stunning new products to our range to help our customers make thire home beatuiful. if you would like to partner with us 
        and join our journey of making a million beautiful homes.
       </p>

            <img src="https://www.blogtyrant.com/wp-content/uploads/2019/12/best-contact-us-pages-2.png" width="90%" height="110% " />
            </div>
  
    <div class="col-6">
    <br/> <br/> <br/>
    <div className="cardf" style={{width: "85%"}}>
       <div className="card-body">
         <div className="col-md-8 mt-4 mx-auto">

            <h3 > Contact Form </h3> 
            <form onSubmit = { this.onSubmit } >
            <div className = "form-group" >
            <label > Name: </label> 
            <input type = "text" 
                    required className = "form-control" 
                    value = { this.state.Username }
                    placeholder="Enter your username"
                    onChange = { this.onChangeUsername }/> 
       </div > 
            
            
        <div className = "form-group" >
            <label > Phone: </label> 
            <input type = "text"
                   maxlength = "10"
                   className = "form-control"
                   value = { this.state.Phone }
                   placeholder="Enter your phone number"
                   onChange = { this.onChangePhone }/>
        </div >


        <div className = "form-group" >
            <label > Email: </label>
            <input type = "text"
                   className = "form-control"
                   value = { this.state.Email }
                   placeholder="Enter your email address"
                   onChange = { this.onChangeEmail }/>
        </div >

        <br >
            </br>

            <label style={{ marginBottom: '5px' }} className="topic">Thank you! for you contact with Us </label>
            
            <Button variant="primary" onClick={this.demo}>Demo</Button>
            <br ></br> <br ></br>
        
            <div className = "form-group" >
            <input type = "submit"
                   value = "Create"
                   className = "btn btn-primary" />
            </div> 
                 
            </form > 
           {/* <Footer />*/}
            </div>
            </div >
            </div >
          </div >
        </div>
        </div>
        )
    }
}

