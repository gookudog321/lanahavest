import React, { Component } from 'react'
import Banner from '../component/Banner'

export default class Company extends React.Component {

    render() {
        const navigation=[
            "company Introduction",
            "history",
            "organization",
            "location"
        ]
        return (
            <>
                <Banner  title="company" navigation={navigation}/>
                <section className="section container">
                    ข้อมูล บริษัท 
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
