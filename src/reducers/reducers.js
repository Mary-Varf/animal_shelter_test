let inc_page = 2;
let search_page = 2;
const reducer = ( state = [], action ) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            return {
                ...state,
                loginError: action.loginError
            }
        case 'TODAY_ERROR':
            return {
                ...state,
                todayError: action.todayError
            }
        case 'TOGGLE_LOADING':
            return {
                ...state,
                loading: action.loading
            }
        case 'LOGIN_READY':
            return {
                ...state,
                loginReady: action.loginReady
            }
        case 'GET_TODAY_DATA':
            return {
                ...state,
                todayData: action.todayData
            }
        case 'GET_ANIMALS_DATA':
            return {
                ...state,
                animalsData: action.animalsData
            }
        case 'TOGGLE_TODAY_READY':
            return {
                ...state,
                todayReady: action.todayReady
            }
        case 'CREATE_NEXT_PAGE':
            return {
                ...state,
                nextPage: action.nextPage
            }
        case 'CREATE_ANIMAL_DATA':
            return {
                ...state,
                animalCardData: action.animalCardData
            }
        default:
            return state;
    }
}

export default reducer;