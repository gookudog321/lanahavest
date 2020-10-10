import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Slider from "react-slick";
export default class portfolio extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };
        const ImgBrand = [
            "https://picsum.photos/201/199",
            "https://picsum.photos/202/198",
            "https://picsum.photos/203/197",
            "https://picsum.photos/204/196",
            "https://picsum.photos/205/195",
            "https://picsum.photos/206/196",
            "https://picsum.photos/207/193"
        ];
        const lists = ImgBrand.map((image)=>
            <div>
                <h3><Link to="/"><img class="portfolio-img" src={image} /></Link></h3>
            </div>
        )
        return (
            <section className='portfolio '>
               <div className="container">
               <h3>BRAND PORTFOLIO</h3>
                <p className="porfolio-p" />

                    <Slider {...settings}>
                        {lists}
                    </Slider>

               </div>
            </section>
        )
    }
}
