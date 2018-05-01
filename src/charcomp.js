import React from "react";
import "./charcomp.css";

const CharComp = (props) => {
        return (
                <div onClick = { props.click } className = "wrapper" > { props.single } 
        </div>

        );
}

export default CharComp;
