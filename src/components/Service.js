import React from 'react';
import styled from 'styled-components';

const Service = styled.div`
  background-color: #0c0f38;
  padding: 3rem;
  margin-top: 2rem;
  .text {
    color: ${props => props.theme.lightShades};
  }
`;
const Service = () => (
  <Service>
    <div className="columns">
      <div className="column is-half is-offset-one-quarter">
        <p className=" text title is-size-1 has-text-centered">Best Service</p>
        <p className="text line margin is-size-6 has-text-centered">
          Lorem ipsum dolor sittem ametamngcing elit, per sed do eiusmoad
          teimpor sittem elit inuning ut sed.
        </p>
      </div>
    </div>
  </Service>
);
export default Service;
