import React from "react";
import ModalStyle from "./ModalStyle.scss";

export const Modal = ({ isOpen, onClose, children }) => {
  const onWrapperClick = (event) => {
    if (event.target.classList.contains("modal-wrapper")) onClose();
  };
  return (
    <>
      {isOpen && (
        <div className="modal">
          <div className="modal-wrapper" onClick={onWrapperClick}>
            <div className="modal-content">
              <button
                className="modal-close-button"
                onClick={() => {
                  onClose();
                }}
              ></button>
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
