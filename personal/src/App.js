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
        <p></p>
        <div className="background-container">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png" alt="Moon"/> 
          <div className="stars"></div>
          <div className="twinkling"></div>
          <div className="clouds"></div>
        </div>
      </header>
      
      {/* PAGE ONE */}
      <section id="page-1" className="page" class="section-container">
        <div class="section left">
          <h1>About Me</h1>
          <img src="/profile.jpg" alt="Samuel Parkman" className="Professional_Photo"/> 
          <p>In the professional realm, I serve as a Software Engineer at GM, contributing my expertise to cutting-edge projects. Outside the traditional 9-to-5, I am dedicated to advancing my knowledge and skills in Computer Science, actively pursuing a B.S. degree from Oregon State University.</p>  
        </div>
      </section>

      {/* PAGE TWO */}
      <section id="page-2" className="page" class="section-container">
        <div class="section right">
          <h1>Projects</h1>
            <h2>Sample Table</h2>

            <table>
                <thead>
                    <tr>
                        <th>Project</th>
                        <th>Dscription</th>
                        <th>Showcases</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><a href="https://github.com/Parkman97/Poke-Display">PokeDisplay</a></td>
                        <td>Command Line Program that helps you get familiar with the original 151 pokemon. It uses API's to query pokemon images, stats and much more.</td>
                        <td>Python, Command Line</td>
                    </tr>
                    <tr>
                        <td><a href="https://github.com/osu-cs374/bigshell-Parkman97">Bigshell</a></td>
                        <td>Row 2, Cell 2</td>
                        <td>C</td>
                    </tr>
                    <tr>
                        <td><a href="https://github.com/Parkman97/Network-Monitoring">Hive Network Monitor</a></td>
                        <td>Utilizes a decentralized Hive Node model that does network checks using https, tcp, DNS, and others.</td>
                        <td>Python, Networking Principals </td>
                    </tr>
                </tbody>
            </table> 
                </div>
              </section>

      {/* PAGE THREE */}
      <section id="page-3" className="page" class="section-container">
        <div class="section left">
          <h1>Contact Page</h1>
          <p>Contact info goes here</p>
        </div>  
      </section>

      {/* PAGE FOUR */}
      <section id="page-4" className="page" class="section-container">
        <div class="section right">
          <h1>Bye</h1>
          <p>See ya later</p>
          </div>  
      </section>
    </div>
  );
}

export default App;
