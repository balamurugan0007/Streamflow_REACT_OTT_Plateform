import React, { useEffect, useState } from 'react'
import prmium from '../../request/prmium'
import Videocard from './Videocard'



const Movies = () => {
    const [selectedOption,setSelectedOption]=useState(prmium.fetchTopRated)
    const [data,setdata]=useState('')

    useEffect(() => {

      const options = {
        method: 'GET',
       
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
