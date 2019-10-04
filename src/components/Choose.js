import React from 'react';
import styled from 'styled-components';

const Style = styled.div`
.look{
    margin-top:1rem;
    font-weight: 300;
    font-size: 15px;
    line-height: 24px;
}
}
`;
const Choose = () => (
  <Style>
    <div className="section">
      <div className="container">
        <p className="tit margin has-text-weight-bold has-text-centered is-size-1">
          Why you should choose
        </p>
        <p className=" look has-text-centered">
          making it look like readable English. Many desktop publishing packages
          and web page editors now use Lorem Ipsum as their default model text,
          and a search for 'lorem ipsum' will uncover many web sites still.
        </p>
      </div>
    </div>
  </Style>
);
export default Choose;
