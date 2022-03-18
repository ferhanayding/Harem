import { useState } from "react"
import "./styles.scss"
import {Link } from "react-router-dom"
const Item = ({item}) => {
  
const {img_first,img_second,img_third,img_fourth,title,desc,link} = item

const linkHandleChange = (link) =>{
switch (link) {

  case "perde":
    return "/perdeler"
    case "aksesuar":
      return "/aksesuarlar"
      case "yatak":
        return "/yatagortuleri"
  default:
    return "/"
}
}
  return (
    <div className="slider__item">
    <div className='slider__item_left' >    
      <div className="slider__img_firstContainer">
    <img className='featured__img_first' src={img_first} alt="" />
      </div>
      <div className="slider_img_secondContainer">
  <img className='featured___img_second'  src={img_second} alt="" />
      </div>
      <div className="slider_img_thirdContainer">
  <img className='featured___img_third'  src={img_third} alt="" />
      </div>
   
    </div>
    <div className="slider__item_right">
      <div className="slider__item_rightWrapper">
      {/* <h1>{title}</h1> */}
      <div className="slider__item_desc" >
      
      <p>{desc}</p>
      </div>
       <button>
      <Link to={linkHandleChange(link)} >

         {link === "perde" ? "perde" : link === "yatak" ? "yatak" : "aksesuar"} 
         </Link>
        </button>
    

      </div>
    </div>
  </div>
  )
}

export default Item