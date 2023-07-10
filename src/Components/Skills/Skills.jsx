import React, {useEffect, useRef, useState} from 'react';
import s from "./Skills.module.css";
import g from "../../global.module.css";
import {AiFillHtml5} from "react-icons/ai";
import Skill from "./Skill";
import {DiCss3} from "react-icons/di";
import {IoLogoJavascript} from "react-icons/io";
import {FaReact} from "react-icons/fa";
import {BsGit} from "react-icons/bs";
import {SiFirebase, SiNextdotjs, SiRedux} from "react-icons/si";
import animateElementsToScroll from "../../Utils/Functions/AnimateElementsToScroll";

function Skills() {
    const showAnimations = ['animate__lightSpeedInLeft',"animate__zoomIn","animate__lightSpeedInRight","animate__lightSpeedInLeft","animate__zoomIn","animate__lightSpeedInRight","animate__zoomIn","animate__zoomIn"]
    const hideAnimations = ['animate__lightSpeedOutLeft',"animate__zoomOut","animate__lightSpeedOutRight","animate__lightSpeedOutLeft","animate__zoomOut","animate__lightSpeedOutRight","animate__zoomOut","animate__zoomOut"]
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
        {
            logo:<SiNextdotjs/>,
            title:"Next JS",
            level:7
        },
        {
            logo:<SiFirebase/>,
            title:"Firebase",
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
                    I'm  a self-taught React programmer with a diverse set of skills in front-end development. Through my own dedication to learning, I have developed a deep understanding of core JavaScript concepts and advanced React-specific techniques.
                    In addition to my proficiency in React, I am skilled in HTML, CSS, and Git, with a strong attention to detail and a focus on creating clean, maintainable code. I have also gained experience using Redux for state management in large-scale React applications.
                    As a self-taught developer, I am highly motivated and committed to continual learning and growth. I stay up to date with the latest developments in front-end technologies and design patterns, and enjoy exploring new tools and frameworks to improve my skills.
                    I take pride in developing high-quality, user-centered interfaces that are optimized for performance and usability. I am passionate about my work as a React programmer and am excited to collaborate with others to bring great ideas to life.
                </p>
            </div>
        </section>
    );
}

export default Skills;