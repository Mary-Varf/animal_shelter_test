import React, {useState, useEffect} from "react";
import {Preloader} from '../layout/Preloader';
import { useDispatch } from 'react-redux';
import { getAnimalsData } from '../api'
import {  addAnimalsData, addNextPage, toggleLoading } from '../actions'
import { AnimalsItem } from "./AnimalsItem";


export const AnimalsList = (data) => {
  const dispatch = useDispatch();
  const { animalsData, nextPage, loading } = data.state;

  useEffect(()=> {      
    dispatch(toggleLoading(true));

    if (animalsData.length < 1) {
      getAnimalsData()
      .then(response=> {
          dispatch(addAnimalsData(response.data.results));
          dispatch(toggleLoading(false));
      })
      .catch(error => {
        console.log(error)
        window.location.assign('/login')
      })
    } 
    dispatch(toggleLoading(false));
}, []);
const handleClick = () => {
  getAnimalsData(nextPage.slice(15))
  .then(response=> {
    dispatch(addAnimalsData([...animalsData, ...response.data.results]));
    dispatch(addNextPage(response.data.next))
  })
}
return (
  <div  className='center'>
    {!animalsData ? (<Preloader />):(
      <div>
        <h1>Животные в приюте:</h1>
        {loading ? <Preloader /> : (<>{animalsData.map((item, i) => {return <AnimalsItem key={i} item={item}/>})}
        <button className="waves-effect waves-light btn red lighten-1 " onClick={handleClick}>ПОказать больше</button></>)}
        
      </div>
    )}
  </div>
)
}


