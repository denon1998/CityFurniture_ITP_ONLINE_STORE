import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import chair from "../images/chair.jpg";
import banner from "../images/b1.gif"



export default class CreateOrderPost extends Component {

  //intialization


  constructor(props) {
    super(props);
    this.state = {
      name: "",
      postalNo: "",
      street: "",
      town: "",
      contactNo: "",
      orderDate: "",
      status: "Pending",
      cartTotal: "",
    }
  }

  componentDidMount() {
    const cart = localStorage.getItem('react-use-cart');
    const cartdata = JSON.parse(cart);
    console.log(cartdata.cartTotal)

    this.setState({
      cartTotal: cartdata.cartTotal,
    })

  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value
    })

  }
  //save to db
  onSubmit = (e) => {

    e.preventDefault();

    const { name, postalNo, street, town, contactNo, orderDate, status, cartTotal } = this.state;

    const data = {
      name: name,
      postalNo: postalNo,
      street: street,
      town: town,
      contactNo: contactNo,
      orderDate: orderDate,
      status: status,
      cartTotal: cartTotal


    }

    console.log(data)


    //validation

    const re = /^[0-9\b]+$/;
    if (name == "" || postalNo == "" || street == "" || town == "" || contactNo == "" || orderDate == "") {
      swal("Please fill the form correctly", "Form values cannot be empty", "error");
    }
    else if (name.length < 2) {
      swal("User name invaide", "length should be greater than 2", "error");
    }
    else if ((!re.test(String(contactNo))) || (contactNo.length != 10)) {
      swal("Contact Number invaide", "contact number should be valide pattern", "error");
    } else if (town.length < 2) {
      swal(" Please enter valid town", "length should be greater than 2", "error");
    }
    else {

      swal({
        title: "Are you sure?",
        text: `Name: ${this.state.name} | Postal No.: ${this.state.postalNo} | Street: ${this.state.street} | Town: ${this.state.town} | Contact No: ${this.state.contactNo} | Status: ${this.state.status} | Total: ${this.state.cartTotal}`,
        icon: "info",
        buttons: true,
        dangerMode: true,
      })
        .then((willDelete) => {
          if (willDelete) {

            axios.post("https://furniture-store-backend.herokuapp.com/api/post/save", data).then((res) => {
              if (res.data.success) {
                localStorage.removeItem("react-use-cart")
                this.setState(
                  {
                    name: "",
                    postalNo: "",
                    street: "",
                    town: "",
                    contactNo: "",
                    orderDate: "",
                    status: "Pending",

                  }

                )
                // swal("Order Added Successfully!", "Your oder will be accepted"+ `${this.state.status}`, "success");
              }
            })
            swal("Order Added Successfully!", {
              icon: "success",
            });
          } else {
            swal("Your Order is not completed!");
          }
        });


    }


  }

  render() {
    return (
      <div style={{width: "100%", height: "100%"}}>
      <div class="row" style={{width: "100%"}}>
    <div class="col-5" style={{height: "100vh"}}>
    <img src={banner} style={{height: "100vh"}} />
    </div>
    <div class="col-7">
      <div style={{marginTop: "2%"}}>
      <div className="carddd" style={{ width: "80%" }}>

<div className="card-body">
  <div className="col-md-8 mt-4 mx-auto">
    <h1 className="text-center topic">Order Detail Form </h1>

    <form className="needs-validation" align="center" style={{ width: "100%" }} >
      <div className="form-group" style={{ marginBottom: '15px' }}>
        <label style={{ marginBottom: '5px' }} className="topic">Customer Name: </label>
        <input type="text"
          id="validationTooltip01"
          className="form-control"
          name="name"
          placeholder="Enter Your Name"
          value={this.state.name}
          onChange={this.handleInputChange} required />


      </div>


      <label style={{ marginBottom: '5px' }} className="topic">Address: </label>
      <div class="row">
        <div class="col">
          <input type="number"
            className="form-control"
            name="postalNo"
            placeholder="postal no"
            value={this.state.postalNo}
            onChange={this.handleInputChange}
            required />
        </div>

        <div class="col">
          <input type="text"
            className="form-control"
            name="street"
            placeholder="street"
            value={this.state.street}
            onChange={this.handleInputChange} />
        </div>

        <div class="col">
          <input type="text"
            className="form-control"
            name="town"
            placeholder="town"
            value={this.state.town}
            onChange={this.handleInputChange} />
        </div>
      </div>

      <div className="form-group" style={{ marginBottom: '15px' }}>
        <label style={{ marginBottom: '5px' }} className="topic">Contact No: </label>
        <input type="text"
          className="form-control"
          name="contactNo"
          placeholder="Enter Your TeleNo"
          value={this.state.contactNo}
          onChange={this.handleInputChange} />
      </div>


      <div className="form-group" style={{ marginBottom: '15px' }}>
        <label style={{ marginBottom: '5px' }} className="topic">Order Date</label>
        <input type="date"
          className="form-control"
          name="orderDate"
          placeholder="Date"
          value={this.state.orderDate}
          onChange={this.handleInputChange} />
      </div>

      <label style={{ marginBottom: '5px' }} className="topic">Order Status: Pending</label>
      <br />
      <label style={{ marginBottom: '5px' }} className="topic">Order Total: {this.state.cartTotal}</label>
      <br />


      <button className="btn btn-dark" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
        <i className="far fa-check-square"></i>
        &nbsp; Continue with Payment
      </button>
      <br />

    </form>

    

  </div>
  
</div>


</div>
{this.state.name}
          <section id="hire">
            <div className="topic">
              <div class="container-fluid">
                <div class="Jumbotron jumbotron-fluid">
                  <div className="container hire">
                    <br/>
                    <marquee direction="left"><p class="display-3 "><img src="http://gifgifs.com/animations/jobs-people/painters/Painting_the_fence.gif" style={{width: "15%"}} />Thanks for choosing CITY FURNITURE</p></marquee>
                  </div>
                </div>
              </div>
            </div>
          </section>
      </div>
    </div>
  </div>

        {/* <div className="container">
          <div className="text-center topic">
            <h1>Place Your Order Here</h1>
          </div>
          <div class="row">
            <div class="col-6">

              <img src={banner} width="100%" className="" />
            </div>
            <div class="col-6">
              <br />
            
              <div className="carddd" style={{ width: "80%" }}>

                <div className="card-body">
                  <div className="col-md-8 mt-4 mx-auto">
                    <h1 className="text-center topic">Order Detail Form </h1>

                    <form className="needs-validation" align="center" style={{ width: "100%" }} >
                      <div className="form-group" style={{ marginBottom: '15px' }}>
                        <label style={{ marginBottom: '5px' }} className="topic">Customer Name: </label>
                        <input type="text"
                          id="validationTooltip01"
                          className="form-control"
                          name="name"
                          placeholder="Enter Your Name"
                          value={this.state.name}
                          onChange={this.handleInputChange} required />


                      </div>


                      <label style={{ marginBottom: '5px' }} className="topic">Address: </label>
                      <div class="row">
                        <div class="col">
                          <input type="number"
                            className="form-control"
                            name="postalNo"
                            placeholder="postal no"
                            value={this.state.postalNo}
                            onChange={this.handleInputChange}
                            required />
                        </div>

                        <div class="col">
                          <input type="text"
                            className="form-control"
                            name="street"
                            placeholder="street"
                            value={this.state.street}
                            onChange={this.handleInputChange} />
                        </div>

                        <div class="col">
                          <input type="text"
                            className="form-control"
                            name="town"
                            placeholder="town"
                            value={this.state.town}
                            onChange={this.handleInputChange} />
                        </div>
                      </div>

                      <div className="form-group" style={{ marginBottom: '15px' }}>
                        <label style={{ marginBottom: '5px' }} className="topic">Contact No: </label>
                        <input type="text"
                          className="form-control"
                          name="contactNo"
                          placeholder="Enter Your TeleNo"
                          value={this.state.contactNo}
                          onChange={this.handleInputChange} />
                      </div>


                      <div className="form-group" style={{ marginBottom: '15px' }}>
                        <label style={{ marginBottom: '5px' }} className="topic">Order Date</label>
                        <input type="date"
                          className="form-control"
                          name="orderDate"
                          placeholder="Date"
                          value={this.state.orderDate}
                          onChange={this.handleInputChange} />
                      </div>

                      <label style={{ marginBottom: '5px' }} className="topic">Order Status: Pending</label>
                      <br />
                      <label style={{ marginBottom: '5px' }} className="topic">Order Total: {this.state.cartTotal}</label>
                      <br />


                      <button className="btn btn-dark" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                        <i className="far fa-check-square"></i>
                        &nbsp; Continue with Payment
                      </button>
                      <br />

                    </form>

                  </div>
                </div>

              </div>
            </div>
          </div>

          <br />
          <br />
          {this.state.name}
          <section id="hire">
            <div className="topic">
              <div class="container-fluid">
                <div class="Jumbotron jumbotron-fluid">
                  <div className="container hire">
                    <marquee direction="left"><p class="display-3 "><img src="http://gifgifs.com/animations/jobs-people/painters/Painting_the_fence.gif" height="10%" />Thanks for choosing CITY FURNITURE</p></marquee>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div> */}
      </div>
    )
  }
}