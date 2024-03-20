function Education() {
    return (
        <div className="route-outer">
            <h2 className="heading" id="education">Education</h2><hr/>
            <div className="d-flex justify-content-between">
                <div className="d-flex">
                <img src="/assets/images/logos/umass.png" alt="UMass Amherst" className="company-icon" /> 
                <div className="d-flex ms-2">
                    <h5>University of Massachusetts Amherst</h5>
                </div>
                </div>
                <em>Sep '22 - May '24</em>
            </div>
            <div className="container">
                <div className="row">
                <div className="col-6">
                    <img src="/assets/images/university/umass.jpeg" className="university-img left-align-media"/>
                </div>
                <div className="col-6">
                    <div className="coursework">
                    <b>Master of Science in Computer Science</b> (GPA: 3.83 / 4.0) <br/><br/>
                    <b>Coursework:</b> Advanced Algorithms, Distributed and Operating Systems, Computer and Network Security, Theory and Practice of Software Engineering, System Defense and Test, Secure Distributed Systems, Machine Learning, Applied Information Retrieval, Systems for Data Science, Reinforcement Learning
                    </div>
                </div>
                </div>
            </div>
    
            <div className="d-flex justify-content-between">
                <div className="d-flex">
                <img src="/assets/images/logos/nitt.png" alt="NITT Trichy" className="company-icon" /> 
                <div className="d-flex ms-2">
                    <h5>National Institute of Technology Tiruchirappalli</h5>
                </div>
                </div>
                <em>July '16 - Jun '20</em>
            </div>
            <div className="container">
                <div className="row">
                <div className="col-6">
                    <div className="coursework">
                    <b>Bachelor of Technology in Instrumentation and Control Engineering</b> (GPA: 8.41 / 10.0)
                    <br/><br/>
                    <b>Minor in Computer Science and Engineering</b> (GPA: 8.6 / 10.0)
                    <br/><br/>
                    <b>Coursework:</b> Data Structures and Algorithms, Operating Systems, Database Management System, Computer Organization, Software Engineering, Big Data Analytics, Neural Networks and Fuzzy Logic, Digital Electronics, Microprocessors and Microcontrollers
                    </div>
                </div>
                <div className="col-6">
                    <img src="/assets/images/university/nitt.jpeg" className="university-img-portrait"/>
                </div>
                </div>
            </div>
    
            <div className="d-flex justify-content-between">
                <div className="d-flex">
                <img src="/assets/images/logos/jawahar.png" alt="UMass Amherst" className="company-icon" /> 
                <div className="d-flex ms-2">
                    <h5>Jawahar Higher Secondary School (CBSE) Neyveli</h5>
                </div>
                </div>
                <em>Jun '14 - May '16</em>
            </div>
            <div className="container">
                <div className="row">
                <div className="col-6">
                    <img src="/assets/images/university/high-school.jpg" className="university-img left-align-media"/>
                </div>
                <div className="col-6">
                    <div className="coursework">
                    94.8% in CBSE board examination conducted in 2016 and received Academic Achievement Award for the same <br/><br/>
                    Secured an All India Rank of 9858 among 1.2 million students in JEE Mains 2016 <br/><br/>
                    <b>Coursework:</b> Computer Science, Mathematics, Physics, Chemistry, English
                    </div>
                </div>
                </div>
            </div>

            <h2 className="" id="academic">Academic Experience</h2><hr/>
            <div className="d-flex justify-content-between">
            <div className="d-flex">    
                <h5 className="pe-1">Grading Assistant </h5> - CS 520: Theory and Practice of Software Engineering
            </div>
            <em>Feb '24 - May '24</em>
            </div>
        </div>
    );
}

export default Education;
