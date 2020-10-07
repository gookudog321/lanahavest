import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/logo/lannaharvest.png'
export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer-grid container">
                    <div>
                        <Link to="/"><img className="footer-logo" src={logo} /></Link>
                    </div>
                    <div className="footer-list">
                        <ul>
                            <li>Company Name</li>
                            <li>Company Address</li>
                            <li>COPYRIGHT ---</li>
                        </ul>
                    </div>
                </div>
            </footer>
        )
    }
}
