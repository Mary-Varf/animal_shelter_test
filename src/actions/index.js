export const toggleLoginError = (loginError) => ({
    type: 'LOGIN_ERROR',
    loginError
})
export const toggleTodayError = (todayError) => ({
    type: 'TODAY_ERROR',
    todayError
})
export const toggleLoading = (loading) => ({
    type: 'TOGGLE_LOADING',
    loading
})
export const toggleLoginReady = (loginReady) => ({
    type: 'LOGIN_READY',
    loginReady
})
export const addTodayData = (todayData) => ({
    type: 'GET_TODAY_DATA',
    todayData
})
export const addAnimalsData = (animalsData) => ({
    type: 'GET_ANIMALS_DATA',
    animalsData
})
export const toggleTodayReady = (todayReady) => ({
    type: 'TOGGLE_TODAY_READY',
    todayReady
})

export const addNextPage = (nextPage) => ({
    type: 'CREATE_NEXT_PAGE',
    nextPage
})
export const addAnimalCardData = (animalCardData) => ({
    type: 'CREATE_ANIMAL_DATA',
    animalCardData
})