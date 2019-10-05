import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const Section = styled.div`
  background-color: #0c0f38;
`;
const CardContent = () => (
  <Section className="section">
    <div className="container">
      <div className="columns is-multiline">
        <div className="column is-4">
          <Card
            img="https://html.design/demo/dataweb/images/service1.png"
            title="Shared Hosting"
          />
        </div>
        <div className="column is-4">
          <Card
            img="https://html.design/demo/dataweb/images/service2.png"
            title="Dedicated Hosting"
          />
        </div>
        <div className="column is-4">
          <Card
            img="https://html.design/demo/dataweb/images/service3.png"
            title="Domain Registration"
          />
        </div>
        <div className="column is-4">
          <Card
            img="https://html.design/demo/dataweb/images/service4.png"
            title="VPS Hosting"
          />
        </div>
        <div className="column is-4">
          <Card
            img="https://html.design/demo/dataweb/images/service5.png"
            title="Cloud Hosting"
          />
        </div>
        <div className="column is-4">
          <Card
            img="https://html.design/demo/dataweb/images/service6.png"
            title="Reseller Hosting"
          />
        </div>
      </div>
      <div className="has-text-centered">
        <button className="button getted margin is-size-5 ">READ MORE</button>
      </div>
    </div>
  </Section>
);
export default CardContent;
