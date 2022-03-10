import React from "react";
import "./styles.scss";
import { IoIosCreate } from "react-icons/io";
import { MsgList } from "../../services/api";

export const Messages = () => {
  return (
    <div className="container">
      <h3 className="containertitle">Oque estão pensando sobre o Meu Pão?</h3>
      <div className="containermessages">
        <div className="handlemessages">
          {MsgList.item.map((item, index) => {
            return (
              <div className="boxmessage">
                <div className="boxuser" key={index}>
                  <img id="userphoto" src={item.userPhoto} />
                  <p className="username">{item.userName}</p>
                </div>
                <span className="usermessage">{item.userMessage}</span>
              </div>
            );
          })}
        </div>
        <div className="writemessage">
          <button className="btnmessage">
            Conte-nos oque achou? <IoIosCreate size={32} />
          </button>
        </div>
      </div>
    </div>
  );
};
