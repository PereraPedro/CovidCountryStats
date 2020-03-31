import React from "react";
import styled from "styled-components";

const NavBar = () => {
  const Nav = styled.nav`
    background-color: rgba(255, 0, 0, 0.4);
  `;

  return (
    <div>
      <Nav className="navbar navbar-light">
        <a className="navbar-brand icono" href="/">
          <img className="navbar-brand" src="./img/corona.jpg"></img>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/Finder">
                Find Country Data <span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
        </div>
      </Nav>
    </div>
  );
};

export default NavBar;
