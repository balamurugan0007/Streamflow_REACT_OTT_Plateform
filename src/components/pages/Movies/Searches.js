import React,{useEffect, useState } from 'react'
import request from '../../request/request'
import Moviecard from './Moviecard'



const Searches = () => {

    const [select,setselect]=useState(request.fetchActionMovies)
    const [data,Setmovie]=useState('')

    useEffect(()=>{
      

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c36f5511acmsh9c19167b3c828c3p12e9b4jsn07f8f6884e3f',
		'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
	}
      };
        const fetchData=async()=>{
          const response = await fetch(select, options);
	        const result = await response.json();
         
          console.log(result.results)
          Setmovie(result.results)
          
      }
      fetchData();
  },[select])


  return (
    <div className='container' id=''>
        <div className='navbar d-flex' id='search-navbar'>
    
    <h4 className='mt-3 mx-2 btn btn-oultine-dark'  onClick={()=>setselect(request.fetchadventure)}>Adventure</h4>
    <h4 className='mt-3 mx-2 btn btn-oultine-dark'  onClick={()=>setselect(request.fetchActionMovies)}>Action</h4>
    <h4 className='mt-3 mx-2 btn btn-oultine-dark'  onClick={()=>setselect(request.fetchMystery)}>Mystery</h4>
    <h4 className='mt-3 mx-2 btn btn-oultine-dark'  onClick={()=>setselect(request.fetchSciFi)}>Sci-fy</h4>
    <h4 className='mt-3 mx-2 btn btn-oultine-dark'  onClick={()=>setselect(request.fetchfamily)}>Family</h4>
    <h4 className='mt-3 mx-2 btn btn-oultine-dark'  onClick={()=>setselect(request.fetchcrime)}>Crime</h4>
    <h4 className='mt-3 mx-2 btn btn-oultine-dark'  onClick={()=>setselect(request.fetchAnimation)}>Animation</h4>
    <h4 className='mt-3 mx-2 btn btn-oultine-dark'  onClick={()=>setselect(request.fetchComedyMovies)}>commedy</h4>
    <h4 className='mt-3 mx-2 btn btn-oultine-dark'  onClick={()=>setselect(request.fetchHorrorMovies)}>Horror</h4>
    <h4 className='mt-3 mx-2 btn btn-oultine-dark'  onClick={()=>setselect(request.fetchWestern)}>Western</h4>
    <h4 className='mt-3 mx-2 btn btn-oultine-dark'  onClick={()=>setselect(request.fetchRomanceMovies)}>Romance</h4>
    
</div>

<div className='row'>
      <div className='video-results'>
            {data && data.map((movie) => (
        
            <Moviecard className='d-flex' key={movie.id} movie={movie}/>

        ))}
         
      </div>
</div>
        
    </div>
   
  )
}

export default Searches
