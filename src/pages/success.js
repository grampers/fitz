import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const PrimaryContent = styled.div`
  background-color: #ffffcc;
  border-radius: 10px;
  border: 2px solid gold;
  border-bottom: 0;
  padding: 30px;
  ${'' /* padding-bottom: 0;*/} grid-column: 2 / span 1;
  grid-row: 2 / span 1;

  a {
    color: green;
  }

  @media only screen and (max-width: 435px) {
    padding: 5px;
  }
`;
const Success = props => (
  <PrimaryContent>
    <h1>Success!!</h1>
    <p>
      Your message is on the way to me by email. I'll get in touch just as soon
      as I possibly can.
    </p>
    <p>Thank you for getting in touch.</p>

    <p>
      <Link to="/">Return to my site</Link>
    </p>
  </PrimaryContent>
);

export default Success;
