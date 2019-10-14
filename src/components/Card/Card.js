import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.scss';

const Card = props => {

  const {title} = props;
  

  return <section className={styles.component}>
    <p>{title}</p>
  </section>;

};

Card.propTypes = {
  title: PropTypes.string.isRequired,
};


export default Card;
