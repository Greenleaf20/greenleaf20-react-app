import './Experience.css';

function Experience() {
    return (
        <div className="route-outer">
            <h2 className="heading" id="experience">Industry Experience</h2><hr/>

            <div className='panel-item'>
                <div className="d-flex justify-content-between">
                    <div className="d-flex">
                        <img src="/assets/images/logos/railinc.jpg" alt="Railinc Corp" className="company-icon" /> 
                        <div className="d-flex ms-2">
                            <h5>Railinc Corp</h5>
                            <p className="ms-1"> - Software Engineering Intern</p>
                        </div>
                    </div>
                    <em>Jun '23 - Aug '23</em>
                </div>
                <div className="work-project-content">
                    I worked at Railinc Corp as a Software Engineering intern in the summer of 2023. I was involved in the enhancement of dashboard application that kept track of components that were running on the AWS. The application helps visualize how components of different types on AWS are being used by teams across Railinc. I engineered end-to-end logic using Angular, HTML, CSS, TypeScript and Java to move all or a subset of related components from one component to another while maintaining the component type-type relationship between them. I also wrote logics using PostgreSQL to filter components based on whether they were in service, region and based on whether or not the component was independent or had any dependent components. 
                </div>
            </div>
            

            <div className='panel-item'>
                <div className="d-flex justify-content-between">
                    <div className="d-flex">
                        <img src="/assets/images/logos/citi.jpg" alt="Citi" className="company-icon" /> 
                        <div className="d-flex ms-2">
                            <h5>Citi</h5>
                            <p className="ms-1"> - Software Engineer</p>
                        </div>
                    </div>
                    <em>Aug '20 - Jul '22</em>
                </div>
                <div className="work-project-content">
                    After graduation from my undergraduate degree, I joined the Unified Desktop team of Citi as a Technical Analyst. I was involved with development of micro frontend applications which were in the conceptual stage. I developed internal functionalities as Angular micro frontend applications using HTML, CSS, TypeScript and single-spa which helped with feature modularization, easy code distribution and thereby reduced development and maintenance overhead. The applications were developed once and used across teams. This change of technology also helped reduce the load time of the applications by 60% and I was given the <b>Takes Ownership</b> award for my work on this project. I was also involved with pilot implementation of App Dynamics end user monitoring for the application to analyze the performance of users' end-to-end workflow and received the <b>Succeeds Together</b> award for the same.
                    <br/><br/>
                    During my second year at Citi, I was promoted to the role of Tech Program App Dev 1 and I also guided other teams with the development of micro frontend applications and made sure their applications followed business standards. I gave various Knowledge Transfer sessions to share my knowledge of Angular and the distributed architecture with other teams across Citi. I also helped onboard new employees and guided them while they got accustomed to the team. Throughout my time at Citi, I documented all the setup and technical details involved with my project which helped with my seamless exit to pursure my Master's degree.
                </div>
            </div>
            

            <div className='panel-item'>
                <div className="d-flex justify-content-between">
                    <div className="d-flex">
                        <img src="/assets/images/logos/citi.jpg" alt="Citi" className="company-icon" /> 
                        <div className="d-flex ms-2">
                            <h5>Citi</h5>
                            <p className="ms-1"> - Software Development Intern</p>
                        </div>
                    </div>
                    <em>May '19 - Jul '19</em>
                </div>
                <div className="work-project-content">
                    During my internship at Citi in the summer of 2019, I was involved with a proof of concept which aimed at being the alternative for TIBCO BW based workflows. The idea was to leverage event-driven architecture of Java using RxJava to trigger the steps of the workflow. I migrated a component that cached trade details from TIBCO BW to Java. I used Spring Boot and developed it as a standalone service and used multi-threading to optimize performance by a factor of 1.5.
                </div>
            </div>
            

            <h2 className="" id="academic">Academic Experience</h2><hr/>
            <div className='panel-item'>
                <div className="d-flex justify-content-between">
                    <div className="d-flex">    
                        <h5 className="pe-1">Grading Assistant </h5> - CS 520: Theory and Practice of Software Engineering
                    </div>
                    <em>Feb '24 - May '24</em>
                </div>
            </div>
        </div>
    );
}

export default Experience;
