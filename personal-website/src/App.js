
import './App.css';
import { Link } from 'react-scroll';

function App() {
  return (
    <>
    <header className="App-header">
      <h1 className='header-text'>Hi, My name is Samuel Parkman</h1>
    </header>
    <img src={process.env.PUBLIC_URL + '/personal_photo.jpg'} alt='' id='personal-photo' />
    <img src={process.env.PUBLIC_URL + '/mountains.jpg'} alt='' id='background-photo' />  



    <main>
      
      <section className="App-article">
        <Link to="personal-photo" smooth duration={500} offset={-100}>Top of Page</Link>
        <Link to="about-me" smooth duration={500} offset={-100}>About Me</Link>
        <Link to="projects" smooth duration={500} offset={-100}>Projects</Link>
        <Link to="social-media" smooth duration={500} offset={-100}>Social Media</Link>
        <Link to="contact-info" smooth duration={500} offset={-100}>Contact Info</Link>
      </section>

      <section className='about-me' id='about-me'>
        <h2>About Me</h2>
          <p className='about-me-text'>
            I originally graduated with a B.S. in Mechanical Engineering from Washington State University but after working for 3 years
            I found that I really enjoyed coding and decided to get another B.S but in Computer Science. Currently I am working to finish
            up my degree which is expected to be in the spring of 2025. I am currently working as a Software Automation Engineer at General
            Motors and honing my CS skills. Outside of work and school I enjoy backpacking, skiing and training for endurance races.
          </p>
      </section>

      <section className='contact-info' id='contact-info'>
      <h2>Contact Info</h2>
          <table>
              <thead>
              <tr>
                  <th>Contact Method</th>
                  <th>Info</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                  <td>Email</td>
                  <td>swparkman02@gmail.com</td>
              </tr>
              <tr>
                  <td>Phone</td>
                  <td>(509) 713 - 4895</td>
              </tr>
              </tbody>
          </table>
      </section>

      <section className='projects' id='projects'>
        <h2>Projects</h2>
        <div className='poke-display'>
          <a href='https://github.com/Parkman97/Poke-Display'>Poke-Display</a>
          <p className='poke-text'>Poke-Display is a python command line interactive based microservice project. It allows the user
          to search for pokemon based on Name, Type or have a random pokemon shown. With each search it returns a photo as well as 
          stats unique to each Pokemon. It communicates with my partners API caller project through the use of sockets.
          </p>
        </div>
        <div className='project2'>
          <a href='https://github.com/Parkman97/Poke-Display'>Project2</a>
          <p className='project2-text'>Description for Project 2
          </p>
        </div>
        <div className='project3'>
        <a href='https://github.com/Parkman97/Poke-Display'>Project3</a>
          <p className='project3-text'>Description for Project 3
          </p>
        </div>
      </section>
      <section>
        <img src='../public/Resume.jpg' alt='' id='logo' className='Resume'></img>
      </section>

      <section className='social-media' id='social-media'>
        <h2>Social Media</h2>
          <a href = 'https://www.linkedin.com/in/samuel-parkman/'> 
          LinkedIn  
          </a>
      </section>

    </main>
  

    <footer>
      <p>&copy; 2023 Sam Parkman</p>
    </footer>

    </>
  );
}

export default App;
