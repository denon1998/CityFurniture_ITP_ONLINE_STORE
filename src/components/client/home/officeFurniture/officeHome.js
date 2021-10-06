import React from 'react';
import officeItemCard from './officeItemCard';
import officedata from "./officeData";
import './officeHome.css';

const officeHome = () => {
    console.warn(officedata.productData)

    return (
        <div>
            <h1 className="text-center mt-3">OFFICE FURNITURE</h1>
                <section className="py-4 container">
                    <div className="row justify-content-center">
                        {officedata.productData.map((item, index) => {
                            return(
                                <officeItemCard id={item.id} priceNumber={item.priceNumber} itemTotal={item.price} img={item.img} Product={item.Product} Description={item.Description} price={item.price} ModelNumber={item.ModelNumber} ItemLength={item.ItemLength} ItemHeight={item.ItemHeight} ItemWidth={item.ItemWidth} Materials={item.Materials} Colours={item.Colours} Components={item.Components} StockAvailability={item.StockAvailability} key={index}/>
                            )
                        })}
                        
                    </div>
            </section> 
        </div>      
    );
  };
  
  export default officeHome;