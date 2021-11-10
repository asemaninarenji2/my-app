import React from "react";
function Backdrop(props) {
  return <div className="backdrop" onClick={props.cancelModal} />;
}

export default Backdrop;
