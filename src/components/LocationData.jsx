import React from 'react';
import './styles/locationData.css';

const LocationData = ({location}) => {

  //console.log(location);

  return (
    <section className='location'>
      <h2 className='location——name'>{location?.name}</h2>

      <ul className='location——list'>
        <li className='location——item'><span>Type: </span><span>{location?.type}</span></li>
        <li className='location——item'><span>Dimension: </span><span>{location?.dimension}</span></li>
        <li className='location——item'><span>Population: </span><span>{location?.residents.length}</span></li>
      </ul>
    </section>
  )
}

export default LocationData;
