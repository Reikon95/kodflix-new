import React from "react";
import bttf from './bttf.jpg';

export default function Movie(props) {
    return (
        <figure>
            <img src={props.image} alt='bttf logo' />
        </figure>
    )
}