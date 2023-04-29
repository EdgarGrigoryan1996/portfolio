import React, {useEffect, useRef, useState} from 'react';
import s from "./Hobbies.module.css"
import g from "../../global.module.css";
import animateElementsToScroll from "../../Utils/Functions/AnimateElementsToScroll";
function Hobbies(props) {
    const [scrollTop, setScrollTop] = useState(0)
    const hobbiesTitleRef = useRef(null)
    useEffect(() => {
        const handleScroll = event => {
            animateElementsToScroll(scrollTop,setScrollTop,hobbiesTitleRef,'animate__zoomIn','animate__zoomOut',`${s.hobbiesTitleShow}`)
        }
        window.addEventListener('scroll',handleScroll)
        return () => {
            window.removeEventListener('scroll',handleScroll)
        }

    })

    return (
        <section
            className={s.hobbies}
            id="hobbies"
        >
            <h2 ref={hobbiesTitleRef}>My <span className={g.animatedText}>Hobbies</span></h2>


        </section>
    );
}

export default Hobbies;