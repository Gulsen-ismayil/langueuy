import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './Nav.css'

function Nav() {
    const [t, i18n] = useTranslation("global")
    const handleChangeLanguage = (lang: string) => {
        i18n.changeLanguage(lang)
    }
    return (
    <div className="navbar">
        <div className="button">
            <button onClick={() => handleChangeLanguage("en")} >En</button>
            <button onClick={() => handleChangeLanguage("fr")} >Fr</button>
            <button onClick={() => handleChangeLanguage("ur")} >Ur</button>
            <button onClick={() => handleChangeLanguage("ch")} >Ch</button>
        </div>
        <div className="navHeader">
            <img className='navLogo' src='asset/logoDULC.png' alt="logo" />
                <img className='navBackground' src="asset/etles.png" alt="" />
            <div className="logoBackgroundText">
                <p className='navTitle' >{t("header.logo")}</p>
            </div>
        </div>
        <div className="navmenu">
            <div className="menu-desktop">
                <NavLink className='navlinktext' to='/'>{t("header.menu.accueil")}</NavLink>
                <NavLink className='navlinktext' to='/formation'>{t("header.menu.formation")}</NavLink>
                <NavLink className='navlinktext' to='/'>{t("header.menu.culture")}</NavLink>
                <NavLink className='navlinktext' >{t("header.menu.ressources")}</NavLink>
                <NavLink className='navlinktext' >{t("header.menu.donateur")}</NavLink>
            </div>
        </div>
    </div>
)}

export default Nav