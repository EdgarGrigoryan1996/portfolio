import React, {useEffect, useRef, useState} from 'react';
import s from "../Portfolio.module.css";
import {FiExternalLink} from "react-icons/fi";
import animateElementsToScroll from "../../../Utils/Functions/AnimateElementsToScroll";

function Project(props) {
    const [scrollTop, setScrollTop] = useState(0)

    const projectRef = useRef(null)

    useEffect(() => {
        const handleScroll = event => {
            animateElementsToScroll(scrollTop,setScrollTop,projectRef,props.showAnimation,props.hideAnimation,`${s.projectShow}`)
        }
        window.addEventListener('scroll',handleScroll);

        return () => {
            window.removeEventListener('scroll',handleScroll);
        }
    })

    return (
        <div ref={projectRef} className={s.project}>
            <img src={props.project.projectImg} alt=""/>
            <div className={s.background}>
                <div className={s.projectLayer}>
                    <h4>{props.project.projectTitle}</h4>
                    {/*<p>*/}
                    {/*    {props.project.projectDescription}*/}
                    {/*</p>*/}
                    <a href={props.project.projectLink} target="_blank" rel="noreferrer"><FiExternalLink/></a>
                </div>
            </div>
        </div>
    );
}

export default Project;