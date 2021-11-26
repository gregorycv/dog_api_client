import React, { useState, useEffect } from 'react';
import { getAllBreeds } from '../services/api-service';
import { ButtonList } from './button-list';

export const Home = () => {
  const [breeds, setBreeds] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await getAllBreeds();
      setBreeds(Object.keys(data));
    })();
  }, []);

  console.log(breeds);

  return breeds ? <ButtonList breeds={breeds} /> : <p>Loading...</p>
}