import React from "react";

// import '../node_modules/basiclightbox/dist/basicLightbox.min.css';

const Modal = ({ path, onEscCloseModal, onOverlayCloseModal }) => {
    window.addEventListener('keydown', onEscCloseModal);
  return (
    <div className="Overlay" onClick={onOverlayCloseModal}>
      <div className="Modal" >
        <img src={path} alt="img" />
      </div>
    </div>
  );
};

export default Modal;


