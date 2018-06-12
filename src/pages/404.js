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

const NotFoundPage = props => (
  <PrimaryContent>
    <h1>Page NOT FOUND</h1>
    <p>You have tried to open a page that doesn&#39;t exist.</p>

    <p>
      <Link to="/">Please click here to return to my site</Link>
    </p>
  </PrimaryContent>
);

export default NotFoundPage;
