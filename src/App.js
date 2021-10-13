import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component";

import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import ExercisesList from "./components/exercises-list.component";
import cuslog from "./components/cuslog.component";


import Home from './components/client/home/pages/Home';
import Products from './components/client/home/pages/Products';
import Offers from './components/client/home/pages/Offers';


import Footer from './components/client/home/Footer';

import OfficeFurniture from './components/client/home/pages/OfficeFurniture';


import HomeClientProduct from './components/client/home/products/HomeClientProduct';
import officeHome from './components/client/home/officeFurniture/officeHome';
import OffersHome from './components/client/home/pages/OffersHome';


import { CartProvider } from "react-use-cart";

import CreateOrderPost from './components/client/home/odermgt/CreateOrderPost';
import CustomizedOrder from './components/client/home/odermgt/CustomizedOrder';
import Cart from './components/client/home/cart/Cart';


 // Kithmini 
import Createfeedback from "./components/client/home/contactus/feedback/create-feedback";
import Createcontact from "./components/client/home/contactus/contact/create-contact";
import CreateFAQs from "./components/client/home/contactus/FAQs/create-FAQs";
import Createsuggestion from "./components/client/home/contactus/suggestion/create-suggestion";
//import Rating from './components/client/home/contactus/rate/Ratings';


//import Footer from './components/client/home/Footer';


import EditPosts from './components/client/home/payment/AdminClientUpdateCard';
import payHome from './components/client/home/payment/payHomeClient';
import NavBar from './components/client/home/payment/AdminNavbar';


import CardPaySuccess from './components/client/home/payment/CardPaySuccessClient';
import payPal from './components/client/home/payment/payPalClient';
import PalUpdate from './components/client/home/payment/PalUpdateAdminClient';
import paypalSuccess from './components/client/home/payment/paypalSuccessClient';
import CardPayClient from './components/client/home/payment/CardPayClient';


function App() {

    return (<
        Router >
        <CartProvider>
        <Navbar />
            <

                div className="container" >
              




                <br />
                <
                    Route path="/"
                    exact component={cuslog}

                /> <
                    Route path="/edit/:id"
                    component={EditExercise}
                /> <
                    Route path="/main"
                    component={ExercisesList}
                /> <
                    Route path="/create"
                    component={CreateExercise}
                /> 


                <Route path='/home' exact component={Home} />
                <Route path='/products' exact component={Products} />
                <Route path='/offers' exact component={Offers} />
                <Route path='/officeFurniture' exact component={OfficeFurniture} />
                <Route path='/OffersHome' exact component={OffersHome} />
                
                <Route path="/products" exact component={HomeClientProduct}></Route>
                <Route path="/officeFurniture" exact component={officeHome}></Route>



                <Route path="/cart" exact component={Cart}></Route>
                <Route path="/customized" exact component={CustomizedOrder}></Route>
                <Route path="/order/add" exact component={CreateOrderPost}></Route>

               
                <Route path = "/feedback/create" component={Createfeedback} />
                <Route path = "/contact/create" component = { Createcontact }/>
                <Route path = "/FAQs/create" component = { CreateFAQs }/>
                <Route path = "/suggestion/create" component = { Createsuggestion }/>
                  
        



                <Route path="/payHome" component={payHome}></Route>
                <Route path ="/edit/:id"  component={EditPosts}></Route>
                <Route path="/CardPay" component={CardPayClient}></Route>
                <Route path = "/success" component={CardPaySuccess}></Route>
                <Route path = "/addpaypal" component={payPal}></Route>
                <Route path = "/palUpdate/:id" component={PalUpdate}></Route>
                <Route path = "/palSuccess" component={paypalSuccess}></Route>
            


            </div >
            <Footer />        

        </CartProvider>
    </Router>
    );
}

export default App;