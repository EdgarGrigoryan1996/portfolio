import React, {useEffect, useRef, useState} from 'react';
import "animate.css";
import s from "./About.module.css";
import g from "../../global.module.css";
import Button from "../GlobalComponents/Button/Button";
import animateElementsToScroll from "../../Utils/Functions/AnimateElementsToScroll";
function About(props) {
    const [scrollTop, setScrollTop] = useState(0);
    const imgBackgroundRef = useRef(null);
    const aboutContentRef = useRef(null)

    useEffect(() => {
        const handleScroll = event => {
            animateElementsToScroll(scrollTop,setScrollTop,imgBackgroundRef,'animate__slideInLeft','animate__slideOutLeft',`${s.imgBackground}`)
            animateElementsToScroll(scrollTop,setScrollTop,aboutContentRef,'animate__lightSpeedInRight','animate__lightSpeedOutRight',`${s.aboutContentShow}`)
        }
        window.addEventListener('scroll',handleScroll);
        return () => {
            window.removeEventListener('scroll',handleScroll)
        };
    },);


    return (
        <section
            className={s.about}
            id="about"
        >
            <div className={s.aboutImg}>
                <div ref={imgBackgroundRef}></div>
            </div>
            <div
                ref={aboutContentRef}
                className={s.aboutContent}
            >
                <h1>About <span className={g.animatedText}>Me</span></h1>
                <h3>Frontend Developer!</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis pariatur porro quam suscipit. Beatae consectetur, consequuntur culpa doloribus earum in, minus molestias neque, omnis pariatur perspiciatis quibusdam quidem saepe soluta!
                </p>
                <div className={g.btnBlock}>
                    <Button
                        text="Read More"
                        color="#0ef"
                    />
                </div>
            </div>
        </section>
    );
}

export default About;