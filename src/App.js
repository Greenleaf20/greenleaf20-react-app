import './App.css';
// import { Navigate, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Awards from './components/Awards';
import Social from './components/Social';
import { useEffect, useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState( () => {
    const darkmode = localStorage.getItem('darkMode');
    return darkmode ? darkmode === 'true' : true;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const [link,setLink] = useState('about');

  const handleContent = (link) => {
    setLink(link);
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.screenY|| document.documentElement.scrollTop;

      if (scrollTop > 50) {
        setShowTop(true);
      } else {
        setShowTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <span className="nav-link active button trans tab-link" onClick={()=>handleContent('about')}>Archana Ganesh</span>
            </li>
            <li className="nav-item">
              <span className="nav-link button trans tab-link" onClick={()=>handleContent('education')}>Education</span>
            </li>
            <li className="nav-item">
              <span className="nav-link button trans tab-link"  onClick={()=>handleContent('experience')}>Experience</span>
            </li>
            <li className="nav-item">
              <span className="nav-link button trans tab-link" onClick={()=>handleContent('projects')}>Projects</span>
            </li>
            <li className="nav-item">
              <a className="nav-link button trans" href="/assets/files/Archana_Ganesh_Resume.pdf" target="_blank" rel="noreferrer">Resume</a>
            </li>
            <li className="nav-item">
              <span className="nav-link button trans tab-link" onClick={()=>handleContent('awards')}>Awards</span>
            </li>
            <li className="nav-item">
              <span className="nav-link button trans tab-link" onClick={()=>handleContent('social')}>Hobbies</span>
            </li>
          </ul>
          <div className="d-flex justify-content-end align-items-center theme-slider-container">
            {/* <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" id="themeSwitch" onChange={toggleDarkMode} checked={darkMode} />
              <label className="form-check-label theme-text" htmlFor="themeSwitch" id="themeSwitchLabel">{darkMode ? 'Dark' : 'Light'} </label>
            </div> */}
            <div className="flex flex-col justify-center ml-3 form-check form-switch">
              {/* <input type="checkbox" name="light-switch" className="light-switch sr-only"  id="themeSwitch" onChange={toggleDarkMode} checked={darkMode} /> */}
              <label className="relative cursor-pointer p-2" htmlFor="light-switch" type="button">
                  {darkMode && <svg className="dark:hidden" width="16" height="16" xmlns="http://www.w3.org/2000/svg" fill="#C0C0C0" onClick={toggleDarkMode}>
                      <path className="fill-slate-300" d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z" />
                      <path className="fill-slate-400" d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z" />
                  </svg>}
                  {!darkMode &&  <svg className="hidden dark:block" width="16" height="16" xmlns="http://www.w3.org/2000/svg" fill="#C0C0C0" onClick={toggleDarkMode}>
                      <path className="fill-slate-400" d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z" />
                      <path className="fill-slate-500" d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z" />
                  </svg>}
              </label>
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
            {/* <Routes>
              <Route path="/" element={<Navigate to="${baseURL}/about" />} />
              <Route path='/about' exact className="nav-link active button trans" Component={About}/>
              <Route path='/education' exact className="nav-link active button trans" Component={Education}/>
              <Route path='/experience' exact className="nav-link active button trans" Component={Experience}/>
              <Route path='/projects' exact className="nav-link active button trans" Component={Projects}/>
              <Route path='/awards' exact className="nav-link active button trans" Component={Awards}/>
              <Route path='/social' exact className="nav-link active button trans" Component={Social}/>
            </Routes> */}
            {link==='about' && <About/>}
            {link==='education' && <Education/>}
            {link==='experience' && <Experience/>}
            {link==='projects' && <Projects/>}
            {link==='awards' && <Awards/>}
            {link==='social' && <Social/>}
          </div>
        </div>
      </div>
      <div className='top-container'>
        {showTop && <img src={darkMode ? "/assets/images/svgs/top-light.svg" : "/assets/images/svgs/top.svg"} id="backtotop" alt="Back to Top" onClick={scrollToTop} className='top'/>}
      </div>
      <div className="mt-5 p-1 bg-dark text-white text-center footer">
        <p className="made-text">Made with <span className="heart">&#9829;</span> by Archana.</p>
      </div>
    </div>
  );
}

export default App;
