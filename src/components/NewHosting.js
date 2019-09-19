import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  .padd {
    padding: 3rem;
  }
  .git {
    color: ${props => props.theme.darkShades};
    font-family: ${props => props.theme.primaryFontFamily};
    font-weight: bold;
  }
`;
const newhosting = () => (
  <Section className="section">
    <div className="container">
      <p className="git margin has-text-centered is-size-1">
        What’s New In Web Hosting
      </p>
      <div className="columns">
        <div className="column  has-text-centered">
          <img
            src="https://html.design/demo/dataweb/images/web.jpg"
            className="margin"
          />
        </div>
      </div>
      <p className="padd line has-text-centered is-size-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.
      </p>
      <div className="has-text-centered">
        <button className="button colo is-size-5">READ MORE</button>
      </div>
    </div>
  </Section>
);
export default newhosting;
