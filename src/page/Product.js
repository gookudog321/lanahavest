import React, { Component } from 'react'
import Banner from '../component/Banner'
export default class Product extends Component {
    render() {
        const navigation=[
            "trading"
        ]
        return (
            <>
                <Banner  title="product" navigation={navigation}/>  
                <section className="section container">
                ข้อมูล สินค้า 
                    <ul>
                        <li>trading</li>
                    </ul>
                </section>
            </>
        )
    }
}
