import React, { Component } from 'react';
import axios from 'axios';
// import swal from '@sweetalert/with-react'
//import './myformStyle.css'
import swal from 'sweetalert';

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

        const contact = {
            Username: this.state.Username,
            Phone: this.state.Phone,
            Email: this.state.Email

        }

        console.log(contact);

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
    }

    render() {
        return ( 
            <div >
            <div class="row">
            <div class="col-6">
            <br/> <br/> <br/>
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

        
            <div className = "form-group" >
            <input type = "submit"
                   value = "Create"
                   className = "btn btn-primary" />
            </div> 
                 
            </form > 
            </div>
            </div >
            </div >
          </div >
        </div>
        </div>
        )
    }
}

