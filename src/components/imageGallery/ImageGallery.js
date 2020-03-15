import React from "react";
import ImageGalleryItem from "../imageGalleryItem/ImageGalleryItem";

const ImageGallery = ({galleryItems,onImgClick}) => {
  return (
    <ul className="ImageGallery">
      {galleryItems.map(item=>(<ImageGalleryItem key={item.id} galleryItem={item} onImgClick={onImgClick}/>))}
    </ul>
  );
};

export default ImageGallery;
