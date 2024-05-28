import React from 'react';
import s from "./Social.module.css";
import {FaFacebookF, FaLinkedinIn} from "react-icons/fa";
import {AiFillGithub, AiFillInstagram} from "react-icons/ai";

function Social() {

    return (
        <div className={s.social}>
            <a href="https://www.facebook.com/EdgarGrgoryani" ><FaFacebookF /></a>
            <a href="https://www.instagram.com/ed__grigoryan/" ><AiFillInstagram /></a>
            <a href="https://www.linkedin.com/in/edgar-grigoryan-602087171/" target="_blank"><FaLinkedinIn /></a>
            <a href="https://github.com/EdgarGrigoryan1996" ><AiFillGithub /></a>
        </div>
    );
}

export default Social;