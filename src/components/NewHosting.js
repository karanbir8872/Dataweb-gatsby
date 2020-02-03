import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  .padd {
    padding: 3rem;
  }
`;
class NewHosting extends React.Component {
  render() {
    return (
      <Section className="section">
        <div className="container">
          <p className="tit has-text-weight-bold margin has-text-centered is-size-1">
            {this.props.titleTwo}
          </p>
          <div className="columns">
            <div className="column  has-text-centered">
              <img src={this.props.PhotoTwo} className="margin" />
            </div>
          </div>
          <p className="padd line has-text-centered is-size-6">
            {this.props.descritionTwo}
          </p>
          <div className="has-text-centered">
            <button className="button colo is-size-5">READ MORE</button>
          </div>
        </div>
      </Section>
    );
  }
}
export default NewHosting;
