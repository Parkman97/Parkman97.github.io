import './moon.scss';  // Updated to import SCSS
import { useEffect } from 'react';  // Import useEffect
import React, { useRef } from 'react';

// Import Swiper and required modules
import { Swiper, SwiperSlide } from 'swiper/react';  // Swiper components
import 'swiper/css';  // Correct CSS import for Swiper
import 'swiper/css/navigation';  // CSS for navigation arrows

function App() {
  const swiperRef = useRef(null);  // Create a ref to store Swiper instance

  // Handler functions for custom navigation
  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();  // Move to the next slide
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();  // Move to the previous slide
    } 
  };

  useEffect(() => {
    const handleClick = (event) => {
      event.preventDefault();
  
      const targetId = event.currentTarget.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        const headerOffset = 50;
        const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;
  
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    };
  
    const links = document.querySelectorAll(".btn");
    links.forEach((link) => link.addEventListener("click", handleClick));
  
    return () => {
      links.forEach((link) => link.removeEventListener("click", handleClick));
    };
  }, []);
  

  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="nav">
        <a href="#page-1" className="btn">About Me</a>
        <a href="#page-2" className="btn">Projects</a>
        <a href="#page-3" className="btn">Contact</a>
        <a href="#page-4" className="btn">Bye</a>
      </nav>

      <header className="App-header">
        <p></p>
        <div className="background-container">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png" alt="Moon"/> 
          <div className="stars"></div>
          <div className="twinkling"></div>
          <div className="clouds"></div>
        </div>
      </header>
      
      {/* PAGE ONE */}
      <section id="page-1" className="section-container">
        <div className="section left">
          <h1>About Me</h1>
          <img src="/profile.jpg" alt="Samuel Parkman" className="Professional_Photo"/> 
          <p>In the professional realm, I serve as a Software Engineer at GM, contributing my 
            expertise to cutting-edge projects. Outside the traditional 9-to-5, I am dedicated to advancing my knowledge and skills in Computer Science, 
            actively pursuing a B.S. degree from Oregon State University.</p>  
        </div>
      </section>

      {/* PAGE TWO */}
      <section id="page-2" className="section-container">
        <div className="section right">
          <h1>Projects</h1>
                 {/* Swiper Carousel */}
                    <Swiper
                    onSwiper={(swiper) => {
                      swiperRef.current = swiper;
                    }}
                      spaceBetween={50}
                      slidesPerView={1}
                      navigation={{
                        nextEl: '.custom-next-button',
                        prevEl: '.custom-prev-button'
                      }}
                      autoplay={{ delay: 3000 }}
                      loop
                    >
                    <SwiperSlide>
                      <h3>PokeDisplay</h3>
                      <p>Command Line Program to get familiar with the original 151 pokemon</p>
                      <a href="https://github.com/Parkman97/Poke-Display" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                    </SwiperSlide>
                    <SwiperSlide>
                      <h3>Bigshell</h3>
                      <p>A shell written in C for system management.</p>
                      <a href="https://github.com/osu-cs374/bigshell-Parkman97" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                    </SwiperSlide>
                    <SwiperSlide>
                      <h3>Hive Network Monitor</h3>
                      <p>Decentralized network monitoring system.</p>
                      <a href="https://github.com/Parkman97/Network-Monitoring" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                    </SwiperSlide>
                  </Swiper>
                  <button className="custom-prev-button" onClick={handlePrev}></button>
                  <button className="custom-next-button" onClick={handleNext}></button>
                </div>
              </section>

      {/* PAGE THREE */}
      <section id="page-3" className="section-container">
        <div className="section left">
          <h1>Contact Page</h1>
          <p>Email: Swparkman02@gmail.com</p>
          <p>Phone: 509-713-4895</p>
        </div>  
      </section>

      {/* PAGE FOUR */}
      <section id="page-4" className="section-container">
        <div className="section right">
          <h1>Resume & Social Media</h1>
          <p>LinkedIn</p>
          <a href='https://www.linkedin.com/in/samuel-parkman/'>LinkedIn</a>
          </div>  
      </section>
    </div>
  );
}

export default App;
