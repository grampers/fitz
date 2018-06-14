import React from 'react';
import styled from 'styled-components';

import Form from '../components/Form';

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
      <Form />
    </Contact>
  );
};

// const Contact = () => <Form />;

// export default Contact;
