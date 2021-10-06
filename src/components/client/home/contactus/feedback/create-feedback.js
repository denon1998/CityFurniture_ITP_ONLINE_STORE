import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {Button} from'react-bootstrap' ;
// import swal from '@sweetalert/with-react'
import swal from 'sweetalert';
//import Rating from "./rate/Rating";

export default class Createfeedback extends Component {
    constructor(props) {
        super(props);


        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangedate = this.onChangedate.bind(this);
        this.onChangefeedbackMsg = this.onChangefeedbackMsg.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Username: '',
            Phone: '',
            Email: '',
            date: new Date(),
            feedbackMsg: ''
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

    
    //set day
    onChangedate(date) {
        this.setState({
            date: date
        })
    }


    //Set feedbackMsg
    onChangefeedbackMsg(e) {
        this.setState({
            feedbackMsg: e.target.value
        })
    }


    //submit Function
    onSubmit(e) {
        e.preventDefault();

        const {Phone,Email} = this.state;

        const feedback = {
            Username: this.state.Username,
            Phone: this.state.Phone,
            Email: this.state.Email,
            date: this.state.date,
            feedbackMsg: this.state.feedbackMsg
        }




        console.log(feedback);

        //validation
        const cup = /^[0-9\b]+$/;
        const cuem = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if((!cup.test(String(Phone))) || (Phone.length != 10)) {
            swal("Invalid Contact Number !", "contact number should be valide pattern", "error");
        } else if ((!cuem.test(String(Email)))) {
            swal("Invalid email address !", "Please enter valid email address !", "error");
        }
  
        else {

        axios.post('http://furniture-store-backend.herokuapp.com/api/feedback/add', feedback)
            .then(res => console.log(res.data));

            swal({
                title: "Done!",
                text: "Customer Successfully Added",
                icon: "success",
                button: "Okay!"
            })
            .then((value) => {
                swal(window.location = 'components/client/home/contactus/rate');
            });
    }}

     //demo button method
     demo =() => { 
    
        //setState
        this.setState ({
            Username: "Jone Williyem"
        })
    
        this.setState ({
            Phone: "0751231234"
        })  
    
        this.setState ({
            Email: "jone@gmail.com"
        })
    
        this.setState ({
            date: ""
        })
    
        this.setState ({
            feedbackMsg: "service is greate"
        })
      }

    

    render() {
        return ( 
            <div style={{backgroundColor:"#c2dadd"}}>
            <div class="row">
            <div class="col-6">
             &nbsp;&nbsp;&nbsp;&nbsp;
            <img src="https://tlt.cofc.edu/files/2019/08/1_UbeT74oIf3JlX1YRu90EKA-1080x675.jpeg " width="100%" height="90% "/>
            </div>

         

       <div class="col-6">
       <br/><br/>
       <div className="cardf" style={{width: "85%"}}>
          <div className="card-body">
            <div className="col-md-8 mt-4 mx-auto">
            <h3 > Feedback Form</h3> 
            <br/>
            <form onSubmit = { this.onSubmit } >
            <div className = "form-group" >
            <label > Name: </label> 
            <input type = "text" 
                    required className = "form-control" 
                    value = { this.state.Username }
                    placeholder="Enter Your Name"
                    onChange = { this.onChangeUsername }/> 
            </div > 
            
            
        <div className = "form-group" style={{ marginBottom: '15px' }}>
            <label > Phone: </label> 
            <input type = "text"
                   maxlength = "10"
                   className = "form-control"
                   value = { this.state.Phone }
                   placeholder="Enter Your Phone number"
                   onChange = { this.onChangePhone }/>
        </div >


        <div className = "form-group" >
            <label > Email: </label>
            <input type = "text"
                   className = "form-control"
                   value = { this.state.Email }
                   placeholder="Enter Your Email"
                   onChange = { this.onChangeEmail }/>
        </div >

        <div className = "form-group" >
            <label > Date: </label> 
               <div >
                <DatePicker selected = { this.state.date }
                onChange = { this.onChangedate}/> 
        </div >

            <br >
            </br>

            <div className = "form-group" >
            <label > Massege: </label>
            <input type = "text"
                   required className = "form-control"
                   value = { this.state.feedbackMsg }
                   placeholder="Enter Feedback comment here.."
                   onChange = { this.onChangefeedbackMsg }/> 
            </div >
            </div>

            <br >
            </br>

            <label style={{ marginBottom: '5px' }} className="topic">Thank you! for your feedback </label>

            <Button variant="primary" onClick={this.demo}>Demo</Button>
            <br ></br> <br ></br>

            <div className = "form-group" >
            <input type = "submit"
                   value = "Save"
                   className = "btn btn-primary" />
            </div> 
            </form > 
            </div >
            </div >
          </div >
        </div>
         </div>
         </div>
        )
    }
}