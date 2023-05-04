import React, {useEffect, useRef, useState} from 'react';
import "animate.css";
import s from "./About.module.css";
import g from "../../global.module.css";
import Button from "../GlobalComponents/Button/Button";
import aboutImg from "../../assets/images/aboutImg-min.webp"
import animateElementsToScroll from "../../Utils/Functions/AnimateElementsToScroll";
function About(props) {
    const [scrollTop, setScrollTop] = useState(0);
    const [readMore, setReadMore] = useState(false)
    const imgBackgroundRef = useRef(null);
    const aboutContentRef = useRef(null)

    const handlerChangeReadMore = () => {
        setReadMore(!readMore)
    }

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
                <div ref={imgBackgroundRef}>
                    <img src={aboutImg} alt=""/>
                </div>
            </div>
            <div
                ref={aboutContentRef}
                className={s.aboutContent}
            >
                <h1>About <span className={g.animatedText}>Me</span></h1>
                <h3>Frontend Developer!</h3>
                <p>
                        Hello, my name is Edgar Grigoryan and I am a React programmer with a keen interest in user interface development. I am passionate about creating visually appealing and functional web applications that provide engaging user experiences.
                    I have a deep understanding of core JavaScript concepts and I am constantly learning new techniques and technologies to enhance my skills.
                    <div className={readMore ? s.readMore : s.lessMore}>
                        As a React programmer, I specialize in building reusable and scalable components that are optimized for performance and
                        I enjoy working in collaborative environments and believe that teamwork is key to delivering successful projects.
                        When it comes to front-end development, I believe that the devil is in the details. I have a strong attention to detail and always ensure that my code is clean, well-documented, and optimized for maintainability.
                        In my free time, I enjoy exploring new technologies and experimenting with new ideas. I am always looking for ways to improve my skills and stay up-to-date with the latest industry trends. If you're looking for a dedicated and passionate React programmer, I would love to hear about your project and discuss how I can contribute."
                    </div>
                </p>
                <div className={g.btnBlock}>
                    <Button
                        text={readMore ? "Less More" : "Read More"}
                        color="#0ef"
                        onclick={handlerChangeReadMore}
                    />
                </div>
            </div>
        </section>
    );
}

export default About;