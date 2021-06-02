import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Layout from './Layout';
import BadgeNew from "../pages/BadgeNew";
import Badges from '../pages/Badges';
import NotFound from '../pages/NotFound';
function App(){
    return (
        <BrowserRouter>
            <Layout>
                <div>
                    <Route exact path="/badges" component = {Badges}/>
                    <Route exact path="/badges/new" component = {BadgeNew}/>
                    <Route component = {NotFound}/>
                </div>
            </Layout>
        </BrowserRouter>
    ); 
}

export default App;