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
import History from './page/History' 
import {Route, Switch} from 'react-router-dom'
import Organization from './page/organization'
import Location from './page/location'
import Trading from './page/trading'
import ScrollTop from "react-scrolltop-button";
import Commerce from './page/commerce'
import DistributionCenter from './page/distributioncenter'
import Ecommerce from './page/ecommerce'
import Season from'./page/season'
import UestionaAswer from './page/UestionaAswer'

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
      <Route exact path="/lanahavest" component={Home} />
      <Route  exact path="/company" component={Company} />
      <Route exact  path="/buisness" component={Buisness} />
      <Route exact path="/product" component={Product} />
      <Route exact path="/fruit" component={Fruit} />
      <Route exact path="/community" component={Community} />
      <Route exact path="/company/history/" component={History} />
      <Route exact path="/company/organization" component={Organization} />
      <Route exact path="/company/location" component={Location} />

      <Route exact path="/buisness/trading" component={Trading} />
      <Route exact path="/buisness/commerce" component={Commerce} />
      <Route exact path="/buisness/distributionCenter" component={DistributionCenter} />
      <Route exact path="/buisness/ecommerce" component={Ecommerce} />


      <Route exact path="/fruit/season" component={Season} />

      <Route exact path="/community/UestionaAswer" component={UestionaAswer} />
      {/* <Route component={Error} /> */}
      </Switch>
      <Footer />  
    </>
  );
}

export default App;
