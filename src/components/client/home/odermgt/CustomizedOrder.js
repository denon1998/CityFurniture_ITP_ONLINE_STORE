import React from 'react';
import wood from '../images/wood.jpg';
import steel from '../images/steel.jpg';
import plyw from '../images/plyw.jpg';
import shop from '../images/shop.jpg';
import newchair from '../images/newchair.jpg';
import workshop from '../images/workshop.jpg';
import fabricss from '../images/fabricss.jpg';
import map from '../images/map.png'



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
  <h5 className="text-center"><b><a href="#">Contact us for more Details.</a></b></h5>
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

      <h3 className="text-center">About our Service</h3>
      
    <br/>
    <br/>

    <img src={map} style={{width:"100%", height:"30%"}}/>

    <br/>
    <br/>
    </div>

  

  )

}
export default CustomizedOrder