import React from 'react';
import { Button } from './button';

export const ButtonList = ({ breeds }) => <ul>
  {breeds.map(breed => <li key={breed}>
    <Button breedName={breed} onClick={() => console.log(breed)} />
  </li>)}
</ul>