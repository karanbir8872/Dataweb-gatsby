import React from 'react';
import styled from 'styled-components';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';

const Section = styled.div`
  .container {
    margin-top: 4rem;
  }
  .padd {
    padding: 1.5rem;
  }
  .host {
    font-size: 57px;
    font-family: archivo, sans-serif;
    line-height: 1.3;
    margin-bottom: 3rem;
  }
  .main {
    margin-top: 5rem;
  }
  .mgg {
    margin-right: 15px;
    color: blue;
    font-size: 18px;
  }
  .icontext {
    font-size: 21px;
    margin-bottom: 17px;
  }
  .maincontent {
    margin-top: 10rem;
  }
  .mark {
    font-size: 25px;
    margin-left: 5rem;
    margin-top: 2rem;
  }
  .anderson {
    margin-left: 5rem;
    line-height: 2;
    font-size: 15px;
  }
  .web {
    padding: 16px;
    font-size: 20px;
    line-height: 1.4;
  }
  .imageas {
    margin-top: 43px;
    margin-left: 17px;
    height: 132px;
    width: 407px;
  }
  .tle {
    line-height: 1.5;
    font-size: 28px;
    margin-top: 2rem;
  }
  .iner {
    margin-top: 4rem;
  }
`;

const Contact = () => (
  <Layout>
    <Seo title="Contact Us" />
    <Section className="section">
      <div className="container">
        <p className="tit has-text-weight-bold margin has-text-centered is-size-1">
          Welcome To Hami
        </p>
        <p className="padd line has-text-centered is-size-4">
          Deploy your service infrastructure on our fully redundant, high
          performance cloud platform and benefit from its high reliability,
          security and enterprise feature set. Easily enhance the performance,
          security and reliability of your services with one of our managed
          cloud hosting products, free data migration included.
        </p>
        <div className="columns main is-centered is-variable is-8">
          <div className="column is-half">
            <img
              src="https://colorlib.com/preview/theme/hami/img/bg-img/4.jpg"
              alt="contact us"
            />
          </div>
          <div className="column is-half">
            <p className="host">
              We Offer Professional Affordable Web Hosting & Related Services
            </p>
            <p className="has-text-black icontext">
              <i className="fas fa-check mgg" />
              Reliability, Speed and Security
            </p>
            <p className="has-text-black icontext">
              <i className="fas fa-check mgg " />
              Free Web Tools & Applications
            </p>
            <p className="has-text-black icontext">
              <i className="fas fa-check mgg" />
              24/7 Award Winning Support
            </p>
          </div>
        </div>
        <div className="maincontent">
          <p className="tit has-text-weight-bold margin has-text-centered is-size-1">
            Our Management Team
          </p>
          <p className="padd line has-text-centered is-size-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
        </div>
      </div>
    </Section>
  </Layout>
);
export default Contact;
