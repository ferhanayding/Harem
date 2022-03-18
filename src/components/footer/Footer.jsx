import { Link } from "react-router-dom"
import { CategoryItem } from "../../dummyData"
import "./styles.scss"

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
    <div className="footer__container" >
      <div className="footer__wrapper" >
      {/* <div className="footer__img" > */}
      {/* <img src="https://img.freepik.com/free-photo/beige-paintbrush-stroke-textured-background_53876-129531.jpg?t=st=1647286923~exp=1647287523~hmac=68af07fc81bd1475b61e242d83a7305e914ecfb288ee11aeead3b10955238913&w=1060" alt="" /> */}
      {/* </div> */}
      <div className="footer__wrapper">
          <div className="footer__left">
            <div className="footer__wrapper_logoContainer" >
              <span>Logo</span>
            </div>
              {/* <h1 className="sc">haggımızda</h1> */}
            <div className="footer__left_paragContainer">
              <p className="pc"> consectetur adipisicing elit. Maiores sit nam dolor eaque odit placeat recusandae facilis iusto nihil doloremque?</p>
              {/* <div className="footer__left_iconContainer" >
                <span className="pc" >
                  <a href={"https://www.instagram.com/haremperdebaku/"} target="_blank"  >
                  <img className="pc" src="/icons/icons-instagram.svg" alt="instagram" />
                  </a>
                </span>
                {/* <span className="sc">facebook</span> */}
                
              {/* </div> */}
            </div>
          </div>
          <div className="footer__center ">
              {/* <h1 className="sc">Kategori</h1> */}
            <ul>
              {
                CategoryItem.map((item)=>(
                  <Link className="footer__center_a" to={handleCategoryLink(item.desc)} >
                  <li key={item.id} className="pc">{item.desc}</li>
                  </Link>
                  ))
                }
              
            </ul>
          </div>
          <div className="footer__right"> 
                
            <div className="footer__right_left" >
                <h1 className="sc">İletişim Bilgileri</h1>
            <ul className="pc">
              <li>elimler akedimisi hüseyn cavid pros. no43 daire 12</li>
              <li>Telefon : 0125107439</li>
              <li>Mobile : 05555555</li>
              <li>instagram : HaremPerdeBaku </li>
            </ul>
            </div>
            <div className="footer__right_right" >
              logo
            </div>
          </div>
      </div>
                </div>
    </div>
  )
}

export default Footer