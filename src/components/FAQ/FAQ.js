import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {faq} from '../../data/dataStore.js';
//import Proptypes from 'prop-types';

const FAQ = () => (

  <Container>
    <Hero titleText={faq.title} imageSrc={faq.image} />
    <p>{faq.description}</p>
  </Container>
);

// FAQ.proptypes = {
//   title: Proptypes.string,
//   image: Proptypes.string,
// };

export default FAQ;