import React from 'react';
import styled from 'styled-components';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Form from '../components/Form';
import Landing from '../components/Landing';

const Section = styled.div`
  .container {
    margin-top: 4rem;
  }
  .mgg {
    margin-right: 15px;
  }
  .contentinfo{
    font-size: 2rem;
    margin-bottom: 2rem;
    font-weight: 600;
  }
  .orcal{
    line-height: 2;
    font-size: 18px;
    margin-bottom: 2rem;
  }
  .bot{
    margin-bottom: 2rem;
  }
  .columns{
  margin-top: 8rem;
  margin-bottom: 10rem;
  }
`;

const Feature = () => (
  <Layout>
    <Seo title="Contact Us" />
    <Section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-one-quarter">
            <p className="contentinfo">Contact Info</p>
            <p className="orcal">
              Nullam lacinia ex eleifend orci portt-itor, suscipit interdum
              augue condi-mentum. Etiam pretium turpis eget nibh laoreet
              iaculis. Vivamus auctor mi eget odio feugiat.
            </p>
            <ul>
              <li>
                <p className="has-text-black bot">
                  <i className="fas fa-map-marker-alt mgg" />
                  203 Fake St. Mountain View, San Francisco, California, USA
                </p>
                <p className="has-text-black bot">
                  <i className="fas fa-phone mgg" /> +2 392 3929 210
                </p>
                <p className="has-text-black">
                  <i className="fas fa-envelope mgg" />
                  info@yourdomain.com
                </p>
              </li>
            </ul>
          </div>
          <div className="column">
          <div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">From</label>
  </div>
  <div class="field-body">
    <div class="field">
      <p class="control is-expanded has-icons-left">
        <input class="input" type="text" placeholder="Name"/>
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
      </p>
    </div>
    <div class="field">
      <p class="control is-expanded has-icons-left has-icons-right">
        <input class="input is-success" type="email" placeholder="Email" value="alex@smith.com"/>
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fas fa-check"></i>
        </span>
      </p>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label"></div>
  <div class="field-body">
    <div class="field is-expanded">
      <div class="field has-addons">
        <p class="control">
          <a class="button is-static">
            +44
          </a>
        </p>
        <p class="control is-expanded">
          <input class="input" type="tel" placeholder="Your phone number"/>
        </p>
      </div>
      <p class="help">Do not enter the first zero</p>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">Department</label>
  </div>
  <div class="field-body">
    <div class="field is-narrow">
      <div class="control">
        <div class="select is-fullwidth">
          <select>
            <option>Business development</option>
            <option>Marketing</option>
            <option>Sales</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label">
    <label class="label">Already a member?</label>
  </div>
  <div class="field-body">
    <div class="field is-narrow">
      <div class="control">
        <label class="radio">
          <input type="radio" name="member"/>
          Yes
        </label>
        <label class="radio">
          <input type="radio" name="member"/>
          No
        </label>
      </div>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">Subject</label>
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <input class="input is-danger" type="text" placeholder="e.g. Partnership opportunity"/>
      </div>
      <p class="help is-danger">
        This field is required
      </p>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">Question</label>
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <textarea class="textarea" placeholder="Explain how we can help you"></textarea>
      </div>
    </div>
  </div>
</div>
          </div>
        </div>
      </div>
    </Section>
    <Form />
    <Landing />
  </Layout>
);
export default Feature;
