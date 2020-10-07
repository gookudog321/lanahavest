import React, { Component } from 'react'
import Banner from '../component/Banner'
export default class Fruit extends Component {
    render() {
        const navigation=[
            "fruit Nutrition Table",
            "season of Imported fruits"
        ]
        return (
            <>
                <Banner  title="fruit Sense" navigation={navigation}/>
                <section className="section container">
                ข้อมูล สินค้าที่ส่ง 
                    <ul>
                        <li>fruit Nutrition Table</li>
                        <li>season of Imported fruits</li>
                    </ul>
                </section>
            </>
        )
    }
}
