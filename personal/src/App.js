import './moon.scss';  // Updated to import SCSS
import { useEffect } from 'react';  // Import useEffect

function App() {
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
        <p>Sam Parkman's Personal Webpage</p>
        <div className="background-container">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png" alt="Moon"/> 
          <div className="stars"></div>
          <div className="twinkling"></div>
          <div className="clouds"></div>
        </div>
      </header>

      {/* PAGE ONE */}
      <section id="page-1" className="page">
        <h1>About Me</h1>
        <p>Section about me</p>  
      </section>

      {/* PAGE TWO */}
      <section id="page-2" className="page">
        <h1>Projects</h1>
        <p>Projects</p>  
      </section>

      {/* PAGE THREE */}
      <section id="page-3" className="page">
        <h1>Contact Page</h1>
        <p>Contact info goes here</p>  
      </section>

      {/* PAGE FOUR */}
      <section id="page-4" className="page">
        <h1>Bye</h1>
        <p>See ya later</p>  
      </section>
    </div>
  );
}

export default App;
