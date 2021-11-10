import React from "react";
function Modal(props) {
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={props.cancelModal}>
        Cancle
      </button>
      <button className="btn" onClick={props.confirmDelete}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
