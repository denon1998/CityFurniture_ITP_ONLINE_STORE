import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
// import swal from '@sweetalert/with-react' 
import swal from 'sweetalert';

export default class Createsuggestion extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangedate = this.onChangedate.bind(this);
        this.onChangesuggestionMsg = this.onChangesuggestionMsg.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Username: '',
            Phone: '',
            Email: '',
            date: new Date(),
            suggestionMsg: '' 
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


    //Set suggestionMsg
    onChangesuggestionMsg(e) {
        this.setState({
            suggestionMsg: e.target.value
        })
    }


    //submit Function
    onSubmit(e) {
        e.preventDefault();

        const suggestion = {
            Username: this.state.Username,
            Phone: this.state.Phone,
            Email: this.state.Email,
            date: this.state.date,
            suggestionMsg: this.state.suggestionMsg

        }

        console.log(suggestion);

        axios.post('http://furniture-store-backend.herokuapp.com/api/suggestion/add', suggestion)
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
            <br/><br/><br/><br/>
            <img src="https://thumbs.dreamstime.com/z/suggestion-word-cloud-concept-grey-background-88650449.jpg" width="100%" height="90% "/>
            </div>
  
    <div class="col-6">
        <br >
         </br>
         <br >
         </br>


    <div className="cardf" style={{width: "85%"}}>
       <div className="card-body">
         <div className="col-md-8 mt-4 mx-auto">
            <h3 > Suggestions and Inquiry Form
                </h3> 
            <form onSubmit = { this.onSubmit } >
            <div className = "form-group" >
            <label > Name: </label> 
            <input type = "text" 
                    required className = "form-control" 
                    value = { this.state.Username }
                    onChange = { this.onChangeUsername }/> 
       </div > 
            
            
        <div className = "form-group" >
            <label > Phone: </label> 
            <input type = "text"
                   maxlength = "10"
                   className = "form-control"
                   value = { this.state.Phone }
                   onChange = { this.onChangePhone }/>
        </div >


        <div className = "form-group" >
            <label > Email: </label>
            <input type = "text"
                   className = "form-control"
                   value = { this.state.Email }
                   onChange = { this.onChangeEmail }/>
        </div >

        <div className = "form-group" >
            <label > Date: </label> 
            <div >
            <DatePicker selected = { this.state.date }
            onChange = { this.onChangedate}/> 
        </div >
        </div>

            <br >
            </br>
            <label className="topicF" >TELL US YOUR INQUIRY OR SUGGESTION</label>
            <br > 
            </br>
            <br > 
            </br>

            <div className = "form-group" >
            <label > Suggestion or Inquiry Massege: </label>
            <input type = "text"
                   required className = "form-control"
                   value = { this.state.suggestionMsg }
                   onChange = { this.onChangesuggestionMsg }/> 
        </div >

            <br > 
            </br>

            <div className = "form-group" >
            <input type = "submit"
                   value = "Create"
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