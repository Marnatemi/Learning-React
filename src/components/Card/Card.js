import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.scss';

const Card = props => (

  <section className={styles.component}>
    <p>{props.title}</p>
  </section>

);

Card.propTypes = {
  title: PropTypes.string.isRequired,
};


export default Card
