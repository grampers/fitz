import React from 'react';
import FormErrors from '../components/FormErrors';
import styled from 'styled-components';

const Form = styled.form`
  max-width: 600px;
  margin: 0 auto;
  border: 2px solid gold;
  border-radius: 10px;
  padding: 20px;
  input[type='text'],
  select,
  textarea {
    border-radius: 5px;
    border: 1px solid gold;
    box-sizing: border-box;
    margin: 0 auto;
    width: 100%;
  }
  textarea {
    display: inline-block;
  }
  input[type='submit'] {
    width: 100%;
    background-color: #01865b;
    color: white;
    padding: 12px 20px;
    margin-right: 6px;

    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  input[type='submit']:hover {
    background-color: rgb(16, 157, 13);
  }
  input[type='submit']:disabled {
    background-color: rgba(16, 157, 13, 0.2);
  }
  input[type='text'] {
  }
  input[type='reset'] {
    padding: 12px 20px;
    margin-left: 6px;
    background-color: transparent;
    border: 1px solid gold;
    border-radius: 4px;
    width: 100%;
  }
  label {
    display: block;
    padding-top: 0.5rem;
    ${'' /* margin-right: 2rem;*/};
  }
  #security {
    font-weight: bold;
    font-size: 80%;
    padding: 10px 20px 0 20px;
  }
  p#required {
    font-size: 80%;
  }
`;

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      formErrors: { email: '', name: '', message: '' },
      emailValid: false,
      nameValid: false,
      messageValid: false,
      formValid: false
    };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.reset = this.reset.bind(this);
  }

  reset = e => {
    console.log('resetting the form');
    this.setState({
      name: '',
      email: '',
      message: '',
      formErrors: { email: '', name: '', message: '' },
      emailValid: false,
      nameValid: false,
      messageValid: false,
      formValid: false
    });
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let nameValid = this.state.nameValid;
    let messageValid = this.state.messageValid;

    switch (fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid
          ? ''
          : ' seems invalid. Please check it.';
        break;
      case 'name':
        nameValid = value.length >= 2;
        fieldValidationErrors.name = nameValid
          ? ''
          : ' should be at least 2 characters';
        break;
      case 'message':
        messageValid = value.length >= 7;
        fieldValidationErrors.message = messageValid
          ? ''
          : ' needs to be at least 7 characters long';
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        nameValid: nameValid,
        messageValid: messageValid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.emailValid && this.state.nameValid && this.state.messageValid
    });
  }
  errorClass(error) {
    return error.length === 0 ? '' : 'has-error';
  }

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => this.validateField(name, value));
    console.log('inputfor: ', `${name} ${value}`);
  }

  render() {
    console.log('state is ', this.state);
    return (
      <div className="form-wrapper">
        <Form
          action="/success"
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onChange={this.handleUserInput}
        >
          <div>
            <FormErrors formErrors={this.state.formErrors} />
          </div>
          <div>
            <label htmlFor="name">Name&nbsp;&#42;</label>
            <input
              type="text"
              name="name"
              id="name"
              value={this.state.name}
              autoFocus
            />
          </div>
          <div>
            <label htmlFor="email">Email&nbsp;&#42; </label>
            <input
              type="text"
              name="email"
              id="email"
              value={this.state.email}
            />
          </div>
          <div>
            <label htmlFor="message">Message&nbsp;&#42;</label>
            <textarea
              name="message"
              id="message"
              placeholder="Please include your contact phone number in your message"
              value={this.state.message}
            />
          </div>
          <input type="hidden" name="form-name" value="contact" />
          <label style={{ display: 'none' }}>
            Not for humans
            <input name="bot-field" />
          </label>
          <div className="actions">
            <div>
              <input
                type="submit"
                value="Send Message"
                className="special"
                disabled={!this.state.formValid}
              />
            </div>
            <div>
              <input
                type="reset"
                onClick={this.reset.bind(this)}
                value="Clear Form"
              />
            </div>
            <div id="security">
              <p>
                Please Note: your message will be sent securely, and I will not
                share it with anyone without your consent.{' '}
              </p>{' '}
            </div>
            <p id="required">&#42; required field</p>
          </div>
        </Form>
      </div>
    );
  }
}

// <Form>

// </Form>
// );
