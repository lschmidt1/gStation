import React, { Component } from "react";
import Cards from "./components/cards";
import Home from "./components/home";
import Form from "./components/form";
import Help from "./components/help";
import Footer from "./components/footer";

import logo from "./styles/icons/logo.png";
import profile from "./styles/icons/avatar/profile.jpg";

import products from "./styles/icons/products.png";

import email from "./styles/icons/email2.png";
import ayudar from "./styles/icons/ayudar.png";

import "./app.scss";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      screen: "home",
      profile: false
    };
    this.changeScreen = this.changeScreen.bind(this);
    this.toggleProfile = this.toggleProfile.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.wrapperRef = "";
  }

  componentDidMount() {
    this._ismounted = true;
  }

  UNSAFE_componentWillMount() {
    document.addEventListener("mousedown", this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClick, false);
    this._ismounted = false;
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      alert("You clicked outside of me!");
    }
  }

  handleClick = e => {
    if (this.node && this._ismounted) {
      if (this.node.contains(e.target)) {
      } else if (this.state.profile) {
        this.toggleProfile();
      }
    }
  };
  changeScreen(screen) {
    this.setState({
      screen
    });
  }

  toggleProfile() {
    this.setState({
      profile: !this.state.profile
    });
  }

  render() {
    return (
      <body id="app">
        <nav id="sidenav">
          <a id="homeButton" onClick={() => this.changeScreen("home")}>
            {" "}
            <img src={logo} alt="logo" />
            <p>gStation</p>
          </a>
          <ul>
            <li id="profileImg" ref={node => (this.node = node)}>
              <img
                src={profile}
                onClick={() => this.toggleProfile()}
                alt="profileImg"
              />
              <div
                id="dropdownMenu"
                style={{
                  opacity: this.state.profile ? 1 : 0,
                  zIndex: this.state.profile ? 999999999999999999 : -1
                }}
              >
                <a>
                  <p>Leandro Schmidt</p>
                </a>
                <a>
                  <p>Carrito</p>
                </a>
                <a>
                  <p>Mi cuenta</p>
                </a>
              </div>
            </li>
            <li>
              <a id="navItem" onClick={() => this.changeScreen("cards")}>
                <p>Productos</p> <img src={products} alt="products" />
              </a>
            </li>
            <li>
              <a id="navItem" onClick={() => this.changeScreen("consulta")}>
                <p>Consulta</p> <img src={email} alt="consulta" />
              </a>
            </li>
            <li>
              <a id="navItem" onClick={() => this.changeScreen("ayuda")}>
                <p>Ayuda</p> <img src={ayudar} alt="ayuda" />
              </a>
            </li>
          </ul>
        </nav>
        <main>
          <Home
            id="home"
            visible={this.state.screen === "home" ? true : false}
          />
          <Cards
            id="cards"
            visible={this.state.screen === "cards" ? true : false}
          />
          <Form
            id="consulta"
            visible={this.state.screen === "consulta" ? true : false}
          />
          <Help
            id="help"
            visible={this.state.screen === "ayuda" ? true : false}
          />
        </main>
        <Footer></Footer>
      </body>
    );
  }
}
