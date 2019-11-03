import {connect} from 'react-redux';
import Home from './Home';



const mapStateToProps = state => ({
  lists: state.lists,
  title: state.app.title,
  subtitle: state.app.subtitle,
});

export default connect(mapStateToProps)(Home); 