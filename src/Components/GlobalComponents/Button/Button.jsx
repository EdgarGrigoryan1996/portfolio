import React, {useState} from 'react';

function Button(props) {
    const [hover, setHover] = useState(false)
    const style = {
        padding:"1rem 2.8rem",
        background:props.color,
        border:"none",
        borderRadius:"4rem",
        cursor:"pointer",
        transition:"all 0.4s ease",
        boxShadow: hover ? "none" : ("0 0 1rem " + props.color),
        fontWeight:"700",
        color:"#484848",
        fontSize:"16px"
    }
    return (
        <button
            style={style}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={(e) => props.onclick(e)}
        >
            {props.text}
        </button>
    );
}

export default Button;