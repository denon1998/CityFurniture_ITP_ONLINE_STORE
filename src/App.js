import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component"
import AdminDashboard from "./components/admin-dashboard.component"

import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import userList from "./components/user-list.component";
import EditUser from "./components/edit-user.components";
import ExercisesList from "./components/exercises-list.component";
import main from "./components/main.component";
import cuslog from "./components/cuslog.component";


import Home from './components/client/home/pages/Home';
import Products from './components/client/home/pages/Products';
import Offers from './components/client/home/pages/Offers';
import SignUp from './components/client/home/pages/SignUp';


import { CartProvider } from "react-use-cart";

import CreateOrderPost from './components/client/home/odermgt/CreateOrderPost';
import CustomizedOrder from './components/client/home/odermgt/CustomizedOrder';
import Cart from './components/client/home/cart/Cart';

import HomeClientProduct from './components/client/home/products/HomeClientProduct';

import Createfeedback from "./components/client/home/contactus/feedback/create-feedback";
import Createcontact from "./components/client/home/contactus/contact/create-contact";
import CreateFAQs from "./components/client/home/contactus/FAQs/create-FAQs";
import Createsuggestion from "./components/client/home/contactus/suggestion/create-suggestion";


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
                    exact component={main}

                /> <
                    Route path="/cuslog"
                    exact component={cuslog}

                /> <
                    Route path="/admindashboard"
                    exact component={AdminDashboard}
                /> <
                    Route path="/edit/:id"
                    component={EditExercise}
                /> <
                    Route path="/main"
                    component={ExercisesList}
                /> <
                    Route path="/create"
                    component={CreateExercise}
                /> <
                    Route path="/user/add/"
                    component={CreateUser}
                /> <
                    Route path="/users/"
                    component={userList}
                />  <
                    Route path="/user/Edit/:id"
                    component={EditUser}
                />


                <Route path='/home' exact component={Home} />
                <Route path='/products' exact component={Products} />
                <Route path='/offers' exact component={Offers} />
                <Route path='/SignUp' exact component={SignUp} />



                <Route path="/cart" exact component={Cart}></Route>
                <Route path="/products" exact component={HomeClientProduct}></Route>
                <Route path="/customized" exact component={CustomizedOrder}></Route>
                <Route path="/order/add" exact component={CreateOrderPost}></Route>

                
                <Route path="/feedback/create" component={Createfeedback} />
                <Route path = "/contact/create" component = { Createcontact }/>
                <Route path = "/FAQs/create" component = { CreateFAQs }/>
                <Route path = "/suggestion/create" component = { Createsuggestion }/>
      

            </
            div >
        </CartProvider>
    </Router>
    );
}

export default App;