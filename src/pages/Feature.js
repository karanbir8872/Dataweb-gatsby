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
  .hosted {
    font-size: 3rem;
    margin-bottom: 3rem;
    font-weight: 600;
  }
  .tested {
    font-size: 20px;
    line-height: 2;
    margin-bottom: 3rem;
  }
  columns {
    margin-top: 6rem;
  }
  .tle {
    line-height: 1.5;
    font-size: 28px;
    margin-top: 1rem;
  }
  .tites{
      margin-top:8rem;
  }
  .padss{
    margin-bottom: 5rem;
  }
`;

const Feature = () => (
  <Layout>
    <Seo title="Contact Us" />
    <Section className="section">
      <div className="container">
        <div className="columns main is-centered is-variable is-8">
          <div className="column is-half">
            <img
              src="https://colorlib.com/preview/theme/ithost/img/about.jpg"
              alt="contact us"
            />
          </div>
          <div className="column is-half">
            <p className="hosted">Why choose our company?</p>
            <p className="tested">
              Nullam lacinia ex eleifend orci porttitor, suscipit interdum augue
              condimentum. Etiam pretium turpis eget nibh laoreet iaculis.
              Vivamus auctor mi eget odio feugiat, quis aliquet velit ornare.
              Integer egestas sit amet neque sed elementum. Fusce ut turpis
              felis. Etiam pretium pharetra augue, ac porttitor dolor consequat
              eget. Cras tempor suscipit enim vehicula ultrices. Mauris sed orci
              blandit, rhoncus massa non, tincidunt odio. Ut ullamcorper
              lobortis hendrerit
            </p>
            <button className="button is-success are-large is-size-4">
              Read More
            </button>
          </div>
        </div>
        <div className="maincontent">
          <p className="tites has-text-weight-bold margin has-text-centered is-size-1">
          What Clients Say?
          </p>
          <p className="padss line has-text-centered is-size-4">
          Our extensive expertise will make sure that yours is a SUCCESS STORY once again!
          </p>
        </div>
        <div class="columns iner">
  <div class="column">
  <div className="card">
  <div className="card-content">
      <span className="icon has-text-warning">
              <i className="fas fa-star" />
            </span>
            <span className="icon has-text-warning">
              <i className="fas fa-star" />
            </span>
            <span className="icon has-text-warning">
              <i className="fas fa-star" />
            </span>
            <span className="icon has-text-warning">
              <i className="fas fa-star" />
            </span>
            <span className="icon has-text-warning">
              <i className="fas fa-star" />
            </span>
            <span className="icon has-text-warning">
              <i className="fas fa-star" />
            </span>
    <p className="tle">
    By switching to Hami Anycast DNS system we were able to decrease the worldwide app latency immensely.
    </p>
  </div>
</div>
  </div>
  <div class="column">
  <div className="card">
  <div className="card-content">
  <span className="icon has-text-warning">
              <i className="fas fa-star" />
            </span>
            <span className="icon has-text-warning">
              <i className="fas fa-star" />
            </span>
            <span className="icon has-text-warning">
              <i className="fas fa-star" />
            </span>
            <span className="icon has-text-warning">
              <i className="fas fa-star" />
            </span>
            <span className="icon has-text-warning">
              <i className="fas fa-star" />
            </span>
            <span className="icon has-text-warning">
              <i className="fas fa-star" />
            </span>
    <p className="tle">
    By switching to Hami Anycast DNS system we were able to decrease the worldwide app latency immensely.
    </p>
  </div>
</div>
  </div>
  <div class="column">
  <div className="card">
  <div className="card-content">
  <span className="icon has-text-warning">
              <i className="fas fa-star" />
            </span>
            <span className="icon has-text-warning">
              <i className="fas fa-star" />
            </span>
            <span className="icon has-text-warning">
              <i className="fas fa-star" />
            </span>
            <span className="icon has-text-warning">
              <i className="fas fa-star" />
            </span>
            <span className="icon has-text-warning">
              <i className="fas fa-star" />
            </span>
            <span className="icon has-text-warning">
              <i className="fas fa-star" />
            </span>
    <p className="tle">
    By switching to Hami Anycast DNS system we were able to decrease the worldwide app latency immensely.
    </p>
  </div>
</div>
  </div>
  <div class="column">
  <div className="card">
  <div className="card-content">
  <span className="icon has-text-warning">
              <i className="fas fa-star" />
            </span>
            <span className="icon has-text-warning">
              <i className="fas fa-star" />
            </span>
            <span className="icon has-text-warning">
              <i className="fas fa-star" />
            </span>
            <span className="icon has-text-warning">
              <i className="fas fa-star" />
            </span>
            <span className="icon has-text-warning">
              <i className="fas fa-star" />
            </span>
            <span className="icon has-text-warning">
              <i className="fas fa-star" />
            </span>
    <p className="tle">
    By switching to Hami Anycast DNS system we were able to decrease the worldwide app latency immensely.
    </p>
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
