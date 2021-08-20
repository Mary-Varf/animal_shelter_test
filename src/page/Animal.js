import { connect } from 'react-redux';
import { AnimalCard } from '../components/AnimalCard';
import { addAnimalCardData } from '../actions';

const mapStateToProps = (state) => {
    return { state:state }
}
const MapDispatchToProps = (dispatch) => {
    return {
        dispatch: (animalCartData) => (addAnimalCardData(animalCartData)),
    }
} 

export default connect(
    mapStateToProps,
    MapDispatchToProps
)(AnimalCard);
