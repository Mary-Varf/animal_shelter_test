import React, {useState, useEffect} from "react";
import { getTodayData, getAnimalsData } from '../api'
import { TodayItem } from './TodayItem'
import {Preloader} from '../layout/Preloader';
import { useDispatch } from 'react-redux';
import { addTodayData, toggleTodayReady, toggleTodayError, toggleLoading, addAnimalsData, addNextPage } from '../actions'


export const TodayList = (data) => {
  const dispatch = useDispatch();
  const { todayData, todayReady, todayError, loading, nextPage } = data.state;

  useEffect(()=> {      
    dispatch(toggleLoading(true));
    if (!todayData.length) {
      getTodayData()
      .then(response=> {
          dispatch(addTodayData(response.data.results));
      })
      . then((data)=>{
            dispatch(toggleTodayReady(true));
            dispatch(toggleLoading(false));
          })
        .catch(e=>{
          dispatch(toggleLoading(false));
          dispatch(toggleTodayError(true));
          window.location.assign('/login')
        });
      getAnimalsData()
      .then(response=> {
          dispatch(addAnimalsData(response.data.results));
          dispatch(addNextPage(response.data.next))
      })

    }           
    dispatch(toggleLoading(false));
}, [todayReady]);
return (
  <div className='j-center'>
    {todayError ? (<h4>Sorry, something went wrong, please try again later.</h4>):(
      loading ? <Preloader /> :  (
      <div className='j-center center'>
        <h1>Назначения на сегодня:</h1>
        {todayData.map((item, i) => {return <TodayItem key={i} item={item}/>})}
      </div>
    ))}
  </div>
)
}



