
import { useEffect, useRef, useState } from 'react';
import './App.css';
import useFetch from './hooks/useFetch';
import LocationData from './components/LocationData';
import ResidentCard from './components/ResidentCard';

function App() {
   const [inputValue, setInputValue] = useState(Math.floor(Math.random()));
   const [location, getLocation, isLoading, hasError] = useFetch();

   useEffect(() => {
      const numRandom = Math.floor(Math.random() * 126) + 1;
      const url = `https://rickandmortyapi.com/api/location/${numRandom}`;
      getLocation(url);
   }, [inputValue]);

   const textInput = useRef();

   const handleSubmit = (event) => {
      event.preventDefault();
      setInputValue(textInput.current.value.toLowerCase().trim());
      textInput.current.value = ' ';
   };

   //console.log(location);
   return (
      <>
         {
            isLoading ?
               <h2>loading...</h2>
               :
               <div className='app'>
                  <h1>Rick and morty</h1>
                  <form className='app——form' onSubmit={handleSubmit}>
                     <input className='app——input' type='text' ref={textInput} />
                     <button className='app——btn'>search</button>
                  </form>
                  {
                     hasError || inputValue === '0' ?
                        <h2>hey! you must provide an id from 1 to 126</h2>
                        :
                        <>
                           <LocationData
                              location={location}
                           />
                           <div className ='app——container'>
                              {
                                 location?.residents.map(resident => (
                                    <ResidentCard
                                       key={resident}
                                       url={resident}
                                    />
                                 ))
                              }
                           </div>
                        </>
                  }
               </div>
         }
      </>
   );
}

export default App;


