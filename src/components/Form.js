/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  .colr {
    padding: 2rem;
  }
  .box {
    background-color: #0c0f38;
    border-radius: 2rem;
  }
  .fild {
    padding: 2rem;
  }
`;

const Form = () => (
  <Section className="section">
    <div className="container">
      <div className="columns">
        <div
          className="column colr is-half
is-offset-one-quarter has-text-centered"
        >
          <div className="box">
            <div className="fild">
              <div className="field">
                <div className="control">
                  <input
                    className="input is-medium"
                    type="text"
                    placeholder="Name"
                  />
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <input
                    className="input is-medium"
                    type="text"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input
                    className="input is-medium"
                    type="text"
                    placeholder="Phone"
                  />
                </div>
              </div>
              <textarea className="textarea is-medium" placeholder="Message" />
              <a className="button is-rounded is-medium margin is-size-3">
                Send
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
);
export default Form;
