import React from "react";
import "./styles.scss";
import { IoMdMore } from "react-icons/io";
import { SuccessItemList } from "../../services/api";

export const SuccessItems = () => {
  return (
    <div className="container">
      <h3 className="containertitle">Os pães que mais fazem sucesso:</h3>
      <div className="containersuccessitems">
        <div className="handleitemssuccess">
          {SuccessItemList.items.map((item, index) => {
            return (
              <div className="itemsuccess" key={index}>
                <img id='photosuccessitem' src={item.photo} />
                <p className="title">{item.name}</p>
              </div>
            );
          })}
        </div>
        <div className="seemore">
          <button className="btnmore">
            Ver mais <IoMdMore size={32} />
          </button>
        </div>
      </div>
    </div>
  );
};
