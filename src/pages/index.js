import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Seo from '../components/Seo';
import NewHosting from '../components/NewHosting';
import Service from '../components/Service';
import CardContent from '../components/CardContent';
import Choose from '../components/Choose';
import SmallContent from '../components/SmallContent';
import Form from '../components/Form';
import Landing from '../components/Landing';
import Footer from '../components/Footer';
import Layout from '../components/Layout';

export const indexQuery = graphql`
  query indexQuery {
    contentfulIndex {
      title
      subtitle
      description
      titleTwo
      descriptionTwo {
        descriptionTwo
      }
      pik {
        file {
          url
        }
      }
      phototwo {
        file {
          url
        }
      }
    }
  }
`;
const Container = styled.div`
  background-color: #0c0f38;
  margin-top: -6rem;
  text-align: center;
  h1 {
    font-size: 3rem;
    font-weight: bold;
    line-height: 1.3;
    color: ${props => props.theme.lightShades};
  }
  .para1 {
    font-size: 2.5rem;
    line-height: 2;
    font-weight: 600;
    color: ${props => props.theme.mainBrandColor};
  }
  .columns {
    margin-top: 3rem;
  }
  .para2 {
    color: ${props => props.theme.lightShades};
  }
  .button get put {
    margin-bottom: 2rem;
  }
`;

export default class IndexPage extends React.Component {
  render() {
    const {
      data: { contentfulIndex: page },
    } = this.props;
    return (
      <Layout>
        <Seo title="Home" description="Welcome to GatsbyJs v1" />
        <Container>
          <div className="section">
            <div className="container">
              <div className="columns">
                <div className="column is-two-fifths has-text-left">
                  <h1 className="h1">{page.title}</h1>
                  <h1 className="para1">{page.subtitle}</h1>
                  <p className="para2">{page.description}</p>
                  <button className="button get margin is-size-5">
                    GET STARTED
                  </button>
                </div>
                <div className="column">
                  <img src={page.pik.file.url} alt="placeholder" />
                </div>
              </div>
            </div>
          </div>
        </Container>
        <NewHosting
          titleTwo={page.titleTwo}
          PhotoTwo={page.phototwo.file.url}
          descritionTwo={page.descriptionTwo.descriptionTwo}
        />
        <Service />
        <CardContent />
        <Choose />
        <SmallContent />
        <Form />
        <Landing />
        <Footer />
      </Layout>
    );
  }
}
