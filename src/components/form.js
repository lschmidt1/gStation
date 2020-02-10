import React, { Component } from "react";

import "../app.scss";
import captcha from "../styles/icons/captcha.png";
import "../styles/form.scss";

export default class Form extends Component {
  render() {
    if (!this.props.visible) return "";
    else
      return (
        <form id="form">
          <div id="container">
            <h1>Consulta</h1>
            <div>
              <label>
                <p>Nombre</p>
              </label>
              <input type="text" />
            </div>
            <div>
              <label>
                <p>Edad</p>
              </label>
              <input type="number" />
            </div>
            <div>
              <label>
                <p>Sexo</p>
              </label>
              <div>
                <div>
                  <input type="radio" />
                  <p>Hombre</p>
                </div>
                <div>
                  <input type="radio" />
                  <p>Mujer</p>
                </div>
              </div>
            </div>
            <div>
              <label>
                <p>Como llegaste a gStation?</p>
                <input list="reasons" name="reasons" />
              </label>
              <datalist id="reasons">
                <option value="Recomendación de un conocido" />
                <option value="Me llegó un flyer" />
                <option value="Me encontré el negocio" />
                <option value="Mercado Libre" />
                <option value="Google" />
              </datalist>
            </div>
            <div>
              <label>
                <h2>De qué se trata tu consulta?</h2>
              </label>
              <div>
                <input type="checkbox" name="vehicle1" value="Bike" />
                <p> Consulta sobre un producto</p>
              </div>
              <div>
                <input type="checkbox" name="vehicle2" value="Car" />{" "}
                <p>Consulta sobre stock</p>
              </div>
              <div>
                <input type="checkbox" name="vehicle3" value="Boat" checked />{" "}
                <p>Problemas con una compra</p>
              </div>
              <div>
                <input type="checkbox" name="vehicle3" value="Boat" checked />{" "}
                <p>Otro</p>
              </div>
            </div>
            <div>
              <label><p>Detallanos tu consulta: </p></label>
              <textarea placeholder="Comentario"></textarea>
            </div>
            <div>
              <img src={captcha} alt="captcha"></img>
              <label>
                <p>Captcha:</p>
              </label>
              <input type="text" />
            </div>
            <div>
              <button>Enviar</button>
            </div>
          </div>
        </form>
      );
  }
}
