import './App.css';
import { useLocation } from 'react-router-dom';

function Education() {
    const location = useLocation();
    console.log(location)

    if (location.pathname === '/about') {
        return (
            <div>
              <h2 className="mt-5" id="about">Hi, I am Archana <span className="wave">&#128075;</span>!</h2>
                <p> I am a Computer Science graduate student at the University of Massachusetts Amherst and I hold an undergraduate degree from the National Institute of Technology, Tiruchirappalli. I have 2+ years of experience as full-stack developer working for Citi and Railinc Corp. My dedication to the field extends beyond my work, as I regularly practice competitive programming on online platforms. I have been programming for 9 years since my high school. </p>
        
                <p> I'm a strong advocate of the #AdoptDontShop movement and have spent eight years caring for sick and injured animals. During my undergraduate years, I was actively involved in a student-run volunteer group dedicated to feeding and providing healthcare to stray animals on our campus. In my leisure time, I indulge in fiction, with thrillers being my preferred genre. Additionally, I have dedicated six years to professional training in Carnatic music, demonstrating my commitment to excellence in various facets of life. </p>
            </div>
        );
    }
}

export default Education;
