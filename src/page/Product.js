import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Product extends Component {
    render() {

        return (
            <>
            <div className="banner">
                <img className="w3-grayscale-min" src="https://source.unsplash.com/random" alt="Company" />
                <h3 className="banner-title">Product</h3>
            </div>
        <div className="banner-navigation">
            <ul>
                      <li className="link-active"><Link to='/product'>Product</Link></li>
            </ul>
        </div>
                <section className="section container">
                ข้อมูล สินค้า 
                    <ul>
                        <li className="link-active">trading</li>
                    </ul>
                </section>
            </>
        )
    }
}
