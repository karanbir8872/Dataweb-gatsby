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
  .columns {
    display: unset;
  }
  button {
    margin-top: 2rem;
  }
`;

const encode = data => {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
};

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', phone: '', company: '', message: '' };
  }

  /* Here’s the juicy bit for posting the form submission */

  handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(() => {
        this.setState({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
        });
        alert('Success!');
      })
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, phone, company, message } = this.state;
    return (
      <Section className="section">
        <div className="container">
          <div className="columns">
            <form
              data-netlify="true"
              name="contact"
              onSubmit={this.handleSubmit}
            >
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
                          value={name}
                          name="name"
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>

                    <div className="field">
                      <div className="control">
                        <input
                          className="input is-medium"
                          type="text"
                          placeholder="Email"
                          value={email}
                          name="email"
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <div className="control">
                        <input
                          name="company"
                          className="input is-medium "
                          type="text"
                          value={company}
                          placeholder="Your company name"
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <div className="control">
                        <input
                          name="phone"
                          className="input is-medium"
                          placeholder="Phone"
                          type="tel"
                          value={phone}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <div className="control is-medium">
                        <textarea
                          name="message"
                          value={message}
                          className="textarea is-medium is-radiusless"
                          placeholder="Your message"
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <p className="has-text-white is-size-6">
                      In submitting this form you are agreeing to our
                      <span className="has-text-white has-text-weight-bold">
                        {'   '}terms and conditions
                      </span>
                    </p>
                    <button
                      type="submit"
                      className="button is-medium has-text-info"
                    >
                      <span className="is-size-4">Submit</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Section>
    );
  }
}
export default ContactForm;
