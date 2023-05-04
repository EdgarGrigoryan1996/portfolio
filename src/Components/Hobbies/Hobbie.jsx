import React, {useEffect, useRef, useState} from 'react';
import s from "./Hobbies.module.css";
import g from "../../global.module.css";
import {BiFootball} from "react-icons/bi";
import animateElementsToScroll from "../../Utils/Functions/AnimateElementsToScroll";

function Hobbie(props) {
    const [scrollTop, setScrollTop] = useState(0)
    const hobbieBlockRef = useRef(null)

    useEffect(() => {
        const handleScroll = event => {
            animateElementsToScroll(scrollTop,setScrollTop,hobbieBlockRef,'animate__zoomIn','animate__zoomOut',`${s.hobbieBlockShow}`)
        }
        window.addEventListener('scroll',handleScroll);

        return () => {
            window.removeEventListener('scroll',handleScroll);
        }
    })
    return (
        <div ref={hobbieBlockRef} className={s.hobbieBlock}>
            <div className={s.backgroundTransparent}>
                <h2>{props.hobbie.title}</h2>
                <div className={s.hobbieImg}>
                    {props.hobbie.icon}
                    {/*<img src="https://www.animatedimages.org/data/media/165/animated-football-and-soccer-image-0093.gif" border="0" alt="animated-football-and-soccer-image-0093" />*/}
                </div>
                <div>
                    <p>{props.hobbie.description}</p>
                </div>
            </div>

        </div>
    );
}

export default Hobbie;