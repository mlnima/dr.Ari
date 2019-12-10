import React from 'react';
import {Route, Switch} from "react-router";
import HomePage from "./Pages/HomePage/HomePage";
import Contact from "./Pages/Contact/Contact";


const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/Kontakt' component={Contact}/>

        </Switch>
    );
};

export default Router;