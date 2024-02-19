import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import perfil from '../assets/pp.png'
import Dashboard from "../page/Dashboard";
import DataBuku from "../page/DataBuku";
import "./css/Sidebar.css"

const Sidebar = ({ toggle, showSidebar }) => {

    return (
        <BrowserRouter>
            <div className={`${showSidebar} sidebar`}>
                <nav className="sidebar__container">
                <a href="#" className="sidebar__logo">
                            <span>Dwipurna</span>
                            <span>Library</span>
                        </a>
                    <div className="sidebar__content">

                       

                        <h3 className="sidebar__title">
                            <span>MENU UTAMA</span>
                        </h3>

                        <div className="sidebar__list">
                            <NavLink to="/" onClick={toggle} className="sidebar__link">
                                <i className="ri-team-line"></i>
                                <span className="sidebar__link-name">Dashboard</span>
                            </NavLink>
                            <NavLink to="/book" onClick={toggle} className="sidebar__link">
                                <i className="ri-book-2-line"></i>
                                <span className="sidebar__link-name">Data Buku</span>
                            </NavLink>
                        </div>

                        <h3 className="sidebar__title none">
                            <span>AKUN</span>
                        </h3>

                        <div className="sidebar__list none">
                            <a href="#" className="sidebar__link">
                                <i className="ri-account-circle-line"></i>
                                <span className="sidebar__link-name">Profile</span>
                            </a>
                            <a href="#" className="sidebar__link">
                                <i className="ri-logout-box-line"></i>
                                <span className="sidebar__link-name">Logout</span>
                            </a>
                        </div>


                    </div>

                    <div className="sidebar__account none">
                        <img src={perfil} alt="image" className='sidebar__perfil' />

                        <div className="sidebar__names">
                            <h3 className="sidebar__name">Andika Saputra</h3>
                            <span className="sidebar__position">Staff Admin</span>
                        </div>

                        <i className="ri-arrow-right-s-line"></i>
                    </div>
                </nav>
            </div>

            <Routes>
                <Route index element={<Dashboard />} />
                <Route path="book" element={<DataBuku />} />
            </Routes>

        </BrowserRouter>
    );
}

export default Sidebar;