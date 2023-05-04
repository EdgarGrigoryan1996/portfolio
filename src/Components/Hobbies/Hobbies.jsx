import React, {useEffect, useRef, useState} from 'react';
import s from "./Hobbies.module.css"
import g from "../../global.module.css";
import animateElementsToScroll from "../../Utils/Functions/AnimateElementsToScroll";
import {BiFootball} from "react-icons/bi";
import {TbDeviceGamepad2} from "react-icons/tb";
import {BsMusicNoteBeamed} from "react-icons/bs";
import football from "../../assets/images/football.jpg";
import fifa from "../../assets/images/fifa.jpg";
import music from "../../assets/images/music.jpg"
import Hobbie from "./Hobbie";
function Hobbies(props) {
    const hobbies = [
        {
            title:"Football",
            background:football,
            icon:<BiFootball />,
            description:"Football is not just a game, it's a passion that can occupy your free time and fill it with excitement and joy. For me, playing football is one of the best ways to spend my free time. Whether it's a pick-up game with friends or a more organized match, I always enjoy the thrill of being on the pitch and competing against others.\n" +
                "Playing football is a great way to stay active and healthy, and it's also a great way to make new friends and bond with existing ones. It requires teamwork, communication, and strategy, which can help you develop important life skills that you can use in other areas of your life.\n" +
                "In addition to playing football, I also enjoy watching matches on TV or online. Following my favorite teams and players is a great way to stay connected to the sport and learn more about its history and culture.\n" +
                "Overall, football is a wonderful way to spend your free time, whether you're playing or watching. It's a sport that can bring people together and provide endless hours of fun and entertainment.",
        },
        {
            title:"Playing Fifa",
            background:fifa,
            icon:<TbDeviceGamepad2 />,
            description:"Everyone needs some downtime to recharge and relax, and for me, that usually means playing FIFA. When I have some free time, I love to fire up my console and play a few matches against the computer or my friends. It's a great way to escape from the stresses of daily life and immerse myself in a different world for a while.\n" +
                "I find that playing FIFA helps me to unwind and clear my mind, allowing me to return to my work or other responsibilities with a renewed sense of energy and focus. It's also a fun way to connect with others who share my passion for the game, whether we're playing together in person or online.\n" +
                "Overall, FIFA is one of my favorite ways to spend my free time, and I always look forward to the opportunity to kick back and enjoy some gaming.",
        },
        {
            title:"Music",
            icon:<BsMusicNoteBeamed />,
            background:music,
            description:"For many people, listening to music is a favorite pastime that can provide a sense of comfort and relaxation during their free time. Whether you enjoy listening to music while you work, exercise, or just unwind at home, it's a great way to enhance your mood and lift your spirits.\n" +
                "Listening to music can also have a positive impact on your mental and emotional well-being. It can help reduce stress and anxiety, improve your mood, and even enhance your cognitive function. Music has the power to evoke powerful emotions and memories, making it a powerful tool for self-expression and connection with others.\n" +
                "So whether you're listening to your favorite artist on repeat, discovering new music, or attending a live concert, listening to music is a wonderful way to spend your free time. So put on your headphones, turn up the volume, and let the music take you away!",
        },
    ];

    const hobbiesTitleRef = useRef(null);
    const [scrollTop, setScrollTop] = useState(0);


    useEffect(() => {
        const handleScroll = event => {
            animateElementsToScroll(scrollTop,setScrollTop,hobbiesTitleRef,'animate__zoomIn','animate__zoomOut',`${s.hobbiesTitleShow}`)

        }
        window.addEventListener('scroll',handleScroll)
        return () => {
            window.removeEventListener('scroll',handleScroll)
        }

    })

    return (
        <section
            className={s.hobbies}
            id="hobbies"
        >

            <h2 className={s.hobbiesTitle} ref={hobbiesTitleRef}>My <span className={g.animatedText}>Hobbies</span></h2>

            <div className={s.hobbiesContent}>
                {hobbies.map((hobbie) => {
                    return (
                        <Hobbie hobbie={hobbie}/>
                    )
                })}
            </div>



        </section>
    );
}

export default Hobbies;