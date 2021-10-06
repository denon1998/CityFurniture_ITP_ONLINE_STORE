import React from 'react';
import { useCart } from "react-use-cart";

const officeItemCard = (props) => {
    const { addItem } = useCart();
    return (
        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
            <div class="card p-0 overflow-hidden h-100 shadow" >
                <img src={props.img} class="card-img-top img-fluid" />

                <div class="card-body">
                    <h5 class="card-title">{props.Product}</h5>
                    <p class="card-text">{props.Description}</p>
                    <h6 class="card-text">{props.priceNumber}</h6>
                    <ul>
                        <li class="card-text">{props.ModelNumber}</li>
                        <br></br>
                        <li class="card-text">{props.ItemLength}</li>
                        <br></br>
                        <li class="card-text">{props.ItemHeight}</li>
                        <br></br>
                        <li class="card-text">{props.ItemWidth}</li>
                        <br></br>
                        <li class="card-text">{props.Materials}</li>
                        <br></br>
                        <li class="card-text">{props.Colours}</li>
                        <br></br>
                        <li class="card-text">{props.Components}</li>
                        <br></br>
                        <li class="card-text">{props.StockAvailability}</li>
                        <br></br>
                    </ul>

                    <button className="btn btn-success" onClick={() => {
                        // props.price = props.priceNumber;

                        addItem(props)

                        window.location = '/cart'
                    }}> Add To Cart </button>
                    &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;
                    <br></br>
                    <button type="button" class="btn btn-primary">Buy Now</button>

                </div>
            </div>
        </div>
    );
};

export default officeItemCard;
