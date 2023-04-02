import React, {useEffect, useRef, useState} from 'react';
import s from "./Skills.module.css";
import {AiFillStar} from "react-icons/ai";
import animateElementsToScroll from "../../Utils/Functions/AnimateElementsToScroll";

function Skill(props) {
    const skillRef = useRef(null)
    const stars = []
    for(let i = 0; i < 10; i++){
        if(i < props.skill.level){
            stars.push(<AiFillStar color={"0ef"}/>);
        }
        else {
            stars.push(<AiFillStar />);
        }
    }
    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        const handleScroll = event => {
            animateElementsToScroll(scrollTop,setScrollTop,skillRef,props.showAnimation,props.hideAnimation,`${s.skillShow}`)
        }
        window.addEventListener('scroll',handleScroll)

        return () => {
            window.removeEventListener('scroll',handleScroll)
        }

    })
    return (
        <div
            className={s.skill}
            ref={skillRef}
        >
            <div className={s.skillIcon}>
                        <span>
                            {props.skill.logo}
                        </span>
            </div>
            <div className={s.skillTitle}>
                <h3>{props.skill.title}</h3>
            </div>
            <div className={s.levelBlock}>
                <span>Level:</span>
                <div className={s.skillLevel}>
                    {stars.map((star) => {
                        return star
                    })}
                </div>
            </div>

        </div>
    );
}

export default Skill;