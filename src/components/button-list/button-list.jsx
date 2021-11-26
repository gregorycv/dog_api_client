import React, { useState } from 'react';
import { Button } from './button';
import { Modal } from '../modal';
import { BREEDS_PER_PAGE } from '../../utils/constants';

const previous = -1;
const next = 1;

export const ButtonList = ({ breeds }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [modalBreed, setModalBreed] = useState('');

  const navigateTo = (step) => {
    const newCurrentPage = currentPage + step;
    if (
      newCurrentPage >= 0 &&
      newCurrentPage < Math.ceil(breeds.length / BREEDS_PER_PAGE)
    ) {
      setCurrentPage(newCurrentPage);
    }
  };

  const getBreedsToDisplay = () => {
    const startIdx = currentPage * BREEDS_PER_PAGE;
    const endIdx = startIdx + BREEDS_PER_PAGE;
    return breeds.slice(startIdx, endIdx);
  };

  const hideModal = () => setModalBreed('');

  return breeds ? (
    <>
      {modalBreed && <Modal breed={modalBreed} onClose={hideModal} />}
      <div className="navigation">
        <button
          className={currentPage === 0 ? 'disabled' : ''}
          onClick={() => navigateTo(previous)}
        >
          previous
        </button>
        <button
          className={
            currentPage === Math.floor(breeds.length / BREEDS_PER_PAGE)
              ? 'disabled'
              : ''
          }
          onClick={() => navigateTo(next)}
        >
          next
        </button>
      </div>
      <ul>
        {getBreedsToDisplay().map((breed) => (
          <li key={breed}>
            <Button breed={breed} onClick={() => setModalBreed(breed)} />
          </li>
        ))}
      </ul>
    </>
  ) : (
    <p>Loading breeds...</p>
  );
};
