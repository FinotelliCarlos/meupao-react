import React from "react";
import './styles.css'

export const Footer = () => {
  return (
    <footer className="footer">
      <ul className="list">
        <li className="listitem">Seja um cliente filiado</li>
        <li className="listitem">Fale conosco</li>
        <li className="listitem">Endereço fisico:</li>
        <li className="address">
          Travessa primeira, 824 , CEP: 002000-331, São Paulo - SP
        </li>
      </ul>
      <div className="social">
        <a id="link" href="https://www.facebook.com/">
          <img
            id="socialicon"
            src="/assets/social/facebook.svg"
            alt="Link Facebook"
          />
        </a>
        <a id="link" href="https://www.instagram.com/">
          <img id="socialicon" src="/assets/social/instagram.svg" alt="Link Instagram" />
        </a>
        <a id="link" href="https://www.linkedin.com/">
          <img id="socialicon" src="/assets/social/linkedin.svg" alt="Link Linkedin" />
        </a>
      </div>
    </footer>
  );
};
