import React from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import "./styles.scss"
import {sliderItems} from "../../dummyData"
import Item from './item/Item';
const Featured = () => {
  var settings = {
    dots:true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
  };
  // console.log(dots)
  return (
    <div className='featured__container' >
     <div className="featured__wrapper">
     <Slider {...settings} className="slider" >
       {
         sliderItems.map((item)=>(
           <Item item={item} 
             key={item.id}
             />
         ))}
    </Slider>
     </div>
    </div>
  )
}

export default Featured