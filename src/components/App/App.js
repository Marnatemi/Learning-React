  
import React from 'react';
import List from '../List/List.js';
import styles from './App.scss';
import {pageContents, listData} from '../../data/dataStore.js';
// import Creator from '../Creator/Creator.js';

class App extends React.Component {
  // state = {
  //   lists: this.props.lists || [],
  // }

  // addList(title) {
  //   this.setState(state => (
  //     {
  //       lists: [
  //         ...state.lists,
  //         {
  //           key: state.lists.length ? state.lists[state.lists.length-1].key+1 : 0,
  //           title,
  //         }
  //       ]
  //     }
  //   ));
  // }

  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{pageContents.title}</h1>
        <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
        <List {...listData} />
        {/* {this.state.lists.map(({key, ...listData}) => (
          <List key={key} {...listData} />
        ))}
        <div className={styles.creator}>
          <Creator text={settings.ListCreatorText} action={title => this.addList(title)}/>
        </div> */}
      </main>
    );
  }
}

export default App;