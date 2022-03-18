import "./styles.scss"
import { ClassOutlined, HomeOutlined, InfoOutlined, WorkOutlineOutlined} from '@mui/icons-material';
import {  NavLink } from "react-router-dom";
const Navbar = () => {
  // console.log(NavLink)
  return (
    <div className="navbar__container" >
        <div className="navbar__wrapper">
           <div className="navbar__left">
           <img src="/images/png/logo.png" alt="logo" />
           </div>
           <div className="navbar__center">
               <div className="navbar__center_wrapper">
                   <ul className="navbar__list_items" >
                       <li 
                         className="navbar__list_item"
                        >  
                             <span className="navbar__list_itemText" >
                           <NavLink to="/"
                            className="unselected"
                             activeClassName="selected"
                            exact
                            >
                              Home
                              </NavLink>
                              </span> 
                       </li>
                       <li
                         className="navbar__list_item"
                       >
                         <span className="navbar__list_itemText" >
                              <NavLink 
                              activeClassName="selected"
                               to={"/hakkımızda"}
                               className="unselected" 
                               >        
                              About
                            </NavLink>
                              </span>                            
                       </li>
                       <li
                       className="navbar__list_item">
                         <span className="navbar__list_itemText" >
                            <NavLink to={"/kategori"}  
                             className="unselected"
                             activeClassName="selected" >
                              Category
                            </NavLink>
                              </span> 
                              
                       </li>
                       <li
                         className="navbar__list_item">
                       <span className="navbar__list_itemText" >
                            <NavLink to="/hizmetler" 
                             className="unselected"
                             activeClassName="selected" >
                              Services
                            </NavLink>
                              </span> 
                             
                       </li>
                       
                   </ul>
               </div>
           </div>
           <div className="navbar__right" >
               <div className="navbar__hamburger_menu">
                   <span></span>
                   <span></span>
                   <span></span>
               </div>
           </div>
        </div>
    </div>
  )
}

export default Navbar