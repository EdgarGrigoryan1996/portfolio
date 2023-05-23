import React, {useState} from 'react';
import s from "./Contact.module.css"
import g from "../../global.module.css"
import Button from "../GlobalComponents/Button/Button";
import * as emailjs from "@emailjs/browser";
import SuccessMessagePopup from "./SuccessMessagePopup";
import UseAnimations from "react-useanimations";
import error from 'react-useanimations/lib/help'

function Contact(props) {

    const [successMessageStatus, setSuccessMessageStatus] = useState(false)

    const [name, setName] = useState({
        text: "", error: {
            status: true, errMessage: "Name is required"
        }
    })
    const [email, setEmail] = useState({
        text: "", error: {
            status: true, errMessage: "Email is required"
        }
    })
    const [mobile, setMobile] = useState({
        text: "", error: {
            status: true, errMessage: "Mobile is required"
        }
    })
    const [subject, setSubject] = useState({
        text: "", error: {
            status: true, errMessage: "Subject is required"
        }
    })
    const [message, setMessage] = useState({
        text: "", error: {
            status: true, errMessage: "Message is required"
        }
    })

    const [readyForSend, setReadyForSend] = useState(false)

    function changeInputState(state, changeState, event) {
        changeState({
            ...state, text: event.target.value, error: {
                ...state.error, status: true
            }
        })
    }

    function sendData() {
        if (readyForSend) {
            emailjs.send("service_j852i5h", "template_l5yketn", {
                from_name: name, message: message, reply_to: "info@grigoryan.one", to_name: "Portfolio Email",
            }, "8WoG3eKkrbt0mr-cc");
            setName({
                ...name, text: ""
            })
            setEmail({
                ...email, text: ""
            })
            setMobile({
                ...mobile, text: ""
            })
            setSubject({
                ...subject, text: ""
            })
            setMessage({
                ...message, text: ""
            })
            setSuccessMessageStatus(true)
            setReadyForSend(false)
            setTimeout(() => {
                setSuccessMessageStatus(false)
            },3000)
        }

    }


    const sendEmail = (e) => {
        e.preventDefault()
        if (name.text.trim() === "") {
            setName({
                ...name,
                error: {
                    ...name.error,
                    status: false
                }
            })
        }
        if (email.text.trim() === "") {
            setEmail({
                ...email,
                error: {
                    ...email.error,
                    status: false
                }
            })
        }
        if (message.text.trim() === "") {
            setMessage({
                ...message,
                error: {
                    ...message.error,
                    status: false
                }
            })
        }
        if (name.error.status && email.error.status && message.error.status) {
            setReadyForSend(true)
            sendData()
        }
    }

    return (<section
        className={s.contact}
        id="contact"
    >
        {successMessageStatus && <SuccessMessagePopup/>}
        <h2>Contact <span className={g.animatedText}>Me!</span></h2>
        <div className={s.formBlock}>
            <form>
                <div className={s.inputBlock}>
                        <span className={s.oneInputBlock}>
                        <input
                            type="text"
                            placeholder="Full Name"
                            value={name.text}
                            onChange={(e) => changeInputState(name, setName, e)}
                        />
                            {!name.error.status &&
                                <span title={name.error.errMessage} className={s.errorMessage}>
                                    <UseAnimations animation={error} strokeColor={"#ea3434"} size={56}/>
                                </span>}
                            </span>

                    <span className={s.oneInputBlock}>
                        <input
                            type="text"
                            placeholder="Email Address"
                            value={email.text}
                            onChange={(e) => changeInputState(email, setEmail, e)}
                        />
                        {!email.error.status &&
                            <span title={email.error.errMessage} className={s.errorMessage}>
                                <UseAnimations animation={error} strokeColor={"#ea3434"} size={56}/>
                            </span>}
                            </span>

                </div>
                <div className={s.inputBlock}>
                        <span className={s.oneInputBlock}>
                        <input
                            type="text"
                            placeholder="Mobile Number"
                            value={mobile.text}
                            onChange={(e) => changeInputState(mobile, setMobile, e)}
                        />
                        </span>
                    <span className={s.oneInputBlock}>
                        <input
                            type="text"
                            placeholder="Email Subject"
                            value={subject.text}
                            onChange={(e) => changeInputState(subject, setSubject, e)}
                        />
                    </span>
                </div>
                <div className={s.fullInput}>
                    <span className={s.oneInputBlock}>
                    <textarea
                        placeholder="Your Message"
                        value={message.text}
                        onChange={(e) => changeInputState(message, setMessage, e)}
                    ></textarea>
                        {!message.error.status &&
                            <span title={message.error.errMessage} className={s.errorMessage}>
                                <UseAnimations animation={error} strokeColor={"#ea3434"} size={56}/>
                            </span>}
                        </span>

                </div>
                <div className={g.btnBlock + " " + g.textCenter}>
                    <Button text="Send Message" color="#0ef" onclick={sendEmail}/>
                </div>
            </form>
        </div>
    </section>);
}

export default Contact;