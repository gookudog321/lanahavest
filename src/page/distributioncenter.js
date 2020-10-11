import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class distributioncenter extends Component {
    render() {
        return (
            <>
             <div className="banner">
                  <img className="w3-grayscale-min" src="https://source.unsplash.com/random" alt="Company" />
                  <h3 className="banner-title">Buisness</h3>
                </div>
              <div className="banner-navigation">
                  <ul>
                      <li><Link to='/buisness'>Trading</Link></li>
                      <li><Link to='/buisness/commerce'>commerce</Link></li>
                      <li className='link-active'><Link to='/buisness/distributionCenter'>distribution Center</Link></li>
                      <li><Link to='/buisness/ecommerce'>E-Commerce</Link></li>
                  </ul>
              </div>
              <section className="section container">
                    distribution
                    <ul>
                        <li>company Introduction</li>
                        <li>history</li>
                        <li>organization</li>
                        <li>location</li>
                    </ul>
                </section>      
            </>
        )
    }
}
