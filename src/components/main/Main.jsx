import { useState } from "react"
import "./main.scss"
import {Link} from "react-router-dom"
import {CategoryItem} from "../../dummyData"
const Main = () => {
  
 return(
  <div className="main__container">
    <div className="main__container_img" >
    {/* <img src="https://img.freepik.com/free-photo/white-concrete_74190-156.jpg?t=st=1647290829~exp=1647291429~hmac=b6458f225a41d98ecec1c36d6532ad86683ae6e3af3aad9206b6d5bf99b49043&w=1060" alt="" /> */}
    <img src="https://img.freepik.com/free-photo/beige-paintbrush-stroke-textured-background_53876-129531.jpg?t=st=1647286923~exp=1647287523~hmac=68af07fc81bd1475b61e242d83a7305e914ecfb288ee11aeead3b10955238913&w=1060" alt="" />
    </div>
    {/* <div className="main__opacity" ></div> */}
    <div className="main__title_container" >
      <h1>Kategoriler</h1>
      {/* <img src="/images/png/gül.png" alt="" /> */}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, harum.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, quisquam.
      </p>
    </div>
    <div className="main__wrapper">
      { CategoryItem.map(item=>(
       

        <Link to={"/perdeler"} className="main__item" key={item.id} >
        {/* <div className="main__item_wrapper"> */}
        
        <div className="item__img_container" >
          <img src={item.img} alt="" />
        </div>
        <div className="item__desc_container">
          <span>{item.desc}</span>

        {/* </div> */}
      </div>
        
        </Link>
      
        
        ))
      }
    </div>
</div>

 )
}

export default Main
