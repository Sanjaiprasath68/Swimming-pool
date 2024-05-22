import React from 'react'
import './Home.css'
import swim from '../../assests/swim.jpg'

const Home = () => {
  return (
    <section className='conatiner'>
      <img src={swim} alt='swim' />
      <h4 className='text-overlay1'>WORK HARDER, GET STRONGER</h4>
      <h1 className='text-overlay2'>EASY WITH <span>SAS</span> SWIMMING POOL</h1>
      <p className='text-overlay3'><button>BECOME A MEMBER</button></p>
    </section>
  )
}

export default Home
