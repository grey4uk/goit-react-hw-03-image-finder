import React from "react";

const ImageGalleryItem = ({ galleryItem,onImgClick }) => {
  // console.log(galleryItem);
  return (
   
    <li className="ImageGalleryItem">
      <img src={galleryItem.webformatURL} data-origin={galleryItem.largeImageURL} alt="img" className="ImageGalleryItem-image" onClick={onImgClick} />
    </li>
  );
};

export default ImageGalleryItem;
