import { connect } from 'react-redux';
import { addTodayData, toggleLoading, toggleTodayReady, toggleTodayError } from '../actions';
import { TodayList } from '../components/TodayList';

const mapStateToProps = (state) => {
  return { state: state }
}
const MapDispatchToProps = (dispatch) => {
  return {
    addTodayData: (todayData) => dispatch(addTodayData(todayData)),
    toggleTodayReady: (todayReady) => dispatch(toggleTodayReady(todayReady)),
    toggleTodayError: (todayError) => dispatch(toggleTodayError(todayError)),
    toggleLoading: (loading) => dispatch(toggleLoading(loading))
  }
} 

export default connect(
    mapStateToProps,
    MapDispatchToProps
)(TodayList);