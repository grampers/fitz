import React from 'react';
import Form from '../components/Form';
import Img from 'gatsby-image';
import Gallery from 'react-grid-gallery';

import signature from '.././assets/images/sig.png';
import shamrock from '.././assets/images/shamrock.png';
import styled from 'styled-components';

const PrimaryContent = styled.div`
  background-color: #ffffcc;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  border: 2px solid gold;
  border-bottom: 0;
  padding: 30px;
`;

const Modal = styled.div`
  border: 2px solid gold;
  border-top: 0;
  border-bottom: 0;
  background-color: #ffffcc;
  padding: 30px;
  padding-top: 0;
  ${'' /* padding-bottom: 0;*/}
  line-height:200%;

  .intro {
    font-style:normal;
    font-weight: 600;
  }
  p {
    padding-bottom: 0.5rem;
  }

  &#specimens {
    grid-column: 2 / span 1;
    grid-row: 3 / span 1;
  }

  &#art {
    overflow: auto;
    padding-top: 1px;
    margin: 0 auto;
    ${'' /* text-align: center;*/}
    border-bottom: 2px solid gold;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    > a {
      font-weight: normal;
      font-style: italic;
      ${'' /* color: #006400;*/}
    }
  }

  a {
    ${'' /* color: black;*/}
    font-style: italic;
    font-weight: bolder;
    cursor: pointer;
    color: #006400;
  }
  a#close {
    font-weight: 400;
    float: right;
  }

  ul {
    width: 80%;
    list-style-type: none;
    margin: 2rem auto;
  }
  ul li {
    border: 1px solid gold;
    border-radius: 5px;
    box-shadow: -3px -5px 10px #888888
    padding: 20px;
    padding-top: 10px;
    margin-bottom: 2rem;
  }
`;

const Close = styled.div`
  grid-column: 2 / span 1;
  grid-row: 4 / span 1;
  border-left: 2px solid gold;
  border-right: 2px solid gold;
  background-color: #ffffcc;
  padding: 30px;

  > p > a {
    color: #006400;
    cursor: pointer;
    font-weight: bolder;
  }
`;

