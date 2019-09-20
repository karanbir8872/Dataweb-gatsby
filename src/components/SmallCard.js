import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  .til {
    font-size: 23px;
    padding: 18px;
    font-weight: 600;
    font-family: ${props => props.theme.primaryFontFamily};
  }
`;
const smallcard = props => (
  <Wrapper>
    <div className="card">
      <div className="card-content  has-text-centered">
        <img src={props.img} alt="Image" />
        <h3 className="til">{props.title}</h3>
        <p className="subtil line ">
          making it look like readable English. Many desktop publishing packages
          and web page editors now use Lorem Ipsum as their default model text,
          and a search for 'lorem ipsum' will uncover many web sites still
        </p>
      </div>
    </div>
  </Wrapper>
);
export default smallcard;
