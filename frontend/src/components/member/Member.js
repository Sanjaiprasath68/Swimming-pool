import React from 'react'
import './Member.css'
import swim_Member from '../../assests/swim_Member.jpg'
import { Element, Link } from 'react-scroll'

const Member = () => {
  return (
    <Element name='members'>
      <section className='sec-3'>
        <div>
          <img src={swim_Member} alt='swim_Member' />
          <h4 className='text1'>DON'T <span>THINK</span>, BEGIN TODAY!</h4>
          <p className='text2'>Dive into a world of excellence with our tailored swimming programs, meticulously
            designed to elevate your skills and performance. From refining strokes to mastering
            advanced techniques,</p>
          <button className='text3'><Link to='booknow'>BECOME A MEMBER</Link></button>
        </div>
      </section>
    </Element>

  )
}

export default Member
