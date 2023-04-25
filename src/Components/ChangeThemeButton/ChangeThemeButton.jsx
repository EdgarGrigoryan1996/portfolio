import React, {useState} from 'react';
import s from "./ChangeThemeButton.module.css"
import {BsFillMoonStarsFill, BsFillSunFill, BsMoonStarsFill, BsSun} from "react-icons/bs";
function ChangeThemeButton(props) {
    const [currentTheme, setCurrentTheme] = useState("dark")

    function changeTheme() {
        if (currentTheme === "dark") {
            document.documentElement.style.setProperty('--bg-color', '#fff');
            document.documentElement.style.setProperty('--second-bg-color', '#323946');
            document.documentElement.style.setProperty('--text-color', '#333333');
            document.documentElement.style.setProperty('--main-color', '#0ef');
            setCurrentTheme("light")
        } else {
            document.documentElement.style.setProperty('--bg-color', '#1f242d');
            document.documentElement.style.setProperty('--second-bg-color', '#323946');
            document.documentElement.style.setProperty('--text-color', '#ffffff');
            document.documentElement.style.setProperty('--main-color', '#0ef');
            setCurrentTheme("dark")
        }
    }
        return (
            <div
                className={s.themeButtonBox + " " + (currentTheme === "dark" ? s.darkMode : s.lightMode)}
                title={"Change Theme"}
                onClick={changeTheme}
            >
                <div className={s.currentWeather}>
                    <div className={s.sun}><BsFillSunFill /></div>
                    <div className={s.moon}><BsMoonStarsFill /></div>
                </div>

                <div className={s.buttonCircle + " " + (currentTheme === "dark" ? s.circleDark : s.circleLight)}></div>
            </div>
        );
}

export default ChangeThemeButton;