import React from 'react';
import './App.css';
import NavBar from './component/NavBar'
import Title from './component/Title'
import Company from './page/Company'
import Buisness from './page/Buisness'
import Product from './page/Product'
import Fruit from './page/Fruit'
import Community from './page/Community'
import Home from './page/Home'
import Footer from './component/Footer'

import {Route, Switch} from 'react-router-dom'
import ScrollTop from "react-scrolltop-button";
function App() {
  return (
    <>
      <NavBar />
      <ScrollTop
          text="Top"
          distance={100}
          breakpoint={768}
          style={{ 
            backgroundColor: "#FFFFFF" 
                }}
          className="scroll-your-role ScrollTop"
          speed={600}
          target={75}
      />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route  exact path="/company" component={Company} />
      <Route exact  path="/buisness" component={Buisness} />
      <Route exact path="/product" component={Product} />
      <Route exact path="/fruit" component={Fruit} />
      <Route exact path="/community" component={Community} />
      {/* <Route component={Error} /> */}
      </Switch>
      <Footer />
    </>
  );
}

export default App;
