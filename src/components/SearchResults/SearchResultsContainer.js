import {connect} from 'react-redux';
import SearchResults from './SearchResults.js';

import {getSearchedCards} from '../../redux/cardsRedux';
import {changeSearchString} from '../../redux/searchStringRedux';

const mapStateToProps = (state, props) => ({
  cards: getSearchedCards(state, props.match.params.searchString),

});

const mapDispatchToProps = (dispatch, props) => ({
  changeSearchString: () => dispatch(changeSearchString(props.match.params.searchString)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults); 