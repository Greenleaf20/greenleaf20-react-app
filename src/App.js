import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Awards from './components/Awards';
import Social from './components/Social';
import { useEffect, useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem('darkMode') === 'true'
  );

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active button trans" href="/about">Archana Ganesh</a>
            </li>
            <li className="nav-item">
              <a className="nav-link button trans" href="/education">Education</a>
            </li>
            <li className="nav-item">
              <a className="nav-link button trans" href="/experience">Experience</a>
            </li>
            <li className="nav-item">
              <a className="nav-link button trans" href="/projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link button trans" href="/assets/files/Archana_Ganesh_Resume.pdf" target="_blank" rel="noreferrer">Resume</a>
            </li>
            <li className="nav-item">
              <a className="nav-link button trans" href="/awards">Awards</a>
            </li>
            <li className="nav-item">
              <a className="nav-link button trans" href="/social">Hobbies</a>
            </li>
          </ul>
          <div className="d-flex justify-content-end align-items-center theme-slider-container">
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" id="themeSwitch" onChange={toggleDarkMode} checked={darkMode} />
              <label className="form-check-label theme-text" htmlFor="themeSwitch" id="themeSwitchLabel">{darkMode ? 'Dark' : 'Light'} </label>
            </div>
          </div>
        </div>
      </nav>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-2 justify-content-center left-panel" >
            <img className="fakeimg no-zoom" src="/assets/images/profile-pic.png" alt="Profile"/>
            <h4 className="mt-4">Archana Ganesh</h4>
            <p> Master of Science <br/> <a href="https://www.cics.umass.edu/" className="text-secondary" target="_blank" rel="noreferrer">College of Information and Computer Sciences</a> <br/> University of Massachusetts Amherst</p>
            <p><img src={darkMode ? "/assets/images/svgs/location-logo-light.svg" : "/assets/images/svgs/location-logo.svg"}  id="location" alt="location"/> Amherst, MA, USA</p>
            <p><img src={darkMode ? "/assets/images/svgs/email-logo-light.svg" : "/assets/images/svgs/email-logo.svg"} className="me-2" id="email" alt="email" />archanaganes@umass.edu</p>
            <p><a href="https://www.linkedin.com/in/ganesh-archana/" className="text-secondary" target="_blank" rel="noreferrer"><img src={darkMode ? "/assets/images/svgs/linkedin-logo-light.svg" : "/assets/images/svgs/linkedin-logo.svg"}  className="me-2" id="linkedin" alt="linkedin"/>ganesh-archana</a></p>
            <p><a href="https://scholar.google.com/citations?hl=en&user=JhFxgOoAAAAJ" className="text-secondary" target="_blank" rel="noreferrer"><img src={darkMode ? "/assets/images/svgs/scholar-logo-light.svg" : "/assets/images/svgs/scholar-logo.svg"}  className="me-2" id="google-scholar" alt="google-scholar"/>Archana Ganesh</a></p>
            <p><a href="https://github.com/Greenleaf20" className="text-secondary" target="_blank" rel="noreferrer"><img src={darkMode ? "/assets/images/svgs/github-logo-light.svg" : "/assets/images/svgs/github-logo.svg"}  className="me-2" id="github" alt="github"/>Greenleaf20</a></p>
            <p><a href="https://www.goodreads.com/_greenleaf" className="text-secondary" target="_blank" rel="noreferrer"><img src={darkMode ? "/assets/images/svgs/goodreads-logo-light.svg" : "/assets/images/svgs/goodreads-logo.svg"}  className="me-2" id="goodreads" alt="goodreads"/>_greenleaf</a></p>
            <hr className="d-sm-none"/>
          </div>
          <div className="col-sm-9 ms-5">
            <Routes>
              <Route path="/" element={<Navigate to="/about" />} />
              <Route path='/about' exact className="nav-link active button trans" Component={About}/>
              <Route path='/education' exact className="nav-link active button trans" Component={Education}/>
              <Route path='/experience' exact className="nav-link active button trans" Component={Experience}/>
              <Route path='/projects' exact className="nav-link active button trans" Component={Projects}/>
              <Route path='/awards' exact className="nav-link active button trans" Component={Awards}/>
              <Route path='/social' exact className="nav-link active button trans" Component={Social}/>
            </Routes>
          </div>
        </div>
      </div>
      <div className="mt-5 p-1 bg-dark text-white text-center">
        <p className="made-text">Made with <span className="heart">&#9829;</span> by Archana.</p>
      </div>
    </div>
  );
}

export default App;
