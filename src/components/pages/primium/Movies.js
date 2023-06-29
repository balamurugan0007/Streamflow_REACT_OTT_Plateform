import React, { useEffect, useState } from 'react'
import prmium from '../../request/prmium'
import Videocard from './Videocard'



const Movies = () => {
    const [selectedOption,setSelectedOption]=useState(prmium.fetchTopRated)
    const [data,setdata]=useState('')

    useEffect(() => {

      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZmFjOTFjMjEwYTg3MDE2YWVjYzM3YmU5OThiYzQ4MyIsInN1YiI6IjYzNmE0MzJjMzUwMzk4MDA3ZDIyYjU3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rDpi5ILs7fEWj0ayi5a_TzLrcT7EnyYtKCK10KkN1GQ'
        }
      };

      const fetchData = async () => {
        const request = await fetch(selectedOption,options)
        .then(response => response.json())
        .then(response => {
          console.log(response.results)
          setdata(response.results)
        })
        .catch(err => console.error(err));
        return request;
      };
      fetchData();
    }, [selectedOption]);
  
  

  return (
    <div className='container'>
      <div className='navbar d-flex' id='primium-search-navbar'>
      <h4 id='primium-navbar-btn' className='mx-3 mt-2' onClick={() => setSelectedOption(prmium.fetchTrending)}>
        Trending
      </h4>
      <h4 id='primium-navbar-btn' className='mx-3 mt-2' onClick={() => setSelectedOption(prmium.fetchTopRated)}>
        Top Rated
      </h4>
      <h4 id='primium-navbar-btn' className='mx-3 mt-2' onClick={() => setSelectedOption(prmium.fetchActionMovies)}>
        Action
      </h4>
      
      
      <h4 id='primium-navbar-btn' className='mx-3 mt-2' onClick={() => setSelectedOption(prmium.fetchTV)}>Series</h4>

      </div>
      

      <div className='row'>
           <div className='video-results'>
           {data && data.map((movie) => (
          <Videocard key={movie.id} movie={movie} />
        ))}
           </div>
      </div>

      
    </div>
  )
}

export default Movies
