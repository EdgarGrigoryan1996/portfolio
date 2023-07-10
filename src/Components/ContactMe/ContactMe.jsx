import React from 'react';
import s from "./ContactMe.module.css"
import Social from "../GlobalComponents/Social/Social";
import {AiFillPhone, AiOutlineMail} from "react-icons/ai";
import g from "../../global.module.css";
import Button from "../GlobalComponents/Button/Button";
import {onButtonClick} from "../../Utils/Functions/downloadCV";
function ContactMe(props) {

    return (
        <section
            className={s.contact}
            id="contact"
        >
            <div className={s.contactMe}>
                <div className={s.contacts}>
                    <span><AiFillPhone /> + (374)55-43-93-11</span>
                    <span><AiOutlineMail/> edgar@grigoryan.one</span>
                </div>
                <div>
                    <Social />
                    <div className={g.btnBlock}>
                        <Button
                            text="Download CV"
                            color="#0ef"
                            onclick={onButtonClick}
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}

export default ContactMe;