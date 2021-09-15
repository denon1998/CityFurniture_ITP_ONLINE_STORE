import React from 'react';
import Itemcard from '../Shopping-cart/ItemCard';
import data from '../Shopping-cart/data';

const Home = () => {


    return (
        <div>
            <h1 className="text-center mt-3">All Items</h1>
            <a href="/customized">Customize order</a>
            <section className="py-4 container">
                <div className="row justify-content-center">
                    {data.productData.map((item, index) => {
                        return (
                            <Itemcard 
                                img={item.img}
                                title={item.title}
                                desc={item.desc}
                                price={item.price}
                                item={item}
                                key={index} />
                        )
                    })}
                </div>
            </section>
        </div>
    );
}

export default Home;