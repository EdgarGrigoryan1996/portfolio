import React, {useEffect, useRef} from 'react';
import "animate.css";
import s from "./Header.module.css";
import g from "../../global.module.css";
import Navbar from "./Navbar/Navbar";
import Button from "../GlobalComponents/Button/Button";
import Typed from "typed.js";
import Social from "../GlobalComponents/Social/Social";
import headerImg from "../../assets/images/headerImg-min.webp"
import {onButtonClick} from "../../Utils/Functions/downloadCV";

function Header(props) {
    const el = useRef(null)


    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Frontend Developer','Web Developer','React Developer'],
            typeSpeed:100,
            backSpeed:100,
            backDelay:1000,
            loop:true
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);
    return (
        <div>
            <Navbar />
            <section
                className={s.headerContent}
                id="home"
            >
                <div className={s.contentText}>
                    <div className={s.contentAboutMe}>
                        <h3 className="animate__animated animate__backInLeft">Hello,It's Me</h3>
                        <h1 className="animate__animated animate__lightSpeedInRight">Edgar Grigoryan</h1>
                        <h3 className="animate__animated animate__slideInUp">And I'm a <span className={s.typedText}><span ref={el} className="typed"></span></span></h3>
                        <p className="animate__animated animate__zoomIn">
                            ` with a passion for creating high-quality user interfaces. I have expertise in core JavaScript concepts and advanced React-specific techniques, and I enjoy collaborating with other developers to bring projects to fruition. If you're looking for a talented React programmer to help build engaging user experiences, let's talk!</p>
                    </div>
                    <div className={s.socialBlock}>
                        <Social />
                    </div>

                    <div className={g.btnBlock}>
                        <Button
                            text="Download CV"
                            color="#0ef"
                            onclick={onButtonClick}
                        />
                    </div>
                </div>

                    <div className={s.imgBackground}>
                        <img src={headerImg} alt=""/>
                    </div>

            </section>
        </div>
    );
}

export default Header;