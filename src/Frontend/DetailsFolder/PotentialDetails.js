import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';


export default function Covers() {
    const [detail, setDetails] = useState([]);
    const [welcomeMessage, setWelcomeMessage] = useState("Check back later, website under construction!");
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
            <div className="Details">
                <div className="content">
                <h1>{cover.name}</h1>
                <p>{cover.details}</p>
                <img src={cover.logo} alt={cover.name + ' logo'} />
            </div>
      <Link to='/'><p>Take me back!</p></Link>
      </div>
        </>
    )

}