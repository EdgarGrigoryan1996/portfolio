import React, {useEffect, useRef} from 'react';
import "animate.css";
import s from "./Header.module.css";
import g from "../../global.module.css";
import Navbar from "./Navbar/Navbar";
import {AiFillGithub, AiFillInstagram} from "react-icons/ai";
import {FaLinkedinIn, FaFacebookF} from "react-icons/fa";
import Button from "../GlobalComponents/Button/Button";
import Typed from "typed.js";

function Header(props) {
    const el = useRef(null)

    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('edgar.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'edgar.pdf';
                alink.click();
            })
        })
    }
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Frontend Developer','Web Developer'],
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
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, accusantium ad architecto aspernatur assumenda consequuntur corporis cupiditate harum ipsum labore maiores molestias mollitia perferendis quam quod rem rerum sequi voluptas?
                        </p>
                    </div>
                    <div className={s.social}>
                        <a href="https://www.facebook.com/EdgarGrgoryani" target="_blank"><FaFacebookF /></a>
                        <a href="https://www.instagram.com/ed__grigoryan/" target="_blank"><AiFillInstagram /></a>
                        <a href="https://www.linkedin.com/in/edgar-grigoryan-602087171/" target="_blank"><FaLinkedinIn /></a>
                        <a href="https://github.com/EdgarGrigoryan1996" target="_blank"><AiFillGithub /></a>
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

                    </div>

            </section>
        </div>
    );
}

export default Header;