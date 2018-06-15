import React from 'react';
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
`;

export default () => (
  // <Form>
  <div className="form-wrapper">
    <Form
      action="/success"
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <div>
        <label htmlFor="name">Name </label>
        <input type="text" name="name" id="name" />
      </div>
      <div>
        <label htmlFor="email">Email </label>
        <input type="text" name="email" id="email" />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          placeholder="Please include your contact phone number in your message"
        />
      </div>
      <input type="hidden" name="form-name" value="contact" />
      <div className="actions">
        <div>
          <input type="submit" value="Send Message" className="special" />
        </div>
        <div>
          <input type="reset" value="Clear Form" />
        </div>
        <div id="security">
          <p>
            Please Note: your message will be sent securely, and I will not
            share it with anyone without your consent.{' '}
          </p>{' '}
        </div>
      </div>
    </Form>
  </div>
  // </Form>
);
