import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  .box {
    background-color: #0c0f38;
    border: #cecfd7 solid 2px;
    border-radius: 20px;
  }
  .box:hover {
    background-color: #6f42c1;
  }
  .img {
    background-color: ${props => props.theme.lightShades};
    padding: 1rem;
    border-radius: 50px;
  }
  .subt {
    color: ${props => props.theme.lightShades};
    margin-top: -7px;
    line-height: 1.25;
    font-size: 19px;
  }
`;
const Card = props => (
  <Wrapper>
    <div className="box">
      <div className="card-content  line has-text-centered">
        <img src={props.img} alt="Image" className="img " />
        <p className="title">{props.title}</p>
        <p className="subt">
          Donec nec justo eget felis facilisis fermentum. Aliquam porttitor
          mauris sit amet orci.
        </p>
      </div>
    </div>
  </Wrapper>
);
export default Card;
