import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #0c0f38;
  padding: 3rem;
  margin-top: -22rem;
  .tex {
    color: ${props => props.theme.lightShades};
  }
  .bit{
      padding-top: 17rem;
  }
`;
const landing = () => (
  <Wrapper>
    <div className="columns">
      <div className="column bit is-half is-offset-one-quarter">
        <p className=" tex has-text-centered  is-size-1 has-text-weight-bold">
          Contact now
        </p>
        <p className=" tex has-text-centered margin is-size-4 has-text-weight-bold">
          Free Multipurpose Responsive Landing Page 2019
        </p>
        <p className=" tex has-text-centered is-size-6 line margin has-text-weight-light">
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quissed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis
        </p>
      </div>
    </div>
  </Wrapper>
);
export default landing;
