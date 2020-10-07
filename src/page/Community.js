import React, { Component } from 'react'
import Banner from '../component/Banner'
export default class Community extends Component {
    render() {
        const navigation=[
            "notice",
            "uestion & answer",
        ]
        return (
            <>
            <Banner  title="community" navigation={navigation} />
            <section className="section container">
                ข้อมูล บริษัทที่เกี่ยวข้อง 
                    <ul>
                        <li>notice</li>
                        <li>uestion & answer</li>
                    </ul>
                </section>
            </>
        )
    }
}
