  
import React from 'react';
import List from '../List/ListContainer';
import styles from './App.scss';
import PropTypes from 'prop-types';
// import Creator from '../Creator/Creator.js';

class App extends React.Component {

  static propTypes = {
    lists: PropTypes.array,
    title: PropTypes.node,
    subtitle: PropTypes.node,

  }

  render() {
    const {lists, title, subtitle} = this.props;
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        {lists.map(listData => ( <List key={listData.id} {...listData} />))}
      </main>
    );
  }
}

export default App;