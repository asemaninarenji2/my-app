import React from "react";
import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [modalIsOpen, setModalOpen] = useState(false);

  let deleteHandeler = () => {
    setModalOpen(true);
  };
  let confirmDelete = () => {
    console.log("DELETE CONFIRMED");
  };
  let cancelModal = () => setModalOpen(false);

  return (
    <div className="card">
      <h2>{props.text + " " + props.time}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandeler}>
          Delete
        </button>
      </div>
      {modalIsOpen && (
        <Modal cancelModal={cancelModal} confirmDelete={confirmDelete} />
      )}
      {modalIsOpen && <Backdrop cancelModal={cancelModal} />}
    </div>
  );
}

export default Todo;
