import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Details.css'



export default function Covers(props) {
    const [detail, setDetail] = useState([]);
    let mediaId = props.match.params.details;

    useEffect(() => {
        fetch(`/rest/shows/${mediaId}`)
        .then(response => response.json())
        .then(json => {
            setDetail(json)
        })
    }, [mediaId])
    console.log(detail);
    
    if (detail[0] !== null && detail.length > 0) { 
        return (
        <>
            <div className="Details">
                <div className="content">
                
                <h1>{detail[0].name}</h1>
                
                {detail[0].details}
                <img src={require(`../Images/${detail[0].id}.jpg`)} alt='' />
            </div>
      <Link to='/'><p>Take me back!</p></Link>
      </div>
        </>
    )
    } else if (detail[0] === null) {
            return (
                <>
            <p>not found</p>
            <Redirect to="/not-found"/>
                </>
            )
    } else {
        return (
        <>
        LOADING
        </>
        );
    }

}