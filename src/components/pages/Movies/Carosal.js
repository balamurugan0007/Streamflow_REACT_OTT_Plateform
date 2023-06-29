import React from 'react'
import Danjeon from "../../assets/Rectangle4.png"
import avanger from "../../assets/Rectangle2.png"
import ant from "../../assets/Rectangle3.png"
import "./style.css"
import Navbar from "../../navbar/Navbar"

import {AiFillStar,AiFillPlayCircle} from "react-icons/ai"
import {MdVideoLibrary} from "react-icons/md"
import {BsStarHalf} from "react-icons/bs"

const Carosal = () => {
  return (
    <div className='container-fluid' >
      
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" >
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={avanger} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block" id='carosel-text'>
        <p className='text-start mt-4  mx-3'>
          <AiFillStar id='star' className='mx-1'/><BsStarHalf className='mx-1' id='star'/> 9.5Ratings
        </p>
        <h5 className='text-start mx-4'>Avangers End Game</h5>
        <p className='text-start mx-4'>After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.</p>
        <div className='d-flex' >
            <button className='btn mx-3 mt-3' id='watch-btn'>
               Watch<AiFillPlayCircle className='m-2'/>
            </button>
            <button className='btn btn-outline-warning mx-3 mt-3'>
               Save<MdVideoLibrary className='mx-2'/>
            </button>

        </div>
      </div>
    </div>
    <div className="carousel-item ">
      <img src={Danjeon} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block" id='carosel-text'>
        <p className='text-start mt-4  mx-3'>
          <AiFillStar id='star' className='mx-1'/><BsStarHalf className='mx-1' id='star'/> 8.2Ratings
        </p>
        <h5 className='text-start mx-4'>Dungeons & Dragons: Honor Among Thieves</h5>
        <p className='text-start mx-4'>Edgin Darvis served as a member of the Harpers, an order of peacekeepers, until disciples of a Red Wizard he had arrested killed his wife...</p>
        <div className='d-flex' >
            <button className='btn mx-3 mt-3' id='watch-btn'>
               Watch<AiFillPlayCircle className='m-2'/>
            </button>
            <button className='btn btn-outline-warning mx-3 mt-3'>
               Save<MdVideoLibrary className='mx-2'/>
            </button>

        </div>
      </div>
    </div>
      <div className="carousel-item ">
      <img src={ant} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block" id='carosel-text'>
        <p className='text-start mt-4  mx-3'>
          <AiFillStar id='star' className='mx-1'/><BsStarHalf className='mx-1' id='star'/> 8.5Ratings
        </p>
        <h5 className='text-start mx-4'>Ant-Man and the Wasp: Quantumania</h5>
        <p className='text-start mx-4'>During her days of entrapment in the Quantum Realm, Janet van Dyne encounters an exiled traveler named Kang. In the present day, after the Avengers' battle against Thanos,[a] Scott Lang has become a successful memoirist and has been living happily with his girlfriend, ..</p>
        <div className='d-flex' >
            <button className='btn mx-3 mt-3' id='watch-btn'>
               Watch<AiFillPlayCircle className='m-2'/>
            </button>
            <button className='btn btn-outline-warning mx-3 mt-3'>
               Save<MdVideoLibrary className='mx-2'/>
            </button>

        </div>
      </div>
      </div>
    
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>


<Navbar id='navbar'/>
</div>

  )
}

export default Carosal
