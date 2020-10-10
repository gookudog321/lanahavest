import React from 'react'
import { Link } from 'react-router-dom'
import Img01 from '../img/images/fruit002.jpg'
import Img02 from '../img/images/fruit004.jpg'
import Img03 from '../img/images/fruit005.jpg'
import Img04 from '../img/images/company.jpg'
import Img05 from '../img/images/fruit.jpg'
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
                            <img  src={Img04} />
                            <h3 className="title-text">Company </h3>
                            
                        </Link>
                    </div>

                    <div  className="pointer">
                        <Link  to="/business">
                            <img src={Img03} className="title-hover" />
                            <h3 className="title-text">Business</h3>
                        </Link>
                    </div>

                    <div className="pointer">
                        <Link  to="/product">
                            <img src={Img02}  className="title-hover" />
                            <h3 className="title-text">Product</h3>
                        </Link>
                    </div>

                    <div className="pointer">
                        <Link  to="/fruit">
                            <img src={Img05} className="title-hover" />
                            <h3 className="title-text">FRUIT SENSE</h3>
                        </Link>
                    </div>

                    </div>
                </div>
            </section>
    )
}