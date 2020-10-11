import React from 'react'
import { Link } from 'react-router-dom'
import vedio from '../vedio/Lanna Harvest.mp4'
import Img01 from '../img/images/fruit002.jpg'
import Img02 from '../img/images/lannahavest_mango02.jpg'
import Img03 from '../img/images/fruit005.jpg'
import Img04 from '../img/images/company.jpg'
import Img05 from '../img/images/fruit.jpg'
export default function Title() {
    return (
            <section>
                <div className="title-grid">
                    <div class="title-slider" >

                        <video className="title-vedio"  src={vedio} autoPlay muted  />
                        {/* <img src={Img01} /> */}
                        <div className="title">
                            <h3>
                                Lanna Harvest<br />
                                <p>บริษัทส่งออกผลไม้ไทย 100%</p>
                            </h3>
                        </div>
                    </div>
                    <div className="title-content">
                    <div className="pointer w3-hover-opacity"  >
                        <Link  to="/company">
                            <img  src={Img04} />
                            <h3 className="title-text">Company </h3>
                            
                        </Link>
                    </div>

                    <div  className="pointer w3-hover-opacity">
                        <Link  to="/business">
                            <img src={Img03} className="title-hover" />
                            <h3 className="title-text ">Business</h3>
                        </Link>
                    </div>

                    <div className="pointer w3-hover-opacity">
                        <Link  to="/product">
                            <img src={Img02}  className="title-hover" />
                            <h3 className="title-text">Product</h3>
                        </Link>
                    </div>

                    <div className="pointer w3-hover-opacity">
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
