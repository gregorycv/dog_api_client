import React, { useState, useEffect, useCallback } from "react";
import { getRandomBreedImage } from "../services/api-service";

export const Modal = ({ breed, onClose }) => {
  const [imgUrl, setImgUrl] = useState("");

  const getNewImageUrl = useCallback(async () => {
    const newImgUrl = await getRandomBreedImage(breed);
    setImgUrl(newImgUrl);
  }, [breed]);

  useEffect(() => {
    getNewImageUrl();
  }, [getNewImageUrl]);

  return (
    <div className="modal-background">
      <div className="modal-content">
        <button onClick={onClose}>close</button>
        <button onClick={() => getNewImageUrl()}>get next image</button>
        <h3>Here's an image of {breed}</h3>
        {imgUrl ? (
          <img src={imgUrl} alt={breed} />
        ) : (
          <p>fetching an image...</p>
        )}
      </div>
    </div>
  );
};
