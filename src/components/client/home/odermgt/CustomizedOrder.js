import React from 'react';
import wood from '../images/wood.jpg';
import steel from '../images/steel.jpg';
import plyw from '../images/plyw.jpg';
import shop from '../images/shop.jpg';
import newchair from '../images/newchair.jpg';
import workshop from '../images/workshop.jpg';
import fabricss from '../images/fabricss.jpg';
import map from '../images/map.png'
import working from '../images/working.jpg'
import cut from '../images/cut.jpeg';
import Footer from '../Footer';




/**
* @author
* @function CustomizedOrder
**/

const CustomizedOrder = (props) => {
  return (
    <div>

      <h1 className="text-center"><b>Customized Your Design</b></h1>
      <br />
      <h4 className="text-center " >
      
          <p className="text-danger ">
            <b>Looking for a Unique designs ? </b>Or make your <b>Dream furniture </b>from our talented, well-experienced experts.
          </p></h4>
      <h3 className="text-center"><b>
        Materials</b></h3>
  
      <div className="card-group">
        <div className="card">
          <img src={wood} className="card-img-top" />
          <div className="card-body">
            <br />
            <br />
            <br />
            <br />
            <h5 className="card-title">
              <p className="textdesign2"><b>Wood</b></p></h5>
            <p className="card-text">We have variety of wood ranges. City furniture is famous for quality products. We offer life-time warrenty for wood to all our customers</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 hrs ago</small>
          </div>
        </div>
        <div className="card">
          <img src={steel} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title"> <p className="textdesign2"><b>Stainless Steel</b></p></h5>
            <p className="card-text">You can cutomized your stainless steel product with high quality, durable standards.</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 hrs ago</small>
          </div>
        </div>
        <div className="card">
          <img src={plyw} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title"><p className="textdesign2"><b>Plywood  </b></p>  </h5>
            <p className="card-text">We have number of variety of furniture products made up of Plywood.</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 hrs ago</small>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <h3 className="text-center"><b>
        Fabrics</b></h3>
        <div className="card-group">
        <div className="myformstyle">
        <div class="clearfix">
        <div class="row">
          <div class="col-6">
  
<br/>
<br/>
  <p>
      We have wide range of fabrics with different colors, and fabric types. <b>All are 100% good quality, durable and classy.</b>
  </p>
 
  <p>
      You can customize the product with any fabric you wish. Price may change according to the resource you choose
  </p>

  <p>
    We have provided cleaning fabrics facilities for our customers. You can customize a new set of covers for bought product. <b>Maximum 7 weeking days to complete the order.</b>
    
  </p>
  <br/>
  <h5 className="text-center "><b><a href="#">Contact us for more Details.</a></b></h5>
  </div>
  <div class="col-6">
      <img src= {fabricss} style={{width:"100%", height:"101%"}}/>

    </div>

  </div>

</div>
</div>
</div>
      <br />
      <br />
      <br />
      <br />

      <h3 className="text-center"><b>About our Service</b></h3>
      
    <br/>
  
    <div class="alert alert-danger text-center" role="alert">:) We will deliver our products with in 7 days. We will design your customized product within a months :) </div>
   
<div className="container border" style={{ width:"80%", height:"80%"}} >
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://i.pinimg.com/originals/93/c7/44/93c744bcde1780c94bb1d3f03991f8a7.gif" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={working} alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://i.pinimg.com/originals/6c/9e/19/6c9e197129299c5af04d8ad1173ad9b9.gif" alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

</div>



   
     <br/>
    <br/>
 

    </div>
    

  

  )

}
export default CustomizedOrder