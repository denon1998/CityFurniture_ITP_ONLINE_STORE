import React from 'react';
import wood from '../images/wood.jpg';
import steel from '../images/steel.jpg';
import plyw from '../images/plyw.jpg';
import shop from '../images/shop.jpg';
import newchair from '../images/newchair.jpg';
import workshop from '../images/workshop.jpg';
import fabricss from '../images/fabricss.jpg';



/**
* @author
* @function CustomizedOrder
**/

const CustomizedOrder = (props) => {
  return (
    <div className="container-sm">

      <h2 className="text-center topic"><b>Customized Your Design</b></h2>
      <br />
      <h4 className="text-center" >
        <p className="textdesign1">
          <p className="text-danger">
            <b>Looking for a Unique designs ? </b>Or make your <b>Dream furniture </b>from our talented, well-experienced experts.
          </p></p></h4>
      <h3 className="text-center">
        Materials</h3>
  
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
      <h3 className="text-center">
        Fabrics</h3>
        <div className="card-group">
        <div className="card">
        <div class="clearfix">
  <img src= {fabricss} class="col-md-6 float-md-end mb-3 ms-md-3" alt="..."/>
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
  <h5 className="text-center"><b><a href="#">Contact us for more Details.</a></b></h5>

</div>
</div>
</div>
      <br />
      <br />
      <br />
      <br />

      <h3 className="text-center">About our Service</h3>
      <div className="container border" style={{marginTop: "50px", width:'90%'}}>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={shop} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>City Furniture Store</h5>
              <p className="textdesign1">City Furniture. A greate unique icon in Furniture.... Kaduwela, SriLanka.... </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={newchair} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Luxury, unique Designing</h5>
              <p className="textdesign1">Our unique, luxury designs make City Furniture a quality brand.....</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={workshop} className="d-block w-100" alt="AAAA" />
            <div className="carousel-caption d-none d-md-block">
              <h5>City Furniture Work-shop</h5>
              <p className="textdesign1">We have around 40 human resources which are experts in making furniture... Moratuwa, SriLanka.....</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div>
    <br/>
    <br/>
    </div>

  )

}
export default CustomizedOrder