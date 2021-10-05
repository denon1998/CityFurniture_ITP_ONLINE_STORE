import React from 'react';
import { useCart } from 'react-use-cart';
import shopping from '../images/shopping.png'
import phone from '../images/phone.png'
import './mystyle.css'

const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    if (isEmpty) return <h1 className="text-center">Your Cart is Empty</h1>

    return (
        <div>
            <section className="py-4 container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <h3 className="text">
                            <div className="text-center">
                            <h2 className="text-center clientlet" >My Shopping Cart </h2>
                            <img src="https://cdn.dribbble.com/users/146773/screenshots/4228811/dribble_cart.gif" style={{heigh:"15%", width:"15%"}} class="rounded-circle"/>
                            
                            </div>
                            </h3>
                            
                     
                        <h5 className="clientlet"> Product Types:  ({totalUniqueItems})Total Items: ({totalItems})</h5>
                    
                        <table className="table table-light table-hover m-0">
                            <tbody>
                                {items.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>
                                                <img src={item.img} style={{ height: '6rem' }} />
                                            </td>
                                            <td>{item.title}</td>
                                            <td>{item.price}</td>
                                            <td>Quantity ({item.quantity})</td>
                                            <td>
                                                <button className="btn btn-primary m-2"
                                                    onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>
                                                    -</button>
                                                <button className="btn btn-primary m-2"
                                                    onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                                                <button className="btn btn-danger ms-2"
                                                    onClick={() => removeItem(item.id)}>Remove Item</button>
                                            </td>
                                        </tr>)
                                })}
                            </tbody>
                        </table>
                    </div>
                    
                    <div className="col-auto ms-auto">
                    <br/>
                    <br/>
                        <h2 className="clientlet">Total Price: Rs.{cartTotal}</h2>
                    </div>
                    <br />
                    <div className="col-auto">
                    <br/>
                    <br/>
                        <button className="btn btn-danger m-2"
                            onClick={() => emptyCart()}>Clear Cart</button>
                        <br />
                        <button className="btn btn-primary m-2"><a href="/order/add" style={{ textDecoration: 'none', color: 'white' }}>Proceed to Checkout</a></button>
                    </div>
                </div>
            </section>
            <br/>
            <br/>
            <br/>
            <div class="ibox">
                <div class="ibox-title text-center ">
                <img src={phone} />
                    <h5 className="clientlet">Support</h5>
                </div>
                <div class="ibox-content text-center">
                    <h3  className= "clientlet"><i class="fa fa-phone"></i> +94 100 783 001</h3>
                    <span class="small clientlet">
                        Please contact with us if you have any questions. We are avalible 24h.
                    </span>
                </div>
            </div>


        </div>
    );
};

export default Cart