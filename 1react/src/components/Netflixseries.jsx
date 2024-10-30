import React from 'react';
import { SeriesCrd } from './SeriesCrd';
import seriesData from "../api/seriesData.json"; 

const Netflixseries = () => {
  return (
    <ul className='grid grid-three--cols'>
      {seriesData.map((curElem) => (
        <SeriesCrd key={curElem.id} curElem={curElem} />
      ))}
    </ul>
  );
}

export default Netflixseries;
