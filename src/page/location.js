import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class location extends Component {
    render() {
        return (
            <>
            <div className="banner">
                  <img className="w3-grayscale-min" src="https://source.unsplash.com/random" alt="Company" />
                  <h3 className="banner-title">Company</h3>
              </div>
              <div className="banner-navigation">
                  <ul>
                      <li><Link to='/company'>company Introduction</Link></li>
                      <li><Link to='/company/history'>history</Link></li>
                      <li><Link to='/company/organization'>organization</Link></li>
                      <li className="link-active"><Link to='/company/location'>location</Link></li>
                  </ul>
              </div>   
              <section className="section container">
                    ข้อมูล บริษัท location
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
