import React, { useEffect, useState } from 'react';
import Media from './Media';

export default function Covers() {
    const [gal, setGal] = useState([]);
    useEffect(() => {
        fetch('/rest/shows')
        .then(response => response.json())
        .then(json => {
            setGal(json)
        })
    }, [])
    
   
    console.log(gal)

    return (
        <>
         <div className="container">
          {
              gal.map(cover => (
                  <Media key={cover.id} id={cover.id} name={cover.name} logo={cover.logo} />
              ))
          }

        </div>
        </>
    );
        
}
