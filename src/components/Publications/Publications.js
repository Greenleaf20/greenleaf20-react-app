import './Publications.css';

function Publications() {
    return (
        <div className="route-outer">
            <h2 className="heading" id="social">Publications</h2><hr/>
            <div className='panel-item'>
            <div className="d-flex justify-content-between">
                <div className="d-flex">    
                        <h5>Reinforcement Learning based control of ball-beam system </h5>
                        <a href="https://ieeexplore.ieee.org/document/9342690" target="_blank" rel="noreferrer"><img src="/assets/images/projects/google-scholar-no-bg.png" alt="Paper link" className="repo-img"/></a> 
                        <a href="/assets/files/Archana_Ganesh_Publication.pdf" target="_blank" rel="noreferrer"><img src="/assets/images/projects/pdf-no-bg.png" className="repo-img" alt="PDF logo" /></a> 
                    </div>
                    <em>Jan '20 - May '20</em>
                </div>
                <p className='guide'>
                    Guide: Dr. K. Dhanalakshmi <br/>
                    Professor, National Institute of Technology Tiruchirappalli <br/>
                </p>
                <div className="container publication-container">
                    <div className='publication-text citation'>
                        A. Ganesh, M. Banu Sundareswari, M. Panda, G. Then Mozhi and K. Dhanalakshmi, "Reinforcement learning control of servo actuated centrally pivoted ball on a beam," 2020 IEEE 15th International Conference on Industrial and Information Systems (ICIIS), RUPNAGAR, India, 2020, pp. 103-108, doi: 10.1109/ICIIS51140.2020.9342690.
                    </div>
                    <div className='row'>
                        <div className='col-md-6 col-xs-12'>
                            <img src="/assets/images/projects/ball-beam-system.png" alt="die" className='publication-img'/>
                        </div>
                        <div className='col-md-6 col-xs-12'>
                            <img src="/assets/images/projects/ballbeam.jpeg" alt="die" className='publication-img'/>
                        </div>
                    </div>
                    <div className='publication-text'>
                        I worked on this project as part of my thesis when I pursued my Bachelor's degree in Instrumentation and Control Engineering with a minor in Computer Science. I chose this project as it is a perfect blend of both my degrees as I used Reinforcement Learning to control a ball and beam system. I developed a simulation environment of the servo based ball and beam system using Python and OpenAI gym. I trained the system using Proximal Policy Optimization and Deep Deterministic Policy Gradient algorithms and was able to achieve a maximum reward of 0.99 on a scale of 0 to 1. The system was able to handle disturbances as well and was to able to stabilize. My work on this was published in the <span className="publication-name">IEEE International Conference on Industrial and Information Systems</span> in 2020. <br/> <br/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Publications;
