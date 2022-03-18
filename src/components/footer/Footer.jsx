import { Link } from "react-router-dom"
import { CategoryItem } from "../../dummyData"
import "./styles.scss"
import {MyLocationOutlined,Call, PhoneIphone, Instagram, Facebook} from '@mui/icons-material';
const Footer = () => {
  const handleCategoryLink =(desc)=>{
    switch (desc) {
      case "Fonlar" :
        return "/perdeler"
      case "tüller":
        return "/tüller"
    case "aksesuarlar":
      return "/aksesuarlar"
      case "jalüzler":
        return "/jaluzler"
        case "yatag örtüleri":
          return "/yatagortuleri"
          case "ekstalar":
            return "/ekstralar"
      default:
        return "/"
    }
  }
  return (
  <div className="footer__container">
    <div className="footer_wrapper">
      <div className="footer__left">
        <div className="footer__left_logo__container">
          <div className="footer__left_logo">
         <img src="/images/png/logo.png" alt="logo" />
          </div>
          <div className="footer__left_desc_container">
            <p className="pc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, laborum?</p>
          </div>
        </div>
      </div>
      <div className="footer__center">
        <div className="footer__center_container">
          <ul>
          {
               CategoryItem.map((item)=>(
                 <li key={item.id} className="pc ">
                   <Link className="footer__center_a underlineHover" to={handleCategoryLink(item.desc)} >
                   {item.desc}
                   
                   </Link>
                   </li>
                 ))
                 }
          </ul>
        </div>
      </div>
      <div className="footer__right">
        <div className="footer__right_container">

            
              <div className="footer__right_item">
                <span  className="sc"><MyLocationOutlined/> </span>
                 <a className="pc " style={{cursor:"none"}} href="#">Elimler Huseyn cavid prospekti Lorem, ipsum dolor. </a>
              </div>
              <div className="footer__right_item">
                 <span  className="sc"><Call/></span>
                 <a href="tel:+994125107439" className="pc underlineHover">+994125107439</a>
              </div>
              <div className="footer__right_item">
                 <span className="sc"><PhoneIphone/></span>
                 <a href="tel:+99450 560 61 73" className="pc underlineHover">+994505606173</a>
              </div>
              <div className="footer__right_item">
                 <span className="sc"><Instagram/></span>
                 <a className="pc underlineHover" href="https://www.instagram.com/haremperdebaku/" target={"_blank"}>haremperdebaku</a>
              </div>
              <div className="footer__right_item">
                 <span className="sc"><Facebook/></span>
                 <a className="pc underlineHover" href="https://www.facebook.com/Harem-PerdeBrillanthome-474050882720532/" target={"_blank"}>HaremPerde&Brillanthome
</a>
              </div>
              
         
            
          
        </div>
      </div>
    </div>
  </div>
    // <div className="footer__container" >
    //   <div className="footer__wrapper" >
     
    //   <div className="footer__wrapper">
    //       <div className="footer__left">
    //         <div className="footer__wrapper_logoContainer" >
    //           <span>Logo</span>
    //         </div>
        
    //       </div>
    //       <div className="footer__center ">
    //           {/* <h1 className="sc">Kategori</h1> */}
    //         <ul>
    //           {
    //             CategoryItem.map((item)=>(
    //               <Link className="footer__center_a" to={handleCategoryLink(item.desc)} >
    //               <li key={item.id} className="pc">{item.desc}</li>
    //               </Link>
    //               ))
    //             }
              
    //         </ul>
    //       </div>
    //       <div className="footer__right"> 
                
    //         <div className="footer__right_left" >
    //             <h1 className="sc">İletişim Bilgileri</h1>
    //         <ul className="pc">
    //           <li>elimler akedimisi hüseyn cavid pros. no43 daire 12</li>
    //           <li>Telefon : 0125107439</li>
    //           <li>Mobile : 05555555</li>
    //           <li>instagram : HaremPerdeBaku </li>
    //         </ul>
    //         </div>
    //         <div className="footer__right_right" >
    //           logo
    //         </div>
    //       </div>
    //   </div>
    //             </div>
    // </div>
  )
}

export default Footer