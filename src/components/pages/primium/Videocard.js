import React from 'react'
import { forwardRef } from 'react'
import "./style.css"
import {BsFillHandThumbsUpFill} from "react-icons/bs"
import {GiAlliedStar} from "react-icons/gi"

const base_url = "https://image.tmdb.org/t/p/original/";

const Videocard =  forwardRef(({ movie }, ref) => {
  return (
    <div ref={ref} className="videoCard" id='videoCard'>
      
      <img
        src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
        alt="movie poster"
      />
     
      

    <div className='movie-result-text'>
    <p className='mx-3' id='primium-para-icons'>
        <GiAlliedStar/>Primium one
      </p>

             <h2>{movie.title || movie.orignal_name}</h2>
             <p>{movie.overview}</p>
             <div className='rate d-flex'>
                <h3 className='mx-2'>
                 
     
      
      {"  "}<BsFillHandThumbsUpFill/> {movie.vote_count}
                   </h3>

                  <h4 className=' mx-4 '>
                  {movie.release_date || movie.first_air_date} •
                  </h4>
             </div>
       </div>
  </div>
  )
})

export default Videocard
