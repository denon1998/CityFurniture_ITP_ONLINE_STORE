import React from 'react';
import ItemCard from './ItemCard';
import data from "./data";
import './HomeClientProducts.css';

const HomeClientProduct = () => {
    console.warn(data.productData)
    return (
        <div>
            <h1 className="text-center mt-3">Home Furniture</h1>
                <section className="py-4 container">
                    <div className="row justify-content-center">
                        {data.productData.map((item, index) => {
                            return(
                                <ItemCard id={item.id} priceNumber={item.priceNumber} itemTotal={item.price} img={item.img} Product={item.Product} Description={item.Description} price={item.price} ModelNumber={item.ModelNumber} ItemLength={item.ItemLength} ItemHeight={item.ItemHeight} ItemWidth={item.ItemWidth} Materials={item.Materials} Colours={item.Colours} Components={item.Components} StockAvailability={item.StockAvailability} key={index}/>
                            )
                        })}
                       
                    </div>
            </section> 
        </div>   
          
    );
  };
  
  export default HomeClientProduct;