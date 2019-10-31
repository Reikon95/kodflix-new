import React from "react";

export default function Movie(props) {
    return (
        <>
        <figure>
            <img src={props.image} alt='{props.image} cover' />
        </figure>
        </>
    )
}

