import React from 'react'
import Danjeon from "../../assets/Rectangle6.png"
import avanger from "../../assets/Rectangle5.png"
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
        <h5 className='text-start mx-4'>Money heist</h5>
        <p className='text-start mx-4'>The series was initially intended as a limited series to be told in two parts. It had its original run of 15 episodes on Spanish network Antena 3 from 2 May 2017 through 23 November 2017. </p>
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
        <h5 className='text-start mx-4'>Peaky Blinders</h5>
        <p className='text-start mx-4'>Peaky Blinders is a crime drama centred on a family of mixed Irish Traveller and Romani origins based in Birmingham, England, starting in 1919, several months after the end of the First World War. It centres on the Peaky Blinders street gang and their ambitious, cunning crime boss Tommy Shelby</p>
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
