import React, { Component } from "react";

import "../app.scss";
import "../styles/cards.scss";

import prod1 from "../styles/icons/products/prod1.jpg";
import prod2 from "../styles/icons/products/prod2.jpeg";
import prod3 from "../styles/icons/products/prod3.jpg";
import prod4 from "../styles/icons/products/prod4.jpg";
import prod5 from "../styles/icons/products/prod5.jpg";
import prod6 from "../styles/icons/products/prod6.jpg";
import prod7 from "../styles/icons/products/prod7.jpg";

export default class Cards extends Component {
  render() {
    if (!this.props.visible) return "";
    else
      return (
        <div id="cards">
          <h1>Productos</h1>
          <div id="grilla">
            <div>
              {" "}
              <img src={prod1} alt="" />
              <div>
                <h2>VER</h2>
                <h1>|</h1>
                <h2>AGREGAR AL CARRITO</h2>
              </div>
            </div>
            <div>
              {" "}
              <img src={prod2} alt="" />
              <div>
                <h2>VER</h2>
                <h1>|</h1>
                <h2>AGREGAR AL CARRITO</h2>
              </div>
            </div>
            <div>
              {" "}
              <img src={prod3} alt="" />
              <div>
                <h2>VER</h2>
                <h1>|</h1>
                <h2>AGREGAR AL CARRITO</h2>
              </div>
            </div>
            <div>
              {" "}
              <img src={prod4} alt="" />
              <div>
                <h2>VER</h2>
                <h1>|</h1>
                <h2>AGREGAR AL CARRITO</h2>
              </div>
            </div>
            <div>
              {" "}
              <img src={prod5} alt="" />
              <div>
                <h2>VER</h2>
                <h1>|</h1>
                <h2>AGREGAR AL CARRITO</h2>
              </div>
            </div>
            <div>
              {" "}
              <img src={prod6} alt="" />
              <div>
                <h2>VER</h2>
                <h1>|</h1>
                <h2>AGREGAR AL CARRITO</h2>
              </div>
            </div>
            <div>
              {" "}
              <img src={prod7} alt="" />
              <div>
                <h2>VER</h2>
                <h1>|</h1>
                <h2>AGREGAR AL CARRITO</h2>
              </div>
            </div>
            <div>
              {" "}
              <img src={prod1} alt="" />
              <div>
                <h2>VER</h2>
                <h1>|</h1>
                <h2>AGREGAR AL CARRITO</h2>
              </div>
            </div>
            <div>
              {" "}
              <img src={prod2} alt="" />
              <div>
                <h2>VER</h2>
                <h1>|</h1>
                <h2>AGREGAR AL CARRITO</h2>
              </div>
            </div>
            <div>
              {" "}
              <img src={prod3} alt="" />
              <div>
                <h2>VER</h2>
                <h1>|</h1>
                <h2>AGREGAR AL CARRITO</h2>
              </div>
            </div>
            <div>
              {" "}
              <img src={prod4} alt="" />
              <div>
                <h2>VER</h2>
                <h1>|</h1>
                <h2>AGREGAR AL CARRITO</h2>
              </div>
            </div>
            <div>
              {" "}
              <img src={prod5} alt="" />
              <div>
                <h2>VER</h2>
                <h1>|</h1>
                <h2>AGREGAR AL CARRITO</h2>
              </div>
            </div>
            <div>
              {" "}
              <img src={prod6} alt="" />
              <div>
                <h2>VER</h2>
                <h1>|</h1>
                <h2>AGREGAR AL CARRITO</h2>
              </div>
            </div>
            <div>
              {" "}
              <img src={prod7} alt="" />
              <div>
                <h2>VER</h2>
                <h1>|</h1>
                <h2>AGREGAR AL CARRITO</h2>
              </div>
            </div>
            <div>
              {" "}
              <img src={prod1} alt="" />
              <div>
                <h2>VER</h2>
                <h1>|</h1>
                <h2>AGREGAR AL CARRITO</h2>
              </div>
            </div>
            <div>
              {" "}
              <img src={prod2} alt="" />
              <div>
                <h2>VER</h2>
                <h1>|</h1>
                <h2>AGREGAR AL CARRITO</h2>
              </div>
            </div>
            <div>
              {" "}
              <img src={prod3} alt="" />
              <div>
                <h2>VER</h2>
                <h1>|</h1>
                <h2>AGREGAR AL CARRITO</h2>
              </div>
            </div>
            <div>
              {" "}
              <img src={prod4} alt="" />
              <div>
                <h2>VER</h2>
                <h1>|</h1>
                <h2>AGREGAR AL CARRITO</h2>
              </div>
            </div>
            <div>
              {" "}
              <img src={prod5} alt="" />
              <div>
                <h2>VER</h2>
                <h1>|</h1>
                <h2>AGREGAR AL CARRITO</h2>
              </div>
            </div>
            <div>
              {" "}
              <img src={prod6} alt="" />
              <div>
                <h2>VER</h2>
                <h1>|</h1>
                <h2>AGREGAR AL CARRITO</h2>
              </div>
            </div>
            <div>
              {" "}
              <img src={prod7} alt="" />
              <div>
                <h2>VER</h2>
                <h1>|</h1>
                <h2>AGREGAR AL CARRITO</h2>
              </div>
            </div>
          </div>
        </div>
      );
  }
}
