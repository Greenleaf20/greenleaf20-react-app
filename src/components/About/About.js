import './About.css';

function About() {
    return (
        <div className="route-outer">
            <h2 className="heading" id="about">Hi, I am Archana <span className="wave">&#128075;</span>!</h2>
            <div className='about-class'> I am a Computer Science graduate student at the University of Massachusetts Amherst and I hold an undergraduate degree from the National Institute of Technology, Tiruchirappalli. I have 2+ years of experience as full-stack developer working for Citi and Railinc Corp. My dedication to the field extends beyond my work, as I regularly practice competitive programming on online platforms. I have been programming for 9 years since my high school. </div>
            <br/>
            <div className='about-class'> I'm a strong advocate of the #AdoptDontShop movement and have spent eight years caring for sick and injured animals. During my undergraduate years, I was actively involved in a student-run volunteer group dedicated to feeding and providing healthcare to stray animals on our campus. In my leisure time, I indulge in fiction, with thrillers being my preferred genre. Additionally, I have dedicated six years to professional training in Carnatic music, demonstrating my commitment to excellence in various facets of life. </div>
            <div className="skills">
                <h3>Tech Stack<span role="img" aria-label="Code" className="emoji">&#x1F4BB;</span></h3>
                <hr className="underline-heading"/>
                <div className="skill-section">
                    <h5 className="skill-heading">Languages</h5>
                    <div className="skill-logo-container">
                        <img className="skill-logo" src="/assets/skills/cpp.svg" alt="cpp"/>
                        <img className="skill-logo" src="/assets/skills/python.svg" alt="python"/>
                        <img className="skill-logo" src="/assets/skills/html.svg" alt="html"/>
                        <img className="skill-logo" src="/assets/skills/css.svg" alt="css"/>
                        <img className="skill-logo" src="/assets/skills/java.svg" alt="java"/>
                        <img className="skill-logo" src="/assets/skills/js.svg" alt="js"/>
                        <img className="skill-logo" src="/assets/skills/ts.svg" alt="ts"/>
                        <img className="skill-logo" src="/assets/skills/c.svg" alt="c"/>
                    </div>
                </div>
                <div className="skill-section">
                    <h5 className="skill-heading">Frameworks/Libraries</h5>
                    <div className="skill-logo-container">
                        <img className="skill-logo" src="/assets/skills/angular.svg" alt="angular"/>
                        <img className="skill-logo" src="/assets/skills/react.svg" alt="react"/>
                        <img className="skill-logo" src="/assets/skills/spring.svg" alt="spring"/>
                        <img className="skill-logo" src="/assets/skills/bootstrap.svg" alt="bootstrap"/>
                        <img className="skill-logo" src="/assets/skills/git.svg" alt="git"/>
                        <img className="skill-logo" src="/assets/skills/single-spa.svg" alt="single-spa"/>
                        <img className="skill-logo" src="/assets/skills/gradle.svg" alt="gradle"/>
                        <img className="skill-logo" src="/assets/skills/maven.svg" alt="maven"/>
                        <img className="skill-logo" src="/assets/skills/spark.svg" alt="spark"/>
                    </div>
                </div>
                <div className="skill-section">
                    <h5 className="skill-heading">Databases</h5>
                    <div className="skill-logo-container">
                        <img className="skill-logo" src="/assets/skills/mysql.svg" alt="mysql"/>
                        <img className="skill-logo" src="/assets/skills/postgres.svg" alt="postgres"/>
                    </div>
                </div>
                <div className="skill-section">
                    <h5 className="skill-heading">Machine Learning</h5>
                    <div className="skill-logo-container">
                        <img className="skill-logo" src="/assets/skills/matplotlib.svg" alt="matplotlib"/>
                        <img className="skill-logo" src="/assets/skills/numpy.svg" alt="numpy"/>
                        <img className="skill-logo" src="/assets/skills/pandas.svg" alt="pandas"/>
                        <img className="skill-logo" src="/assets/skills/pytorch.svg" alt="pytorch"/>
                        <img className="skill-logo" src="/assets/skills/scikit-learn.svg" alt="scikit-learn."/>
                        <img className="skill-logo" src="/assets/skills/tensorflow.svg" alt="tensorflow"/>
                    </div>
                </div>
                <div className="skill-section">
                    <h5 className="skill-heading">Operating Systems</h5>
                    <div className="skill-logo-container">
                        <img className="skill-logo" src="/assets/skills/windows.svg" alt="windows"/>
                        <img className="skill-logo" src="/assets/skills/linux.svg" alt="linux"/>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default About;
