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
import OfficeFurniture from './components/client/home/pages/OfficeFurniture';

import HomeClientProduct from './components/client/home/products/HomeClientProduct';
import officeHome from './components/client/home/officeFurniture/officeHome';


import { CartProvider } from "react-use-cart";

import CreateOrderPost from './components/client/home/odermgt/CreateOrderPost';
import CustomizedOrder from './components/client/home/odermgt/CustomizedOrder';
import Cart from './components/client/home/cart/Cart';
 

import Createfeedback from "./components/client/home/contactus/feedback/create-feedback";
import Createcontact from "./components/client/home/contactus/contact/create-contact";
import CreateFAQs from "./components/client/home/contactus/FAQs/create-FAQs";
import Createsuggestion from "./components/client/home/contactus/suggestion/create-suggestion";
  
import EditPosts from './components/client/home/payment/AdminClientUpdateCard';
import CardPayHomeAdmin from './components/client/home/payment/CardPayHomeAdmin';
import payHome from './components/client/home/payment/payHomeClient';
import CardPay from './components/client/home/payment/CardPayClient';
import NavBar from './components/client/home/payment/AdminNavbar';

import PostDetails from './components/client/home/payment/CardDetailsAdmin';
import CardPaySuccess from './components/client/home/payment/CardPaySuccessClient';
import payPal from './components/client/home/payment/payPalClient';
import PaypalDisplay from './components/client/home/payment/PaypalDisplayAdmin';
import PayDetails from './components/client/home/payment/PayDetailsAdmin';
import PalUpdate from './components/client/home/payment/PalUpdateAdminClient';
import paypalSuccess from './components/client/home/payment/paypalSuccessClient';
import mailer from './components/client/home/payment/AdminMailer';


function App() {

    return (<
        Router >
        <CartProvider>
            <
                div className="container" >
                <Navbar />
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

                <Route path="/products" exact component={HomeClientProduct}></Route>
                <Route path="/officeFurniture" exact component={officeHome}></Route>



                <Route path="/cart" exact component={Cart}></Route>
                <Route path="/customized" exact component={CustomizedOrder}></Route>
                <Route path="/order/add" exact component={CreateOrderPost}></Route>

                
                <Route path="/feedback/create" component={Createfeedback} />
                <Route path = "/contact/create" component = { Createcontact }/>
                <Route path = "/FAQs/create" component = { CreateFAQs }/>
                <Route path = "/suggestion/create" component = { Createsuggestion }/>
      




                <Route path="/payHome" component={payHome}></Route>
                <Route path ="/edit/:id"  component={EditPosts}></Route>
                <Route path ="/post/:id"  component={PostDetails}></Route>
                <Route path="/CardPay" component={CardPay}></Route>
                <Route path = "/success" component={CardPaySuccess}></Route>
                <Route path = "/addpaypal" component={payPal}></Route>
                <Route path = "/payDisplay" component={PaypalDisplay}></Route>
                <Route path = "/palEdit/:id" component={PayDetails}></Route>
                <Route path = "/palUpdate/:id" component={PalUpdate}></Route>
                <Route path = "/palSuccess" component={paypalSuccess}></Route>
                <Route path = "/mail" component={mailer}></Route>

            </
            div >
        </CartProvider>
    </Router>
    );
}

export default App;