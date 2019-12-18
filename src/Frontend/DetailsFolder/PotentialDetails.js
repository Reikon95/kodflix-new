import React, { useEffect, useState } from 'react';

export default function Covers() {
    const [detail, setDetails] = useState([]);
    useEffect(() => {
        fetch('/rest/shows')
        .then(response => response.json())
        .then(json => {
            setDetails(json)
        })
    })
    console.log(detail);
    return (
        <>
        Hello world
        </>
    )

}