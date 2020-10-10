import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Product extends Component {
    render() {
        return (
            <section className="product">
                <h3>Us Product</h3>
                <p className="p1" />
                <div className="product-grid container">
                        {/* image */}
                        <div>
                            <img  src="https://picsum.photos/500/500" />
                        </div>
                    {/* Text */}
                        <div>
                            <p> Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced. Yet uncommonly his ten who diminution astonished. Demesne new manners savings staying had. Under folly balls death own point now men. Match way these she avoid see death. She whose drift their fat off. </p>
                        </div>
                    {/* Text */}
                        <div>
                            <p>  Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced. Yet uncommonly his ten who diminution astonished. Demesne new manners savings staying had. Under folly balls death own point now men. Match way these she avoid see death. She whose drift their fat off. </p>
                        </div>
                    {/* Image */}
                        <div>
                            <img  src="https://picsum.photos/500/500" />
                        </div>
                    {/* image */}
                        <div>
                            <img  src="https://picsum.photos/500/500" />
                        </div>
                    {/* Text */}
                        <div>
                            <p>  Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced. Yet uncommonly his ten who diminution astonished. Demesne new manners savings staying had. Under folly balls death own point now men. Match way these she avoid see death. She whose drift their fat off. </p>
                        </div>
                </div>
               <Link to="/product"><button className="product-button">Real More</button></Link>
            </section>
        )
    }
}
