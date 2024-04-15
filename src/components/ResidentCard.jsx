import React, { useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import './styles/residentCard.css';

const ResidentCard = ({url}) => {
    const [resident,getResident] = useFetch();
    useEffect(()=>{
    getResident(url);
    },[]); 

    console.log(resident);

    return (
        <article className='resident'>
            <figure className='resident——img'>
            <img src= {resident?.image} alt='resident photo'/>
            <figcaptio className='resident——status'>
                <div className={`resident——circle ${resident?.status}`}></div>
                <span>{resident?.status}</span>
            </figcaptio>
            </figure>
            <h3 className='resident——name'>{resident?.name}</h3>
            <hr className='resident——line'/>
            <ul className='resident——list'>
                <li className='resident——item'><span>Specie</span><span>{resident?.species}</span></li>
                <li className='resident——item'><span>Origin</span><span>{resident?.origin.name}</span></li>
                <li className='resident——item'><span>Eppisodes where appear</span><span>{resident?.episode.length}</span></li>
                
            </ul>
        </article>
    )
}

export default ResidentCard;
