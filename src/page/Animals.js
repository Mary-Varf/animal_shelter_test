import { connect } from 'react-redux';
import { addAnimalsData, addNextPage } from '../actions/index';
import { AnimalsList } from '../components/AnimalsList'

const mapStateToProps = (state) => {
    return { state:state }
}
const MapDispatchToProps = (dispatch) => {
    return {
        addAnimalsData: (animalsData) => dispatch(addAnimalsData(animalsData)),
        addNextPage: (nextPage) => dispatch(addNextPage(nextPage))
    }
} 

export default connect(
    mapStateToProps,
    MapDispatchToProps
)(AnimalsList);
