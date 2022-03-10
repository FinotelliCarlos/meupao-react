import React from "react";
import "./styles.scss";
import { BiX } from "react-icons/bi";

export const Modal = () => {
  return (
    <div className="modalcontainer">
      <div className="modalbox">
        <BiX className="close" size={40} />
        <div className="contentmodal">
          <></>
        </div>
      </div>
    </div>
  );
};
