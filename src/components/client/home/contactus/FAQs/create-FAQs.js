import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
// import swal from '@sweetalert/with-react'

import swal from 'sweetalert';


export default class CreateFAQs extends Component {
    constructor(props) {
        super(props);


        this.onChangefname = this.onChangefname.bind(this);
        this.onChangelname = this.onChangelname.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangedate = this.onChangedate.bind(this);
        this.onChangeorderNo = this.onChangeorderNo.bind(this);
        this.onChangecategory = this.onChangecategory.bind(this);
        this.onChangeFAQsMsg = this.onChangeFAQsMsg.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            fname: '',
            lname: '',
            Phone: '',
            Email: '',
            date: new Date(),
            orderNo: '',
            category: '',
            FAQsMsg: ''
        }
    }

    //set the username 
    onChangefname(e) {
        this.setState({
           fname: e.target.value
        })
    }
    
    onChangelname(e) {
        this.setState({
           lname: e.target.value
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

    //Set orderNo
    onChangeorderNo(e) {
        this.setState({
            orderNo: e.target.value
        })
    }

     //Set  category
     onChangecategory(e) {
        this.setState({
            category: e.target.value
        })
    }

    //Set FAQsMsg
    onChangeFAQsMsg(e) {
        this.setState({
            FAQsMsg: e.target.value
        })
    }


    //submit Function
    onSubmit(e) {
        e.preventDefault();

        const FAQs = {
            fname: this.state.fname,
            lname: this.state.lname,
            Phone: this.state.Phone,
            Email: this.state.Email,
            date: this.state.date,
            orderNo: this.state.orderNo,
            category: this.state.category,
            FAQsMsg: this.state.FAQsMsg
        }

        console.log(FAQs);

        axios.post('http://furniture-store-backend.herokuapp.com/api/FAQs/add', FAQs)
            .then(res => console.log(res.data));

            swal({
                title: "Done!",
                text: "Customer Successfully Added",
                icon: "success",
                button: "Okay!"
            })
            .then((value) => {
                swal(window.location = '#');
            });
    }

    render() {
        return ( 
            <div>
            <div class="row">
            <div class="col-6">
            <br/>
            <img src="https://www.t2taiwan.com/includes/images/FAQ1000X750.jpg" width="100%" height="90% "/>
            </div>
  
    <div class="col-6">
     <div className="cardf" style={{width: "85%"}}>
       <div className="card-body">
         <div className="col-md-8 mt-4 mx-auto">

            <h3 > FAQs Form</h3> 
            <form onSubmit = { this.onSubmit } >

            <label className="topicF" >We endeavor to provide you the best service at all times. Please let us know about your inquiry completing the form below.</label>
            <br >
            </br>
            <br >
            </br>

            <div className = "form-group" >
            <label >  First Name: </label> 
            <input type = "text" 
                    required className = "form-control" 
                    value = { this.state.fname }
                    placeholder="Enter Your First Name"
                    onChange = { this.onChangefname }/> 
            </div > 

            <div className = "form-group" >
            <label >  Last Name: </label> 
            <input type = "text" 
                    required className = "form-control" 
                    value = { this.state.lname }
                    placeholder="Enter Your Last Name"
                    onChange = { this.onChangelname }/> 
            </div >     
            
            
            <div className = "form-group" >
            <label > Phone number: </label> 
            <input type = "text"
                   maxlength = "10"
                   required className = "form-control"
                   value = { this.state.Phone }
                   placeholder="Enter Your Phone number"
                   onChange = { this.onChangePhone }/>
            </div >


            <div className = "form-group" >
            <label > Email: </label>
            <input type = "text"
                   required className = "form-control"
                   value = { this.state.Email }
                   placeholder="Enter Your Email"
                   onChange = { this.onChangeEmail }/>
            </div >

            <br >
            </br>

            <div className = "form-group" >
            <label > Date: </label> 
            <div >
            <DatePicker selected = { this.state.date }
            onChange = { this.onChangedate}/> 
            </div >
            </div>

            <br >
            </br>

            <div className = "form-group" >
            <label > Order No: </label> 
            <input type = "text"
                   maxlength = "6"
                   default className = "form-control"
                   value = { this.state.orderNo }
                   placeholder="Enter the order no which is you have problem"
                   onChange = { this.onChangeorderNo }/>
            </div >

            <div className = "form-group" >
            <label >  Category: </label> 
            <input type = "text" 
                    default className = "form-control" 
                    value = { this.state.category }
                    placeholder="Enter which the category "
                    onChange = { this.onChangecategory }/> 
            </div > 

            <br >
            </br>

            <div className = "form-group" >
            <label > Question: </label>
            <input type = "text"
                   required className = "form-control"
                   value = { this.state.FAQsMsg }
                   placeholder="Mention your problem here.."
                   onChange = { this.onChangeFAQsMsg }/> 
            </div >

            <br ></br>
            <label style={{ marginBottom: '5px' }} className="topic">You will be getting a email with solve your problem. Thank you !   </label>
            
            <div className = "form-group" >
            <input type = "submit"
                   value = "Submit"
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