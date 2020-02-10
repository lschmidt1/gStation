import React, { Component } from "react";

import twitter from "../styles/icons/twitter.png";
import facebook from "../styles/icons/facebook.png";
import instagram from "../styles/icons/instagram.png";
import footerbackground from "../styles/footer/footerbackground.jpg";
import llamar from "../styles/icons/llamar.png";
import email from "../styles/icons/email.png";

import "../app.scss";
import "../styles/footer.scss";

export default class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <div id="footer1">
          <ul>
            <li>
              <h2>Catergorías</h2>
            </li>
            <li>
              <p>Placas de video</p>
            </li>
            <li>
              <p>Procesadores</p>
            </li>
            <li>
              <p>Memorias</p>
            </li>
            <li>
              <p>Almacenamiento</p>
            </li>
            <li>
              <p>Refrigeración</p>
            </li>
            <li>
              <p>Todas las categorías</p>
            </li>
          </ul>
          <ul>
            <li>
              <h2>Lo más buscado</h2>
            </li>
            <li>
              <p>Placas de video Nvidia</p>
            </li>
            <li>
              <p>Procesadores AMD</p>
            </li>
            <li>
              <p>Watercooling</p>
            </li>
            <li>
              <p>RGB</p>
            </li>
            <li>
              <p>Teclado Mecánico</p>
            </li>
            <li>
              <p>Mouse Gamer</p>
            </li>
          </ul>
          <ul>
            <div>
              <img src={llamar} alt="llamar"></img>
              <h1>0810-888-2712</h1>
            </div>
            <div>
              <div>
                <img src={email} alt="email"></img>
                <h2>Suscribite a nuestro Newsletter!</h2>
              </div>
              <div>
                <input type="text"></input>
                <button>Enviar</button>
              </div>
            </div>
          </ul>
        </div>
        <div id="footer2">
          <div>
            <p>Copyright 2018 gStation. All Rights Reserved.</p>
            <p>|</p>
            <p>Términos de uso</p>
          </div>
          <ul>
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebook} alt="facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagram} alt="instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitter} alt="twitter" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
