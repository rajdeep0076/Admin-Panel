import React from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Navbar from './components/Piechart';
import {Redirect, Route, Switch } from "react-router-dom"
import Catagories from './Pages/Catagories/Catagories';
import Add from './Pages/Catagories/Add';
import Item from './Pages/Catagories/Item';

 
function App(){
 
        return (
          <div>
            <Navbar />
            <div class="container-fluid" id="main">
              <div class="row row-offcanvas row-offcanvas-left">
                <Sidebar />
                <Switch>
                  <Route path="/catagories/list" exact>
                    <Catagories />
                  </Route>
                  <Route path="/" exact>
                    <Dashboard />
                  </Route>
                  <Route path="/catagories/add" exact>
                    <Redirect to="/catagories/list"/>
                  </Route>
                  <Route path="/item" exact>
                    <Item />
                  </Route>
                </Switch>
              </div>
            </div>
          </div>
        );
    }
  
export default App