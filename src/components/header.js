import React from 'react';
import Link from 'gatsby-link';
import headshot from '.././assets/images/m_fitzpatrick.png';
import logo from '.././assets/images/mf_logo_600.png';
import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 280px;

  div #tagline {
    margin-top: -1rem;
    padding-left: 2rem;
    color: white;
    font-style: italic;
  }

  @media only screen and (max-width: 560px) {
    #headshot {
      display: none;
    }
    #logo {
      max-width: 75%;
      margin: 0 auto;
      padding-top: 20px;
    }
    #section {
      margin-top: 2rem;
    }
  }
`;

export default props => {
  return (
    <Header>
      <div id="headshot">
        <Link to="/">
          <img src={headshot} id="headshot" alt="Mary Fitzpatrick" />
        </Link>
      </div>
      <div id="logo">
        <Link to="/">
          <img src={logo} alt="Mary Fitzpatrick" />
        </Link>

        <div id="tagline">
          ... for all of your Copywriting Needs on Vancouver Island!
        </div>
      </div>
      <div />
    </Header>
  );
};
