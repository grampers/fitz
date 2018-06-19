import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  background-color: #01865b;
  font-style: italic;
  border-radius: 20px;

  @media only screen and (max-width: 930px) {
    #headshot {
      display: none;
      border: 3px solid red;
    }
    #section {
      margin-top: 2rem;
    }
  }
  @media only screen and (max-width: 682px) {
    #header img#logo {
      width: 75%;
      height: auto;
    }
  }
  @media only screen and (max-width: 435px) {
    grid-template-columns: 0px 1fr 0px;
    #header img#logo {
      margin: 0 0;
    }
    #contact {
      border: 0px solid gold;
    }
    #tagline {
      display: none;
    }
  }
`;
export default Container;
