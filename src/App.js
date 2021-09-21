import React from 'react';
import './App.scss';
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import AppRouter from "./components/AppRouter";
import Cart from "./pages/Cart/Cart";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path='/cart' exact component={Cart}/>
                    <Route component={AppRouter}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
