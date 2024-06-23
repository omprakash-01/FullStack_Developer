import React from 'react';

const ImageModal = ({ isOpen, src, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={src} alt="" />
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
      </div>
    </div>
  );
};

export default ImageModal;
