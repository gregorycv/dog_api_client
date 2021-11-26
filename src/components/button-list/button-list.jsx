import React, { useState, useEffect } from 'react';
import { Button } from './button';
import { Modal } from '../modal';
import { BREEDS_PER_PAGE } from '../../utils/constants';

const getPageItemsFromArray = (array, currentPage) => {
  const startIdx = currentPage * BREEDS_PER_PAGE;
  const endIdx = startIdx + BREEDS_PER_PAGE;
  return array.slice(startIdx, endIdx);
}

const previous = -1;
const next = 1;

export const ButtonList = ({ breeds }) => {
  const [currentBreeds, setCurrentBreeds] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [modalBreed, setModalBreed] = useState(''); 

  useEffect(() => {
    if (breeds) setCurrentBreeds(getPageItemsFromArray(breeds, currentPage));
  }, [breeds, currentPage]);

  const navigateTo = (step) => {
    const newCurrentPage = currentPage + step;
    if (newCurrentPage >= 0 && newCurrentPage < Math.ceil(breeds.length / BREEDS_PER_PAGE)) {
      setCurrentPage(newCurrentPage);
    }
  }

  const hideModal = () => setModalBreed('');

  return <>
    {modalBreed && <Modal breed={modalBreed} onClose={hideModal} />}
    <div>
      <button onClick={() => navigateTo(previous)}>previous</button>
      <button onClick={() => navigateTo(next)}>next</button>
    </div>
    <ul>
      {currentBreeds.map(breed => <li key={breed}>
        <Button breedName={breed} onClick={() => setModalBreed(breed)} />
      </li>)}
    </ul>
  </>
}