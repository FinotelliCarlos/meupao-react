import React from "react";
import "./styles.css";

export const Presentation = () => {
  return (
    <main className="box">
      <div className="presentationcontainer">
        <img className="outdoor" src="/assets/images/outdoor.svg" alt="outdoor com foto de varios pães"/>
        <div className="presentationtext">
          <p>Faz parte do seu café e do seu dia e para toda sua vida.</p>
        </div>
      </div>
    </main>
  );
};
