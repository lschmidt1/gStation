import React, { Component } from "react";

import "../app.scss";
import "../styles/home.scss";
import banner_geil from "../styles/banner/banner_geil.jpg";
import banner_ssd_1600x580px from "../styles/banner/banner_ssd_1600x580px.png";
import Banner_web_1600_x_580_r1_c1 from "../styles/banner/Banner_web_1600_x_580_r1_c1.jpg";
import banner_verta from "../styles/banner/banner_verta.jpg";
import banner_teclados from "../styles/banner/banner_teclados.jpg";
import flashprod1 from "../styles/icons/products/flashprod1.jpg";
import flashprod2 from "../styles/icons/products/flashprod2.jpg";
import flashprod3 from "../styles/icons/products/flashprod3.png";

export default class Home extends Component {
  render() {
    if (!this.props.visible) return "";
    else
      return (
        <div id="home">
          <div class="gallery-item regular-img-container">
            <img src={banner_geil} alt="" />
          </div>
          <div class="gallery-item slider-container">
            <div class="slide-holder">
              <img src={Banner_web_1600_x_580_r1_c1} alt="" />
              <img src={banner_ssd_1600x580px} alt="" />
              <img src={banner_verta} alt="" />
              <img src={banner_teclados} alt="" />
            </div>
          </div>
          <h1>FLASH SALES!</h1>
          <div id="gallery">
            <div id="galleryRow">
              <div>
                <img src={flashprod1} alt="prod1"></img>
                <h2>$15.599</h2>
              </div>
              <div>
                <img src={flashprod2} alt="prod1"></img>
                <h2>$7.999</h2>
              </div>
              <div>
                <img src={flashprod3} alt="prod1"></img>
                <h2>$1.999</h2>
              </div>
            </div>
            <div id="galleryRow">
              <div>
                <img src={flashprod1} alt="prod1"></img>
                <h2>$15.599</h2>
              </div>
              <div>
                <img src={flashprod2} alt="prod1"></img>
                <h2>$7.999</h2>
              </div>
              <div>
                <img src={flashprod3} alt="prod1"></img>
                <h2>$1.999</h2>
              </div>
            </div>
            <div id="galleryRow">
              <div>
                <img src={flashprod1} alt="prod1"></img>
                <h2>$15.599</h2>
              </div>
              <div>
                <img src={flashprod2} alt="prod1"></img>
                <h2>$7.999</h2>
              </div>
              <div>
                <img src={flashprod3} alt="prod1"></img>
                <h2>$1.999</h2>
              </div>
            </div>
            <div id="galleryRow">
              <div>
                <img src={flashprod1} alt="prod1"></img>
                <h2>$15.599</h2>
              </div>
              <div>
                <img src={flashprod2} alt="prod1"></img>
                <h2>$7.999</h2>
              </div>
              <div>
                <img src={flashprod3} alt="prod1"></img>
                <h2>$1.999</h2>
              </div>
            </div>
            <div id="galleryRow">
              <div>
                <img src={flashprod1} alt="prod1"></img>
                <h2>$15.599</h2>
              </div>
              <div>
                <img src={flashprod2} alt="prod1"></img>
                <h2>$7.999</h2>
              </div>
              <div>
                <img src={flashprod3} alt="prod1"></img>
                <h2>$1.999</h2>
              </div>
            </div>
            <div id="galleryRow">
              <div>
                <img src={flashprod1} alt="prod1"></img>
                <h2>$15.599</h2>
              </div>
              <div>
                <img src={flashprod2} alt="prod1"></img>
                <h2>$7.999</h2>
              </div>
              <div>
                <img src={flashprod3} alt="prod1"></img>
                <h2>$1.999</h2>
              </div>
            </div>
            <div id="galleryRow">
              <div>
                <img src={flashprod1} alt="prod1"></img>
                <h2>$15.599</h2>
              </div>
              <div>
                <img src={flashprod2} alt="prod1"></img>
                <h2>$7.999</h2>
              </div>
            </div>
          </div>
        </div>
      );
  }
}
