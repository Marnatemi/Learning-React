import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Column/Column.scss';
import Card from '../Card/Card.js';
import Container from '../Container/Container.js';

class SearchResults extends React.Component {

  static propTypes = {
    cards: PropTypes.array,
    changeSearchString: PropTypes.func,
  }

  render() {
    const {cards} = this.props;

    return(
      <Container>
        <section className={styles.component}>
          <div >
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />
            ))}
          </div>
        </section>
      </Container>
    );
  }
}

export default SearchResults;