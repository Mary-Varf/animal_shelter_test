import { connect } from 'react-redux';
import { LoginForm } from '../components/LoginForm';
import { addTodayData } from '../actions/index';

const mapStateToProps = (state) => {
  return { state: state }
}
const MapDispatchToProps = (dispatch) => {
  return {
      addTodayData: (todayData) => dispatch(addTodayData(todayData)),
  }
} 

export default connect(
    mapStateToProps,
    MapDispatchToProps,
)(LoginForm);