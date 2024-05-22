import React from 'react'
import './Program.css'
import swim_basic1 from '../../assests/swim_basic1.jpg'
import swim_basic2 from '../../assests/swim_basic2.jpg'
import swim_basic3 from '../../assests/swim_basic3.jpg'
import swim_basic4 from '../../assests/swim_basic4.jpg'
import { Element } from 'react-scroll'

const Program = () => {
    return (
        <Element name='program'>
            <section className='sec-2'>
                <h1>CHOOSE <span>PROGRAM</span></h1>
                <p className='para1'>Dive into a world of excellence with our tailored swimming programs, meticulously
                    designed to elevate your skills and performance. From refining strokes to mastering
                    advanced techniques, our expert-led sessions cater to swimmers of all levels, ensuring
                    every stroke brings you closer to your goals. Join our vibrant community of enthusiasts
                    , where camaraderie and passion for swimming create an environment ripe for improvement and success.
                    Take the plunge today and experience the difference our programs can make in your aquatic journey.</p>
                <div className='swim_basic'>
                    <div className='img_basic'>
                        <img src={swim_basic1} alt='swim_basic' />
                        <h3>Basic Fitness</h3>
                        <p className='para2'>Dive into a world of excellence with make in your aquatic journey.</p>
                        <button>DISCOVER MORE</button>
                    </div>
                    <div className='img_basic'>
                        <img src={swim_basic2} alt='swim_basic' />
                        <h3>Basic Fitness</h3>
                        <p className='para2'>Dive into a world of excellence with make in your aquatic journey.</p>
                        <button>DISCOVER MORE</button>
                    </div>
                    <div className='img_basic'>
                        <img src={swim_basic3} alt='swim_basic' />
                        <h3>Basic Fitness</h3>
                        <p className='para2'>Dive into a world of excellence with make in your aquatic journey.</p>
                        <button>DISCOVER MORE</button>
                    </div>
                    <div className='img_basic'>
                        <img src={swim_basic4} alt='swim_basic' />
                        <h3>Basic Fitness</h3>
                        <p className='para2'>Dive into a world of excellence with make in your aquatic journey.</p>
                        <button>DISCOVER MORE</button>
                    </div>
                </div>
            </section>
        </Element>
    )
}

export default Program
