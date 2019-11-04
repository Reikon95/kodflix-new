import React from 'react';
import Media from './Media';
import getCovers from './coversGet';
export default function Covers() {
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
