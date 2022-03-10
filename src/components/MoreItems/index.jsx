import React from "react";
import "./styles.scss";
import { IoMdMore } from "react-icons/io";
import { MoreItemsList } from "../../services/api";

export const MoreItems = () => {
  return (
    <div className="container">
      <h3 className="containertitle">Esse momento pode ficar melhor com:</h3>
      <div className="containermoreitems">
        <div className="handleitemsmore">
          {MoreItemsList.items.map((item, index) => {
            return (
              <div className="itemmore" key={index}>
                <img id='photomoreitem' src={item.photo} />
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
