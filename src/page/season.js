import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class season extends Component {
    render() {
        return (
            <>
                <div className="banner">
                  <img className="w3-grayscale-min" src="https://source.unsplash.com/random" alt="Company" />
                  <h3 className="banner-title">Fruit Sent</h3>
                </div>
              <div className="banner-navigation">
                  <ul>
                      <li ><Link to='/fruit'>fruit Nutrition Table</Link></li>
                      <li className='link-active'><Link to='/fruit/season'>season of Imported fruits</Link></li>
                  </ul>
              </div>
                <section className="section container">
                ข้อมูล สินค้าที่ส่ง  Season
                    <ul>
                        <li>fruit Nutrition Table</li>
                        <li>season of Imported fruits</li>
                    </ul>
                </section>
            </>
        )
    }
}
