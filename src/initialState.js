const initialState = {
    loginError: false,
    loginReady: true,
    animalsData: [],
    todayData: [],
    todayReady: false,
    todayError: false,
    loading: false,
    nextPage: '',
    animalCardData: {name: '',
                    animal_attributes: [
                        {value: ''}, 
                        {value: ''}, 
                        {value: ''}, 
                        {value: ''}, 
                    ]           
                },
}

export default initialState;