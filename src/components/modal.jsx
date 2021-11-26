import React, { useState, useEffect, useCallback } from 'react';
import { getRandomBreedImage } from '../services/api-service';

export const Modal = ({ breed, onClose }) => {
  const [imgUrl, setImgUrl] = useState('');

  const getNewImageUrl = useCallback(async () => {
    const newImgUrl = await getRandomBreedImage(breed);
    setImgUrl(newImgUrl);
  }, [breed]);

  useEffect(() => {
    getNewImageUrl();
  }, [getNewImageUrl]);

  return <div>
    <button onClick={onClose}>close</button>
    <button onClick={() => getNewImageUrl()}>get next image</button>
    <img src={imgUrl} alt={breed} />
  </div>
}