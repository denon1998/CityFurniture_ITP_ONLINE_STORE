import React from 'react';
import v4 from '../images/v4.jpg';
import c1 from '../images/c1.png';
import livingroomfurniture from '../images/livingroomfurniture.jpg';

const Offers = (props) => {
  return (
    <div className="container-sm">

      <h1 className="text-center "><b>Offers And Best Deals</b></h1>
      <br />
      <h3 className="text-center " >
        <p className="fstyle">
          <p className="text-success ">
            <b>Find CITY FURNITURE best deals </b>and sale products with attractive <b>discounts</b>
          </p></p></h3>       
  
        <div className="container border" style={{ width:"70%", height:"70%"}} >
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      
      <img class="d-block w-100" src="https://cupcakesandcashmere.com/.image/t_share/MTcyMDYwODg1MzY2MzUxMDEz/living-room-gif.gif" style={{ width:"70%", height:"10%"}}/>
    </div>
  </div>

</div>
</div>
<br></br> <br></br> <br></br> <br></br>

      <div className="card-group">
        <div className="card">
          <img src={v4} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">
              <p className="textdesign2"><b>Verandar Chair</b></p></h5>
              <p className="text-danger ">Sale</p>
            <p className="card-text">Discount Amount : Rs.1250.00</p>
            <p className="card-text">Discount As A Percentage : 10%</p>
            <p className="card-text">Previos Price : Rs.12,500.00</p>
            <p className="card-text">New Price : Rs.11,250.00</p> 
          </div>
          <div className="card-footer">
            <small className="text-muted">Valid till 31/10/2021</small>
            &nbsp; &nbsp;&nbsp; <br></br>
            <button className="btn btn-success" onClick={() => {
                   
                        window.location = '/cart'
                    }}> Add to Cart </button>
                    &nbsp;  &nbsp;  &nbsp; &nbsp; 
                    <br></br> <br></br>
                    <button type="button" class="btn btn-primary">Buy Now</button>
          </div>
        </div>
        <div className="card">
          <img src={livingroomfurniture} className="card-img-top" />
          <div className="card-body"><br></br><br></br>
            <h5 className="card-title"> 
            <p className="textdesign2"><b>Linen Sofa</b></p></h5>
            <p className="text-danger ">Seasonal Offer</p>            
            <p className="card-text">Discount Amount : Rs.21,000.00</p>
            <p className="card-text">Discount As A Percentage : 12%</p>
            <p className="card-text">Previos Price : Rs.175,000.00</p>
            <p className="card-text">New Price : Rs.154,000.00</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Valid till 31/12/2021</small>
            &nbsp; &nbsp;&nbsp; <br></br>
            <button className="btn btn-success" onClick={() => {
                   
                        window.location = '/cart'
                    }}> Add to Cart </button>
                    &nbsp;  &nbsp;  &nbsp; &nbsp; 
                    <br></br> <br></br>
                    <button type="button" class="btn btn-primary">Buy Now</button>          
          </div>
        </div>
        <div className="card">
          <img src={c1} className="card-img-top" />
          <div className="card-body">
          <br></br><br></br><br></br><br></br><br></br>
            <h5 className="card-title"><p className="textdesign2"><b>Coffee Table</b></p>  </h5>
            <p className="text-danger ">Price Drop</p>            
            <p className="card-text">Discount Amount : Rs.6575.00</p>
            <p className="card-text">Discount As A Percentage : 20%</p>
            <p className="card-text">Previos Price : Rs.32,875.00</p>
            <p className="card-text">New Price : Rs.26,300.00</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Valid till 30/11/2021</small>
            &nbsp; &nbsp;&nbsp; <br></br>
            <button className="btn btn-success" onClick={() => {
                   
                        window.location = '/cart'
                    }}> Add to Cart </button>
                    &nbsp;  &nbsp;  &nbsp; &nbsp; 
                    <br></br> <br></br>
                    <button type="button" class="btn btn-primary">Buy Now</button>
          </div>
          
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
     
<br></br> <br></br> <br></br> <br></br>
      
    <br/>
    <br/>

     <br/>
    <br/>

    </div>
   
  )

}
export default Offers