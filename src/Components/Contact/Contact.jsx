import React, {useEffect, useState} from 'react';
import s from "./Contact.module.css"
import g from "../../global.module.css"
import Button from "../GlobalComponents/Button/Button";
import * as emailjs from "@emailjs/browser";
import SuccessMessagePopup from "./SuccessMessagePopup";
import UseAnimations from "react-useanimations";
import error from 'react-useanimations/lib/help'

function Contact() {

    const [successMessageStatus, setSuccessMessageStatus] = useState(false)
    const [readyForSend, setReadyForSend] = useState(false)
    const [name, setName] = useState({
        text: "", error: {
            status: null, errMessage: "Name is required"
        }
    })
    const [email, setEmail] = useState({
        text: "", error: {
            status: null, errMessage: "Email is required"
        }
    })
    const [mobile, setMobile] = useState({
        text: "", error: {
            status: null, errMessage: "Mobile is required"
        }
    })
    const [subject, setSubject] = useState({
        text: "", error: {
            status: null, errMessage: "Subject is required"
        }
    })
    const [message, setMessage] = useState({
        text: "", error: {
            status: null, errMessage: "Message is required"
        }
    })



    function changeInputState(state, changeState, event) {
        changeState({
            ...state, text: event.target.value, error: {
                ...state.error, status: null
            }
        })
    }

    function sendData() {
        if (readyForSend) {
            emailjs.send("service_j852i5h", "template_l5yketn", {
                from_name: name.text,
                message: message.text,
                phone:mobile.text,
                subject:subject.text,
                reply_to: "info@grigoryan.one",
                to_name: "Portfolio Email",
            }, "8WoG3eKkrbt0mr-cc");
            setName({
                ...name, text: "",
                error: {
                    ...name.err,
                    status:null
                }
            })
            setEmail({
                ...email, text: "",
                error: {
                    ...email.err,
                    status:null
                }
            })
            setMobile({
                ...mobile, text: "",
                error: {
                    ...mobile.err,
                    status:null
                }
            })
            setSubject({
                ...subject, text: "",
                error: {
                    ...subject.err,
                    status:null
                }
            })
            setMessage({
                ...message, text: "",
                error: {
                    ...message.err,
                    status:null
                }
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
        } else {
            setName({
                ...name,
                error: {
                    ...name.error,
                    status: true
                }
            })
        }
        if (email.text.trim() === "") {
            setEmail({
                ...email,
                error: {
                    errMessage: "Email is required",
                    status: false
                }
            })
        } else if(!validateEmail(email.text)){
            setEmail({
                ...email,
                error: {
                    errMessage: "Email is not valid",
                    status: false
                }
            })
        } else {
            setEmail({
                ...email,
                error: {
                    errMessage: "Email is required",
                    status: true
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
        } else {
            setMessage({
                ...message,
                error: {
                    ...message.error,
                    status: true
                }
            })
        }

            setReadyForSend(!readyForSend)

    }

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    function checkFields(){
        if(name.error.status && email.error.status && message.error.status){
            sendData()
        }
    }

    // useEffect(() => {
    //     if(email.text !== "" && !validateEmail(email.text)){
    //         setEmail({
    //             ...email,
    //             error: {
    //                 errMessage: "Email is not valid",
    //                 status: true
    //             }
    //         })
    //     } else{
    //         setEmail({
    //             ...email,
    //             error: {
    //                 errMessage: "Email is required",
    //                 status: null
    //             }
    //         })
    //     }
    // },[email.text])

    useEffect(() => {
        checkFields()
    },[readyForSend])

    return (
        <section
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
                            {name.error.status === false &&
                                <span title={name.error.errMessage} className={s.errorMessage}>
                                    <UseAnimations animation={error} strokeColor={"#ea3434"} size={56}/>
                                </span>}
                            </span>

                    <span className={s.oneInputBlock}>
                        <input
                            type="text"
                            placeholder="Email Address"
                            value={email.text}
                            onChange={(e) => {
                                changeInputState(email, setEmail, e)
                                }
                            }
                        />
                        {email.error.status === false &&
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
                        {message.error.status === false &&
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