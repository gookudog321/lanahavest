import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import Banner from '../component/Banner'

export default class Buisness extends Component {
    render() {
        const navigation=[
            "trading",
            "commerce",
            "distribution Center",
            "e-commerce"
        ]
        return (
            <>
                <Banner title="buisness" navigation={navigation} />
                <section className="section container">
                    ข้อมูลธุรกิจ และข้อมูล 
                    <ul>
                        <li>trading</li>
                        <li>commerce</li>
                        <li>distribution Center</li>
                        <li>e-commerce</li>
                    </ul>
                </section>
            </>
        )
    }
}

