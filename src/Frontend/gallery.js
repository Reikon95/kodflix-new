import React, { useEffect } from 'react';
import Media from './Media';
import getCovers from './coversGet';
export default function Covers() {

    useEffect(() => {
        async function request() {
        const response = await fetch('/rest/shows');
        const myJson = await response.json();
        console.log(JSON.stringify(myJson));
        }
        request()
    }, []);
    
    return (
        <>
         <div className="container">
          {
              getCovers().map(cover => (
                  <Media key={cover.id} id={cover.id} name={cover.name} logo={cover.logo} />
              ))
          }

        </div>
        </>
    );
}
