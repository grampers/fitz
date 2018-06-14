import React from 'react';
import styled from 'styled-components';

const Contact = styled.div`
  background-color: #ffffcc;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  border: 2px solid gold;
  border-bottom: 0;
  padding: 30px;
`;

export default () => {
  return (
    <Contact>
      <form
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
        <input type="hidden" name="bot-field" />

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
      </form>
    </Contact>
  );
};

// const Contact = () => <Form />;

// export default Contact;
