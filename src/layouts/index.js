import React from 'react';
import PropTypes from 'prop-types';
import Container from '../components/Container';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Header from '../components/header';

const TemplateWrapper = styled.div`
  background-color: #01865b;
  padding-top: 20px;
  margin-top: 20px;
  border-radius: 20px;
  max-width: 1170px;
  margin: 20px auto;
  position: relative;
`;

// export default ({ children, data }) => {
export default class extends React.Component {
  render(props) {
    const { children, data } = this.props;

    return (
      <TemplateWrapper>
        <Helmet
          title="Mary Fitzpatrick Copywriter"
          meta={[
            {
              name: 'description',
              content:
                'Freelance Copywriting Services for Business in Victoria, BC'
            },
            {
              name: 'keywords',
              content: 'copywriter, radio spots, magazine spots'
            }
          ]}
        />
        <Header />
        <Container>{this.props.children()}</Container>
      </TemplateWrapper>
    );
  }
}
TemplateWrapper.propTypes = {
  children: PropTypes.array
};

export const pageQuery = graphql`
  query HeaderImageQuery {
    headerImage: imageSharp(id: { regex: "/header/" }) {
      sizes(maxWidth: 740) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
