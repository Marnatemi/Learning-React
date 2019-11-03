import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {info} from '../../data/dataStore.js';

const Info = () => (
  <Container>
    <Hero titleText={info.title} imageSrc={info.image} />
    <p>{info.description}</p>
  </Container>
);

export default Info;