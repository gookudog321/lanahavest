import React from 'react'
import {Link} from 'react-router-dom';
import '../App.css'
export default function Banner({title,navigation}) {
    const lists = navigation.map((list)=>
    <Link to={title+'/'+list}><li>{list}</li></Link>
    )
    return (
        <>
        <div className="banner">
            <img className="w3-grayscale-min" src="https://source.unsplash.com/random" alt={title} />
            <h3 className="banner-title">{title}</h3>
        </div>
        <div className="banner-navigation">
            <ul>
                {lists}
            </ul>
        </div>
        </>
    )
}
