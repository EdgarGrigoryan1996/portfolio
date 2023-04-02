import React, {useEffect, useRef, useState} from 'react';
import s from "./Skills.module.css";
import g from "../../global.module.css";
import {AiFillHtml5} from "react-icons/ai";
import Skill from "./Skill";
import {DiCss3} from "react-icons/di";
import {IoLogoJavascript} from "react-icons/io";
import {FaReact} from "react-icons/fa";
import {BsGit} from "react-icons/bs";
import {SiRedux} from "react-icons/si";
import animateElementsToScroll from "../../Utils/Functions/AnimateElementsToScroll";

function Skills(props) {
    const showAnimations = ['animate__lightSpeedInLeft',"animate__zoomIn","animate__lightSpeedInRight","animate__lightSpeedInLeft","animate__zoomIn","animate__lightSpeedInRight"]
    const hideAnimations = ['animate__lightSpeedOutLeft',"animate__zoomOut","animate__lightSpeedOutRight","animate__lightSpeedOutLeft","animate__zoomOut","animate__lightSpeedOutRight"]
    const skills = [
        {
            logo:<AiFillHtml5/>,
            title:"HTML",
            level:9
        },
        {
            logo:<DiCss3/>,
            title:"CSS",
            level:8
        },
        {
            logo:<IoLogoJavascript/>,
            title:"Java Script",
            level:8
        },
        {
            logo:<FaReact/>,
            title:"React",
            level:7
        },
        {
            logo:<SiRedux/>,
            title:"Redux",
            level:7
        },
        {
            logo:<BsGit/>,
            title:"Git",
            level:6
        },

    ]

    const skillsTitleRef = useRef(null);
    const skillsDescriptionRef = useRef(null);

    const [scrollTop, setScrollTop] = useState(0);


    useEffect(() => {
        const handleScroll = event => {
            animateElementsToScroll(scrollTop,setScrollTop,skillsTitleRef,'animate__zoomIn','animate__zoomOut',`${s.skillsTitleShow}`)
            animateElementsToScroll(scrollTop,setScrollTop,skillsDescriptionRef,'animate__fadeInUp','animate__fadeOutDown',`${s.skillsDescriptionShow}`)
        }
        window.addEventListener('scroll',handleScroll)
        console.log(scrollTop)
        console.log(skillsTitleRef.current.offsetTop)
        return () => {
            window.removeEventListener('scroll',handleScroll)
        }

    })

    return (
        <section
            className={s.skills}
            id="skills"
        >
            <h2 ref={skillsTitleRef}>My <span className={g.animatedText}>Skills</span></h2>
            <div className={s.mySkills}>
                {skills.map((skill,i) => {
                    return (
                        <Skill skill={skill} showAnimation={showAnimations[i]} hideAnimation={hideAnimations[i]}/>
                    )
                })}
            </div>
            <div className={s.skillsDescription}>
                <p ref={skillsDescriptionRef}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, atque culpa dolores ex iste labore natus nobis odit omnis porro quibusdam repellendus sit sunt, ullam ut. Accusantium aperiam autem beatae consequatur dicta eius, enim facilis illum magnam perspiciatis possimus ratione suscipit vel veritatis voluptatum? Aliquid delectus ea iste labore numquam quaerat tempora, vel voluptatem? Dolorum fuga minima nostrum quam. Ab asperiores at commodi consequatur cupiditate debitis dignissimos ea esse est ex fugiat fugit harum inventore iste laboriosam laborum necessitatibus nihil nisi odit officiis omnis, possimus quas sit tempora voluptatibus. A architecto consectetur excepturi nesciunt, quia quisquam sunt. A, accusamus amet aspernatur assumenda consequuntur dicta dignissimos distinctio dolorum error et excepturi harum maxime necessitatibus non, praesentium quae quaerat quia ratione, sint voluptas? A corporis cupiditate dolores eos ex excepturi iure laborum nihil provident ratione vel, vero. Ad at blanditiis debitis, dignissimos distinctio, dolorum eos harum incidunt iste, odit optio pariatur quasi quibusdam totam vitae. Autem dolore illum nobis voluptate?
                </p>
            </div>
        </section>
    );
}

export default Skills;