import React from 'react';
import styled from 'styled-components';
import SmallCard from './SmallCard';

const Section = styled.div``;
const SmallContent = () => (
  <Section className="section">
    <div className="container">
      <div className="columns is-multiline">
        <div className="column is-4">
          <SmallCard
            img="https://html.design/demo/dataweb/images/why1.png"
            title="Powerful Features"
          />
        </div>
        <div className="column is-4">
          <SmallCard
            img="https://html.design/demo/dataweb/images/why2.png"
            title="Totaly Optimised"
          />
        </div>
        <div className="column is-4">
          <SmallCard
            img="https://html.design/demo/dataweb/images/why3.png"
            title="Worldwide Support"
          />
        </div>
      </div>
    </div>
  </Section>
);
export default SmallContent;
