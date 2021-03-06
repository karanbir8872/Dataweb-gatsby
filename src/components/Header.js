/* eslint global-require: 0 */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Section = styled.section`
  background-color: #0c0f38;
  padding: 1rem 1.5rem;
  font-family: ${props => props.theme.primaryFontFamily};

  .navbar {
    background-color: transparent;
  }
  .navbar-brand {
    margin-right: 20px;
    .navbar-item img {
      max-height: 3.75rem;
    }
  }
  .navbar-menu {
    @media screen and (max-width: 600px) {
      position: absolute;
      width: 100%;
      transition: 0.6s;
    }
  }
  .navbar-item {
    font-weight: 200;
    font-size: 16px;
    padding: 0 25px;
    color: ${props => props.theme.lightShades};
    :hover {
      color: ${props => props.theme.mainBrandColor};
      background-color: transparent;
    }
    @media only screen and (max-width: 600px) {
       {
        color: black;
      }
  }
  .navbar-burger {
    background-color: #1c1323;
    color: #fff;
    opacity: 0.6;
    border-radius: 4px;
  }
  .h1 {
    font-size: 3rem;
    font-weight: bold;
    line-height: 1.3;
    color: ${props => props.theme.lightShades};
  }
  .para1 {
    font-size: 2.5rem;
    line-height: 2;
    font-weight: 600;
    color: ${props => props.theme.mainBrandColor};
  }
  .columns {
    margin-top: 3rem;
  }
  .para2 {
    color: ${props => props.theme.lightShades};
  }
  .button get put {
    margin-bottom: 2rem;
  }
`;

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
    };
  }

  handleMobileMenu() {
    const { isActive } = this.state;

    this.setState({
      isActive: !isActive,
    });
  }

  render() {
    const { isActive } = this.state;

    return (
      <Section className="section">
        <div className="container">
          <nav
            className="navbar"
            role="navigation"
            aria-label="main navigation">
            <div className="navbar-brand">
              <Link className="navbar-item" to="/">
                <img
                  src="https://html.design/demo/dataweb/images/logo.png"
                  alt="site logo"
                />
              </Link>
              <a
                href="#"
                role="button"
                className={
                  isActive
                    ? 'navbar-burger burger mobile is-active'
                    : 'navbar-burger burger mobile'
                }
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
                onClick={() => this.handleMobileMenu()}>
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </a>
            </div>
            <div className={isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
              <div className="navbar-end">
                <Link to="/" className="navbar-item ">
                  Home
                </Link>
                <Link to="/Feature" className="navbar-item">
                  About
                </Link>
                <Link to="/contact" className="navbar-item">
                  Services
                </Link>
                <Link to="/LastPage" className="navbar-item">
                  Contact
                </Link>
                <Link to="/" className="navbar-item">
                  Sign Up
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </Section>
    );
  }
}
