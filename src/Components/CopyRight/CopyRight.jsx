import React from 'react';
import s from "./CopyRight.module.css";
import {AiOutlineCopyrightCircle} from "react-icons/ai";

function CopyRight(props) {
    return (
        <div className={s.copyRight}>
            <pre>Copyright <AiOutlineCopyrightCircle /> 2023.  All right reserved</pre>
        </div>
    );
}

export default CopyRight;