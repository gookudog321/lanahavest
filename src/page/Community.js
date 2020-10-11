import React, { Component } from 'react'
import {Link} from'react-router-dom'
export default class Community extends Component {
    render() {
        return (
            <>
                <div className="banner">
                  <img className="w3-grayscale-min" src="https://source.unsplash.com/random" alt="Company" />
                  <h3 className="banner-title">Community</h3>
                </div>
              <div className="banner-navigation">
                  <ul>
                      <li className="link-active"><Link to='/community'>notice</Link></li>
                      <li ><Link to='/community/UestionaAswer'>uestion & answer</Link></li>
                  </ul>
              </div>
                <section className="section container">
                ข้อมูล สินค้าที่ส่ง  Community
                    <ul>
                        <li>fruit Nutrition Table</li>
                        <li>season of Imported fruits</li>
                    </ul>
                </section>
            </>
        )
    }
}
