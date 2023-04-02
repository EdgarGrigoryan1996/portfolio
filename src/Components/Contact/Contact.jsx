import React, {useState} from 'react';
import s from "./Contact.module.css"
import g from "../../global.module.css"
import Button from "../GlobalComponents/Button/Button";
function Contact(props) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    function changeInputState(changeState,event){
        changeState(event.target.value)
    }

    return (
        <section
            className={s.contact}
            id="contact"
        >
            <h2>Contact <span>Me!</span></h2>
            <div className={s.formBlock}>
                <form action="">
                    <div className={s.inputBlock}>
                        <input
                            type="text"
                            placeholder="Full Name"
                            value={name}
                            onChange={(e) => changeInputState(setName,e)}
                        />
                        <input
                            type="text"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => changeInputState(setEmail,e)}
                        />
                    </div>
                    <div className={s.inputBlock}>
                        <input
                            type="text"
                            placeholder="Mobile Number"
                            value={mobile}
                            onChange={(e) => changeInputState(setMobile,e)}
                        />
                        <input
                            type="text"
                            placeholder="Email Subject"
                            value={subject}
                            onChange={(e) => changeInputState(setSubject,e)}
                        />
                    </div>
                    <div className={s.fullInput}>
                        <textarea
                            placeholder="Your Message"
                            value={message}
                            onChange={(e) => changeInputState(setMessage,e)}
                        ></textarea>
                    </div>
                    <div className={g.btnBlock + " " + g.textCenter}>
                        <Button text="Send Message" color="#0ef"/>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact;