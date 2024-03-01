import "./css/Header.css"
import perfil from "../assets/pp.png"
import { useState } from "react"

const Header = ({toggle, showIcon}) => {
   const d = new Date()
   const months = ['January', 'February', 'Maret', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

   const month = months[d.getMonth()]
   const date = d.getDate()
   const year = d.getFullYear()

   const [showMenu, setShowMenu] = useState('')

   const toggleClass = () => {
      setShowMenu(showMenu === '' ? 'show-menu' : '');
    };

    return ( 
        <header className="header">
         <div className="header__container container">
            <div onClick={toggle} className={`${showIcon} header__toggle`}>
               <i className="ri-menu-line nav__burger"></i>
               <i className="ri-close-line nav__close"></i>
            </div>

            <div className="header__date">
            <i className="ri-calendar-2-line"></i>
               <p>{date}</p>
               <p>{month}</p>
               <p>{year}</p>
            </div>

            <div  onClick={toggleClass} className="user__account">
               <img src={perfil} alt="image" />

               <div className="user__data">
                  <h3 className="user__name">Andika Saputra</h3>
                  <p className="user__role">Staff Admin</p>
               </div>

               <i className={`${showMenu} ri-arrow-down-s-line`}></i>

               <ul className={`${showMenu} user__menu`}>
                  <li className="user__profile">
                  <i className="ri-settings-4-line"></i>
                  Profile
                  </li>

                  <li className="user__logout">
                  <i className="ri-logout-circle-r-line"></i>
                  Logout
                  </li>
               </ul>
            </div>
         </div>
      </header>
     );
}
 
export default Header;