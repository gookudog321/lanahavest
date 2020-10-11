import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/logo/lannaharvest.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import { fas } from "@fortawesome/free-solid-svg-icons";
// import { fab } from "@fortawesome/free-brands-svg-icons";
// import { far } from "@fortawesome/free-regular-svg-icons";
import { faInstagram, faLine, faFacebook } from "@fortawesome/free-brands-svg-icons";
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
                            <li>Lanna Harvest</li>
                            <li>info@lannaharvest.biz</li>
                            <li>ChiangMai</li>
                            <li>COPYRIGHT 2018 SOOIL COMMERCE, INC. ALL RIGHT RESERVnpmED.</li>
                        </ul>
                    </div>
                    <ul className="social">
                        <li><a href="" ><FontAwesomeIcon icon={faLine} /> </a></li>
                        <li><a href="" ><FontAwesomeIcon icon={faFacebook} /></a></li>
                        <li><a href="" ><FontAwesomeIcon icon={faInstagram} /></a></li>
                    </ul>
                </div>
            </footer>
        )
    }
}
