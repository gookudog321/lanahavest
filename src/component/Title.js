import React from 'react'
import { Link } from 'react-router-dom'
import Img01 from '../img/images/fruit002.jpg'

export default function Title() {
    return (
            <section>
                <div className="title-grid">
                    <div class="title-slider" >
                        <img src={Img01} />
                        <div className="title">
                            <h3>
                                Lanaharvest<br />
                                <p>บริษัทส่งออกผลไม้ไทย 100%</p>
                            </h3>
                        </div>
                    </div>
                    <div className="title-content">
                    <div className="pointer" >
                        <Link  to="/company">
                            <img  src="https://picsum.photos/501/500" />
                            <h3 className="title-text">Company </h3>
                            
                        </Link>
                    </div>

                    <div  className="pointer">
                        <Link  to="/business">
                            <img src="https://picsum.photos/501/503" className="title-hover" />
                            <h3 className="title-text">Business</h3>
                        </Link>
                    </div>

                    <div className="pointer">
                        <Link  to="/product">
                            <img src="https://picsum.photos/501/499" className="title-hover" />
                            <h3 className="title-text">Product</h3>
                        </Link>
                    </div>

                    <div className="pointer">
                        <Link  to="/fruit">
                            <img src="https://picsum.photos/499/502" className="title-hover" />
                            <h3 className="title-text">FRUIT SENSE</h3>
                        </Link>
                    </div>

                    </div>
                </div>
            </section>
    )
}
