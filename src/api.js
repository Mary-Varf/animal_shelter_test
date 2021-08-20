import axios from 'axios';
const apiUrl = 'https://acits-api.herokuapp.com/api/';

export const auth = (login, password) => {
    return axios.post(
        `${apiUrl}token/`, {
            headers: {
                "Content-Type" : "application/json",
            },
            'username': login,
            'password': password,
        }
      )
}
export const getTodayData = () => {
    if (localStorage.getItem('access')) {
        return axios.get(
            `${apiUrl}v1/prescriptions/today/`, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('access'),
                    'current-shelter': '1'
                },
            }
          )
    } else{
        window.location.assign('/login');
    }
}
export const getAnimalsData = (query = '') => {
    if (localStorage.getItem('access')) {
        return axios.get(
            `${apiUrl}v1/animals/${query}`, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('access'),
                    'current-shelter': '1'
                },
            }
          )
    } else{
        window.location.assign('/login');
    }
}
export const getAnimalCartData = (id) => {
    if (localStorage.getItem('access')) {
        return axios.get(
            `${apiUrl}v1/animals/${id}`, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('access'),
                    'current-shelter': '1'
                },
            }
          )
    } else{
        window.location.assign('/login');
    }
}

