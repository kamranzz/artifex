import React from 'react';
import './style.css';
import image1 from './image1.png'
import { Fade } from "react-awesome-reveal";
// import image2 from './image2.png'
// import image3 from './image3.png'

const Home = () => {
  return (
    <>
      <section className='hero-section'>
        <div className='container hero-block'>
          <Fade className='fade' direction="up">
          <h1 className='hero-heading'>Design. Development. Embodiment.</h1>
          <p className='hero-text'>Our team is dedicated to creating unique and functional websites that embody your vision and help you achieve your business goals.</p>
          </Fade>
        </div>
      </section>

      <section className='about-section'>
        <div className='container'>
          <div className='card'>
            <img src={image1} alt='Card 1' className='mb-5 card-image' />
            <h2 className='card-name'>Automatic gates</h2>
          </div>
          {/* <div className='card'>
            <img src={image2} alt='Card 2' className='card-image' />
            <h2 className='card-name'>Card 2</h2>
          </div>
          <div className='card'>
            <img src={image3} alt='Card 3' className='card-image' />
            <h2 className='card-name'>Card 3</h2>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Home;
