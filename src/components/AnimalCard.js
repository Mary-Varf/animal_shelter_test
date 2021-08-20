import {useEffect, useState} from 'react';
import {useParams, useHistory } from 'react-router-dom';
import { getAnimalCartData } from '../api';
import {Preloader} from '../layout/Preloader';
import { addAnimalCardData, toggleLoading } from '../actions';

import {useDispatch} from 'react-redux';

export const  AnimalCard = (data) => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { animalCardData, loading } = data.state
    const {goBack} = useHistory();

    useEffect(()=> { 
        dispatch(toggleLoading(true));

        getAnimalCartData(id)
        .then(response=> {
            if (response.data.animal_attributes[1]) {
                dispatch(addAnimalCardData(response.data));
            } else {
                let arr = {
                    name: response.data.name,
                    animal_attributes: [
                        {value: 'нет информации'},
                        {value: 'нет информации'},
                        {value: response.data.animal_attributes[0].value},
                        {value: 'нет информации'},
                    ]
                }
                console.log(arr)
                dispatch(addAnimalCardData(arr));
            }
            console.log(animalCardData)
            dispatch(toggleLoading(false));

        })
        // .catch(()=>{
        //     window.location.assign('/login')
        //   });
    }, []);

    return (
        loading ? <Preloader /> : (
        <div className="col s12 m6">
        <div className="card red lighten-1 ">
            <div className="card-content white-text right">
                <span className="card-title">{animalCardData.name}</span><br/>
                <p>Рост: {animalCardData.animal_attributes[0].value}</p>
                <p>Вес: {animalCardData.animal_attributes[1].value}</p>
                <p>Пол: {animalCardData.animal_attributes[2].value}</p>
                <p>Цвет: {animalCardData.animal_attributes[3].value}</p>
                <p>Тип: {animalCardData.spec_parent_name}</p>
                <p>Подтип: {animalCardData.spec_name}</p>
            </div>
            
            <div className='card-content abs-position'>
                <img src="http://placehold.it/400x250/" alt='Заглушка'/>
            </div>
            <div className="card-action">
            <a href='#' onClick={(e)=> {e.preventDefault(); goBack()}}>Вернуться</a>
            </div>
        </div>
        </div>
        )
    
    )
}