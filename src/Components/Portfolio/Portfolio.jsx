import React, {useEffect, useRef, useState} from 'react';
import s from "./Portfolio.module.css";
import g from "../../global.module.css";
import project1 from "./ProjectImages/football.jpg";
import project2 from "./ProjectImages/project2.png";
import project3 from "./ProjectImages/project3.jpg";
import teverImg from "./ProjectImages/tever.webp";

import Project from "./Project/Project";
import animateElementsToScroll from "../../Utils/Functions/AnimateElementsToScroll";

function Portfolio() {

    const projects = [
        {
            projectTitle:"Generate Teams",
            projectDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dolorum enim facere in minus rem. Ab, dolorem eum facere id impedit odit perferendis similique, sint tempora totam velit veritatis vero.",
            projectImg:project1,
            projectLink:"https://generate-teams-jx7949gyt-footballistna-gmailcom.vercel.app/?vercelToolbarCode=pNuY37LR5WcMn_m",
        },
        {
            projectTitle:"Hydra - Project",
            projectDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dolorum enim facere in minus rem. Ab, dolorem eum facere id impedit odit perferendis similique, sint tempora totam velit veritatis vero.",
            projectImg:project2,
            projectLink:"https://hydra-psi.vercel.app/",
        },
        {
            projectTitle:"Focus",
            projectDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dolorum enim facere in minus rem. Ab, dolorem eum facere id impedit odit perferendis similique, sint tempora totam velit veritatis vero.",
            projectImg:project3,
            projectLink:"https://focus-omega-five.vercel.app/",
        },
        {
            projectTitle:"Tever - Group",
            projectDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dolorum enim facere in minus rem. Ab, dolorem eum facere id impedit odit perferendis similique, sint tempora totam velit veritatis vero.",
            projectImg:teverImg,
            projectLink:"https://hydra-psi.vercel.app/",
            // projectLink:"https://tevergroup.am/",
        },
    ]

    const showAnimations = ['animate__lightSpeedInLeft',"animate__zoomIn","animate__lightSpeedInRight","animate__lightSpeedInLeft","animate__zoomIn","animate__lightSpeedInRight"]
    const hideAnimations = ['animate__lightSpeedOutLeft',"animate__zoomOut","animate__lightSpeedOutRight","animate__lightSpeedOutLeft","animate__zoomOut","animate__lightSpeedOutRight"]

    const portfolioTitleRef = useRef(null);

    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        const handleScroll = event => {
            animateElementsToScroll(scrollTop,setScrollTop,portfolioTitleRef,'animate__zoomIn','animate__zoomOut',`${s.portfolioTitleShow}`)
        }
        window.addEventListener('scroll',handleScroll);

        return () => {
            window.removeEventListener('scroll',handleScroll);
        }
    })

    return (
        <section
            className={s.portfolio}
            id="portfolio"
        >
            <h2 ref={portfolioTitleRef}>Latest <span className={g.animatedText}>Projects</span></h2>
            <div className={s.projects}>
                {projects.map((project,i) => {
                    return <Project project={project} showAnimation={showAnimations[i]} hideAnimation={hideAnimations[i]}/>
                })}
            </div>
        </section>
    );
}

export default Portfolio;