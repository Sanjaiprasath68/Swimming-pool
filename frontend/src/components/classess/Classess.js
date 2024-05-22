import React from 'react'
import { useState } from 'react'
import './Classess.css'
import swim_class from '../../assests/swim_class.jpg'
import { Element } from 'react-scroll'

const Classess = () => {

  const [showText1, setShowText1] = useState(true);
  const [showText2, setShowText2] = useState(false);
  const [showText3, setShowText3] = useState(false);
  const [showText4, setShowText4] = useState(false);

  const toggleText1 = () => {
    setShowText1(!showText1);
    setShowText2(showText2);
    // Hide text2 when showing text1
    if (showText1 && showText2) {
      setShowText2(false);
    }
  };

  const toggleText2 = () => {
    setShowText2(!showText2);
    // Hide text1 when showing text2
    if (showText2 && showText1) {
      setShowText1(false);
    }
  }
  const toggleText3 = () => {
    setShowText3(!showText3);
    // Hide text1 when showing text2
    if (showText3 && showText2 && showText1) {
      setShowText3(false);
    }
  };
  const toggleText4 = () => {
    setShowText4(!showText4);
    // Hide text1 when showing text2
    if (showText4 && showText3 && showText2 && showText1) {
      setShowText1(false);
    }
  };

  return (
    <Element name='classess'>
    <div>
      <section className='sec-4'>
        <h1>OUR <span>CLASSES</span></h1>
        <p className='para1'>Dive into a world of excellence with our tailored swimming programs, meticulously
          designed to elevate your skills and performance. From refining strokes to mastering
          advanced techniques, our expert-led sessions cater to swimmers of all levels, ensuring designed to elevate your skills </p>
      </section>
      <section className='classess_container'>
        <div>
          <img src={swim_class} alt='swim_class' />
          <div className='swimming_training_class'>
            <h2>Swimming Training <span>Class</span></h2>
            <p>Dive into a world of excellence with our tailored swimming programs, meticulously
              designed to elevate your skills designed to elevate your skills designed to elevate your skills your skills</p>
          </div>
        </div>
        <div className='class_dropdowns'>
          <div className="dropdown1">
            <button className="dropbtn" onClick={toggleText1}> FIRST TRAINNING CLASS</button>
            {showText1 && (
              <div className="dropdown-content">
                <ul>
                  <li>This is text for text 1</li>
                  <li>This is text for text 2</li>
                  <li>This is text for text 3</li>
                  <li>This is text for text 4</li>
                </ul>
              </div>
            )}
          </div>
          <div className="dropdown2">
            <button className="dropbtn" onClick={toggleText2}>SECOND TRAINNING CLASS</button>
            {showText2 && (
              <div className="dropdown-content">
                <ul>
                  <li>This is text for text 1</li>
                  <li>This is text for text 2</li>
                  <li>This is text for text 3</li>
                  <li>This is text for text 4</li>
                </ul>
              </div>
            )}
          </div>
          <div className="dropdown3">
            <button className="dropbtn" onClick={toggleText3}>THIRD TRAINNING CLASS</button>
            {showText3 && (
              <div className="dropdown-content">
                <ul>
                  <li>This is text for text 1</li>
                  <li>This is text for text 2</li>
                  <li>This is text for text 3</li>
                  <li>This is text for text 4</li>
                </ul>
              </div>
            )}
          </div>
          <div className="dropdown4">
            <button className="dropbtn" onClick={toggleText4}>FOURTH TRAINNING CLASS</button>
            {showText4 && (
              <div className="dropdown-content">
                <ul>
                  <li>This is text for text 1</li>
                  <li>This is text for text 2</li>
                  <li>This is text for text 3</li>
                  <li>This is text for text 4</li>
                </ul>
              </div>
            )}
          </div>
          <button className='view_Schedule'>VIEW SCHEDULE</button>
        </div>
      </section>
    </div>
    </Element>
  )
}

export default Classess
