import React, { forwardRef } from 'react'
import {AiFillStar} from "react-icons/ai"


const Moviecard = forwardRef(({movie},ref) => {
  return (
    <div ref={ref} className="videoCard container-fluid">
          <img src={movie.imageurl} className='text-light' alt='Images has been deleted from server.'/>
          <div className='movie-result-text'>
             <h2>{movie.title}</h2>
             <p>{movie.synopsis}</p>
             <div className='rate d-flex'>
                <h3 className='mx-2'>
                   <AiFillStar/>{movie.imdbrating}
                   </h3>

                  <h4 className='mx-4 '>
                    {movie.released}
                  </h4>
             </div>
          </div>
        
    </div>
  )
})

export default Moviecard
