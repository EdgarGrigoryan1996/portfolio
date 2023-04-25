import React, {useState} from 'react';
import s from "./Navbar.module.css"
import g from "../../../global.module.css"
import {AiOutlineClose} from "react-icons/ai";
import {RxHamburgerMenu} from "react-icons/rx";
import ChangeThemeButton from "../../ChangeThemeButton/ChangeThemeButton";

function Navbar(props) {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [menuItems, setMenuItems] = useState([
        {
            title:'Home',
            href:'#home',
            active:true
        },
        {
            title:'About',
            href:'#about',
            active:false
        },
        {
            title:'Skills',
            href:'#skills',
            active:false
        },
        {
            title:'Portfolio',
            href:'#portfolio',
            active:false
        },
        {
            title:'Contact',
            href:'#contact',
            active:false
        },
    ])
    return (
        <div className={s.navbarWrapper}>
            <a href="#" className={s.logo}><span className={g.animatedText}>My</span> Portfolio.</a>

            <nav className={mobileMenu ? s.navbar + " " + s.mobileNavbar : s.navbar}>
                <span onClick={() => setMobileMenu(false)}><AiOutlineClose /></span>
                {menuItems.map((item,i) => {
                    return (
                        <a
                            href={item.href}
                            className={item.active && s.active}
                            onClick={() => {
                                setMenuItems(menuItems.map((item,index) => {
                                    if(i === index){
                                        return {
                                            ...item,
                                            active:true
                                        }
                                    }
                                    else {
                                        return {
                                            ...item,
                                            active:false
                                        }
                                    }
                                }))
                                setMobileMenu(false)
                            }}
                        >{item.title}</a>
                    )
                })}
                <ChangeThemeButton />
            </nav>
            <span
                className={s.burger}
                onClick={() => setMobileMenu(true)}
            ><RxHamburgerMenu /></span>
        </div>
    );
}

export default Navbar;