import React from 'react'
import "./ExpertSystem.css"
import swim from '../../assests/swim.jpg'
import { Element } from 'react-scroll'


const ExpertSystem = () => {
    return (
        <Element name='trainers'>
            <section className='expertSystem'>
                <h1>EXPERT <span>TRAINERS</span></h1>
                <p className='para1'>Dive into a world of excellence with our tailored swimming programs, meticulously
                    designed to elevate your skills and performance. From refining strokes to mastering
                    advanced techniques, our expert-led sessions cater to swimmers of all levels From refining strokes to mastering.
                </p>
                <div className='swim_expert'>
                    <div className='img_expert'>
                        <img src={swim} alt='swim_basic' />
                        <h4>Strength Trainer</h4>
                        <h3>Bret D. BOWERS</h3>
                        <p className='para2'>Dive into a world of excellence with make in your aquatic journey.</p>
                    </div>
                    <div className='img_expert'>
                        <img src={swim} alt='swim_basic' />
                        <h4>Strength Trainer</h4>
                        <h3>Bret D. BOWERS</h3>
                        <p className='para2'>Dive into a world of excellence with make in your aquatic journey.</p>
                    </div>
                    <div className='img_expert'>
                        <img src={swim} alt='swim_basic' />
                        <h4>Strength Trainer</h4>
                        <h3>Bret D. BOWERS</h3>
                        <p className='para2'>Dive into a world of excellence with make in your aquatic journey.</p>
                    </div>
                </div>
            </section>
        </Element>
    )
}

export default ExpertSystem
