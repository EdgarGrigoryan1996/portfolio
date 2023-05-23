import React from 'react';
import s from "./Contact.module.css"
import UseAnimations from "react-useanimations";
import checkmark from 'react-useanimations/lib/checkmark'
function SuccessMessagePopup(props) {
    return (
        <div className={s.popupWrapper}>
            <div className={s.popupBlock}>
                <UseAnimations animation={checkmark} speed={5}  size={256} strokeColor={"var(--skillTitle-color)"}/>
            </div>
        </div>
    );
}

export default SuccessMessagePopup;