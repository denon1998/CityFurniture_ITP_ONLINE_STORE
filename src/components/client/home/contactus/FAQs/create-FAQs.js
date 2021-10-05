import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {Button} from'react-bootstrap' ;
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

        const {Phone,Email} = this.state;

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

         //validation
         const cup = /^[0-9\b]+$/;
         const cuem = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
         if((!cup.test(String(Phone))) || (Phone.length != 10)) {
             swal("Invalid Contact Number !", "contact number should be valide pattern", "error");
         } else if ((!cuem.test(String(Email)))) {
             swal("Invalid email address !", "Please enter valid email address !", "error");
         }
               
         else {

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
    }}

     //demo button method
     demo =() => { 
    
        //setState
        this.setState ({
            fname: "Jone"
        })
    
        this.setState ({
            lname: "willeyem"
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
            orderNo: "chamidU123"
        })
    
        this.setState ({
            category: "Eorror with Login"
        })
    
        this.setState ({
            FAQsMsg: "system says password invalid"
        })
      }

    render() {
        return ( 
            <div>
            <div class="row">
            <div class="col-6">
            <br/>
            <h4> How can we Help you?</h4> 
            <h6 > Frequently asked Questions....</h6> 
            <br >
            </br>

             <p><b>How do I check the status of my order?</b></p>
            <p>Once your order is placed you will receive an email with your order details which include the order confirmation number 
                Before the item you have purchased is dispatched to you we will reconfirm the address provided by you by contacting you 
                or through an email or the contact number provided. </p>
             <hr/>
             <p><b>Who can place an order?</b></p>
             <p>Anyone who is above 18 years old and has a valid Visa, Master or AMEX card is entitled to place an order. Those who are
                  under 18 years are only allowed to buy through their parent or guardian.</p>
             <hr/>
             <p><b>Is the product comes with warranty?</b></p>
             <p>All our Softlogic electronic /mobile products comes with one-year warranty.</p>
             <hr/>
             <p><b>How safe is my transaction?</b></p>
             <p>Site is SSL certified and we take all steps to ensure that the transaction is genuine and the customer information is 
                 secure.</p>
                 <hr/>
             <p><b>Can I change my shipping address after placing the order?</b></p>
             <p>Yes. Please call us on 0115 128128 or send us an email to customercare cityfurniturestore.gmail.com</p>
                 <hr/>
             <p><b>Can I change my shipping address after placing the order?</b></p>
             <p>Its simple and please follow below steps. </p>
             <p> *Add the product to the cart and press buy now. </p>
             <p> *Use login or guess checkout option to move to payment page. </p>
             <p> *the payment option and click ok to proceed the order.</p>
                <p>  Once the payment is done you will receive a mail confirmation to confirm the payment. If you find any difficulty in
                 placing the order or did not receive a confirmation email please contact our support team on 0115 128128 or send an 
                 email to customercare @cityfurniturestore .</p>
                 <hr/> 
             <p><b>Can I get a refund or replacement for my product?</b></p>
             <p>If the product is differ from you have order, Yes you can and please contact us on 0115 128 128 or send an email to 
                 customercare @cityfurniturestore </p>
                 <hr/> 
             <p><b>Can I get my product delivered to Jaffna?</b></p>
             <p>Yes, we deliver around the Island as well to the rest of the world. For any special inquiry you may contact us on
                  0115 128128</p>
                 <hr/>  
             <p><b>I did not get the invoice</b></p>
             <p>Once the order is been placed you should get an email from us but in case if you don’t received it you may reach our 
                 customer care or write to us on customercare@mysoftlogic.lk and will get it for you.</p>
                 <hr/>        

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
            <label >  Category: 
            <select>
            <option selected value="coconut">choose your FAQ category here</option>
            <option value="mango">About Payment Section</option>
            <option value="mango">Error with Login </option>
            <option value="mango">About Products management</option>
            <option value="mango">Error with shipping cart</option>
            <option value="mango">About delivery management</option>
           </select> 
           <br ></br>
           </label>  
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
            
            <Button variant="primary" onClick={this.demo}>Demo</Button>
            <br ></br> <br ></br>

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