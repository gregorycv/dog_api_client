import React, { useState, useEffect } from 'react';
import { getAllBreeds } from '../services/api-service';
import { ButtonList } from './button-list/button-list';

export const Home = () => {
  const [breeds, setBreeds] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await getAllBreeds();
      setBreeds(Object.keys(data));
    })();
  }, []);

  console.log(breeds);
  console.log('home');

  return <div className='home'>
    <ButtonList breeds={breeds}/>
  </div>;
}