const ContactModal = styled.div`
  grid-column: 2 / span 1;
  grid-row: 5 / span 1;
  background-color: #ffffcc;

  a#close {
    float: right;
    font-weight: 400;
    color: #006400;
    padding-right: 2rem;
  }
`;
const SignatureBlock = styled.div`
  grid-column: 2 / span 1;
  grid-row: 6 / span 1;
  background-color: #ffffcc;
  padding: 30px;
  border-left: 2px solid gold;
  border-right: 0px solid gold;

  img.signature {
    padding-top: 2rem;
  }
  img#shamrock {
    height: 65px;
    height: 65px;
    padding-left: 1.5rem;
  }

  > div a {
    cursor: pointer;
    color: #006400;
  }
`;

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showSpecimens: false,
      showArt: false,
      showContact: false
    };

    this.toggleSpecimens = this.toggleSpecimens.bind(this);
    this.toggleArt = this.toggleArt.bind(this);
    this.toggleContact = this.toggleContact.bind(this);
  }

  toggleSpecimens = () => {
    this.setState({ showSpecimens: !this.state.showSpecimens });
  };

  toggleArt = () => {
    this.setState({ showArt: !this.state.showArt });
  };

  toggleContact = () => {
    this.setState({ showContact: !this.state.showContact });
  };

  render(props) {
    const { data } = this.props;
    const photos = data.allFile.edges;
    // console.log('photos: ', photos);
    // console.log('photos array: ', Array.isArray(photos));

    const revisedPhotoArray = photos.map(img => {
      img.src = img.node.childImageSharp.sizes.src;
      img.thumbnail = img.node.childImageSharp.sizes.src;
      return img;
    });
    // console.log('modified array is ', revisedPhotoArray);

    return (
      <div>
        <PrimaryContent>
          <p>I am a Freelance Copywriter.</p>

          <p>
            It is my intention to contribute my writing talent to serving you
            and your clients better.{' '}
          </p>
          <p>
            I have 10 plus years of experience as a Copywriter in the Radio
            business …and, an additional 13 years as a licensed Realtor, during
            which time I managed all my own Marketing and copywriting …along
            with some assistance from my son Corey. My experience includes both
            Project-to-Project and Day to Day time lines.
          </p>
        </PrimaryContent>

        <Modal id="specimens">
          {!this.state.showSpecimens ? (
            <a onClick={this.toggleSpecimens}>
              Click here to View Sample Scripts
            </a>
          ) : (
            <a onClick={this.toggleSpecimens}>
              Click here to Close Sample Creative Scripts
            </a>
          )}

          {this.state.showSpecimens ? (
            <div>
              <ul>
                <li>
                  <p className="intro">
                    #7 - Garden City …which could be a long term client for
                    every season, with so much to talk & write about as each
                    season approaches… for all of us garden lovers.
                  </p>
                  <p />
                  <p>
                    "There’s Something Special about{' '}
                    <span style={{ fontWeight: 'bold' }}> Garden City!</span>{' '}
                    Garden lovers everywhere experience an Awakening as they
                    stroll through each and every row of flower and vegetable
                    plantings….
                  </p>
                  <p>
                    So many seeds and bulbs …trees and shrubs. Everything in
                    soil, compost, and fertilizer…Pots and Accessories
                    ...everything that’s needed for your special Garden. Your
                    little piece of heaven in the Garden World. In addition, the
                    manager and staff at{' '}
                    <span style={{ fontWeight: 'bold' }}> Garden City</span> are
                    so-well versed in the World of Planting and Care of all of
                    these plants … it’s really amazing! Always attentive to the
                    Needs of their Customers! It’s that little extra attention
                    at <span style={{ fontWeight: 'bold' }}> Garden City</span>{' '}
                    , that turns the Ordinary into the Extra-ordinary for Garden
                    Lovers!!
                  </p>

                  <p>
                    Open 6 days a week ...with various locations throughth the
                    City. Check out GardenCity.com"
                  </p>
                </li>
                <li>
                  <p className="intro">
                    #11 – Copy for Yuppie Puppy – Doggie Day Care & Spa. Open
                    with SE: dogs barking and playing, having fun…whatever you
                    think would set the scene…or Photos for print.
                  </p>

                  <p />
                  <p>
                    "Treat your pooch to Doggie Day Care with a difference!
                    <span style={{ fontWeight: 'bold' }}> YUPPY PUPPY</span> is
                    the place where every important pooch wants to be seen! A
                    Clean and comfy place… with a healthy air environment…
                    nutritious quality Foods… and Exercise Yards.
                    <span style={{ fontWeight: 'bold' }}>
                      {' '}
                      YUPPY PUPPY
                    </span>{' '}
                    loves your dog as much as you do…and, to prove that… they
                    also offer full grooming services at their “Pretty Puppy Day
                    Spa”!{' '}
                    <span style={{ fontWeight: 'bold' }}>
                      {' '}
                      YUPPY PUPPY
                    </span>{' '}
                    …where the best puppies go to Stay! Some Holiday Services
                    are also available. Located in Sidney, Victoria & Sooke."
                  </p>
                </li>
                <li>
                  <p className="intro">
                    #17 – A script for Greenhouses … Sure would be great for
                    indoor living on the Island. BG & SE suitable for
                    garden….and/or photos.
                  </p>

                  <p />
                  <div id="royal">
                    <p>
                      "The business of building Premium Greenhouses is a “given”
                      when you choose{' '}
                      <span style={{ fontWeight: 'bold' }}>
                        Royal Conservatories
                      </span>. Step into your indoor garden sanctuary…it’s a
                      world apart from everyday Stresses. Individually designed
                      and engineered for year-round use…these elegant Glass
                      Rooms Feature energy-saving systems. From Green houses and
                      Studios…to Kitchen Extensions…there is no limit to how
                      these buildings can be used.
                    </p>

                    <p>
                      Visit the{' '}
                      <span style={{ fontWeight: 'bold' }}>
                        Royal Conservatories{' '}
                      </span>
                      Showroom…where they are show-casing many designs for
                      viewing. Located on Old Sannich Rd…it is an experience in
                      itself!"
                    </p>
                  </div>
                </li>
                <li>
                  <p className="intro">
                    # 18 – Blair’s Window Treatments…featuring Shutters…I also
                    have Scripts for Blinds & Draperies…and photos for each…
                  </p>

                  <p />
                  <p>
                    Hello Room…I’m the “Shutter-Man”…I’m the “Guy”… that sets
                    the mood in your room. I regulate the Light…I show-off your
                    Views…I save your Furniture and Rugs from fading! I’m a
                    Shutter-bug really and a member of the family at{' '}
                    <span style={{ fontWeight: 'bold' }}>
                      Blair’s Window Treatments.
                    </span>{' '}
                    You can depend on us to make the most of your living space.
                  </p>

                  <p>
                    It’s an “Open and Shut” case of Privacy and Light with
                    Shutters from the Window Dressing People at{' '}
                    <span style={{ fontWeight: 'bold' }}>
                      Blair’s Window Treatments
                    </span>{' '}
                    …located on Blanchard & Cloverdale. You can also check out
                    their Web site at BlairsWindowTreatments.ca.
                  </p>
                </li>
              </ul>
              <a id="close" onClick={this.toggleSpecimens}>
                &lt;&lt; close samples &gt;&gt;
              </a>
            </div>
          ) : null}
          {/* </div> */}
        </Modal>

        <Close>
          <p>
            For further information, including additional sample Creative
            Scripts, please{' '}
            <a onClick={this.toggleContact}>
              Click Here to open my Contact Form.
            </a>
          </p>
        </Close>

        <ContactModal>
          {!this.state.showContact ? null : (
            <div>
              <Form />
              <a id="close" onClick={this.toggleContact}>
                &lt;&lt; close form &gt;&gt;
              </a>
            </div>
          )}
        </ContactModal>
        <SignatureBlock>
          <img className="signature" src={signature} alt="Mary Fitzpatrick" />
          <img id="shamrock" src={shamrock} />
          {!this.state.showArt ? (
            <div className="art">
              <a onClick={this.toggleArt}>
                P.S: If you would like to view some of my photography and some
                of my son's artwork, click here.
              </a>
            </div>
          ) : null}
        </SignatureBlock>

        <Modal id="art">
          {!this.state.showArt ? null : (
            <div>
              {/* <div style={{ width: '1000px' }}> */}
              <Gallery
                images={revisedPhotoArray}
                backdropClosesModal={true}
                enableLightbox={true}
                isOpen={false}
                lightboxWidth="1000"
              />
              {/* </div> */}
              <a id="close" onClick={this.toggleArt}>
                &lt;&lt; close art &gt;&gt;
              </a>
            </div>
          )}
          <p />
        </Modal>
        {/* <Gallery /> */}
      </div>
    );
  }
}

export default Home;

export const query = graphql`
  query ImagesQuery {
    # the filter is usefull if you have multiple source-filesystem instances
    # the name "images" is set in the gatsby-config

    allFile(
      filter: { sourceInstanceName: { eq: "img" } }
      sort: { fields: [name], order: ASC }
    ) {
      edges {
        node {
          id
          name
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            sizes(maxWidth: 1600) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`;
