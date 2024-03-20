function Projects() {
    return (
        <div className="route-outer">
            <h2 className="heading" id="projects">Projects</h2><hr/>      
            <div className="d-flex justify-content-between">
            <div className="d-flex">    
                <h5>ToneSense 
                <a href="https://github.com/Greenleaf20/ToneSense" target="_blank" rel="noreferrer"><img src="/assets/images/projects/Github-Logo-No-Background.png" className="repo-img"/></a>
                </h5>
            </div>
            <em>Feb '24</em>
            </div>
            <div className="container">
            <div className="row">
                <div className="col-6">
                <div className="video-container left-align-media">
                    <iframe width="420" height="315"
                    src="https://www.youtube.com/embed/ScrEfHBbiIw?mute=1">
                    </iframe>
                </div>
                </div>
                <div className="col-6">
                <div className="project-content-with-media">
                    I developed this application as a part of Hack(H)er413 2024 hackathon conducted at the University of Massachusetts Amherst. It is a web based application developed by  Angular, HTML, CSS and TypeScript to sense the sentiment behind text and audio into 28 different emotions. I used a Transformer based Wav2vec2 model for speech to text conversion and the roberta-base-go_emotions model for analyzing the sentiment behind a text.
                </div>
                </div>
            </div>
            </div>
            
            <div className="d-flex justify-content-between">
            <div className="d-flex">    
                <h5>Stock Trading System</h5>
            </div>
            <em>Feb '23 - May '23</em>
            </div>
            <div className="project-content">
            I developed this application during the Distributed and Operating Systems course in Spring 2023. I desgined a 3-tier stock trading server using Python which can handle requests from various clients using a thread-pool model. I replicated the services and selected a leader for them using a bully leader election algorithm. The requests from the frontend is sent to the leader which then maintained consistency between the replicas in order to handle failure gracefully. I also handled leader failure by initiating re-election when the leader does not respond. I implemented a LRU cache at the top level to cache lookup requests and this led to a decrease in the latency.
            </div>

            <div className="d-flex justify-content-between">
            <div className="d-flex">    
                <h5>Stock Recommendation System 
                <a href="https://github.com/Greenleaf20/spark-stock-market-analysis" target="_blank" rel="noreferrer"><img src="/assets/images/projects/Github-Logo-No-Background.png" className="repo-img"/></a>
                </h5>
            </div>
            <em>Feb '23 - May '23</em>
            </div>
            <div className="container">
            <div className="row">
                <div className="col-6">
                <div className="project-content-with-media">
                    I developed this application during the Systems for Data Science course in Spring 2023. I designed a stock recommendation system using Python that analyzes historical data using PySpark. I used LSTM, Random Forest and Factorization Machine models from SparkMLLib and PyTorch to predict the closing price of stocks. Among these the LSTM model performed the best in terms of Mean Squared Error and I used it to predict the closing price. I also built a dashboard  for the users to easily view the historical trend for each stock.
                </div>
                </div>
                <div className="col-6">
                {/* <img src="images/projects/stock-prediction-dashboard.png" className="project-img right-align-media">  */}
                <iframe width="420" height="315" className="project-img right-align-media"
                    src="https://drive.google.com/file/d/1YhKnynxBedzgzpiZxm2-QTzoksC0Tsie/preview">
                </iframe>
                </div>
            </div>
            </div>
            
            <div className="d-flex justify-content-between">
            <div className="d-flex">    
                <h5>Elevation-based Navigation System (EleNa) 
                <a href="https://github.com/Greenleaf20/EleNa-Frontend" target="_blank" rel="noreferrer"><img src="/assets/images/projects/Github-Logo-No-Background.png" className="repo-img"/></a> 
                <a href="https://github.com/Greenleaf20/EleNa-Backend" target="_blank" rel="noreferrer"><img src="/assets/images/projects/Github-Logo-No-Background.png" className="repo-img"/></a>
                </h5>
            </div>
            <em>Oct '22 - Dec '22</em>
            </div>
            <div className="container">
            <div className="row">
                <div className="col-6">
                <img src="/assets/images/projects/elena-view.png" className="project-img left-align-media"/>
                </div>
                <div className="col-6">
                <div className="project-content-with-media">
                    I developed this application during the Theory and Practice of Software Engineering course in Fall 2022. I built a navigation system using React and JavaScript to suggest the path of minimum elevation gain between locations given by the user. I implemented Dijkstra's and A* algorithms to find a path that has the minimum elevation gain within a user-specified range of the distance of the shortest path. I also designed User Interface where user can pick the locations on the map and view the chosen path. 
                </div>
                </div>
            </div>
            </div>

            <div className="d-flex justify-content-between">
            <div className="d-flex">    
                <h5>Student Cafeteria application 
                <a href="https://github.com/Greenleaf20/mess-application-frontend" target="_blank" rel="noreferrer"><img src="/assets/images/projects/Github-Logo-No-Background.png" className="repo-img"/></a> 
                <a href="https://github.com/Greenleaf20/messiah-backend" target="_blank" rel="noreferrer"><img src="/assets/images/projects/Github-Logo-No-Background.png" className="repo-img"/></a>
                <a href="files/catering-application-report.pdf" target="_blank" rel="noreferrer"><img src="/assets/images/projects/pdf-no-bg.png" className="repo-img"/></a> 
                </h5>
            </div>
            <em>Feb '20</em>
            </div>
            <div className="container">
            <div className="row">
                <div className="col-6">
                <div className="project-content-with-media">
                    I developed this application during a campus wide Hackathon at the National Institute of Technology Tiruchirappalli in 2020. During this period, in the dining halls, caterers manually recorded and marked students' attendance using physical cards. This process proved inconvenient, as students occasionally forgot to bring their cards. Students consistently carried their phones, prompting us to develop a mobile application for meal check-ins at the dining halls. This not only ensured convenience for students but also facilitated easier attendance tracking for caterers. Moreover, it provided a valuable tool for analyzing food consumption patterns and minimizing wastage. I designed the application using React Native and Django. The application has a QR generator for the students and a corresponding scanner for the caterers. Both the parties had a dashboard where they can view/edit schedule correspondingly and also send/receive feedback. I also employed Holt-Winters forecasting for predicting food wastage.
                </div>
                </div>
                <div className="col-6">
                <img src="/assets/images/projects/mess-application/student-view/2.png" className="project-img-portrait right-align-media"/>
                </div>
            </div>
            </div>
            

            <div className="d-flex justify-content-between">
            <div className="d-flex">    
                <h5>Reinforcement Learning based control of ball-beam system 
                <a href="https://ieeexplore.ieee.org/document/9342690" target="_blank" rel="noreferrer"><img src="/assets/images/projects/google-scholar-no-bg.png" className="repo-img"/></a> 
                <a href="files/Archana_Ganesh_Publication.pdf" target="_blank" rel="noreferrer"><img src="/assets/images/projects/pdf-no-bg.png" className="repo-img"/></a> 
                </h5>
            </div>
            <em>Jan '20 - May '20</em>
            </div>
            {/* <em className="guide-details">Guided by Prof. Dhanalakshmi K, IEEE Senior Member</em>  */}
            <div className="container">
            <div className="row">
                <div className="col-6">
                {/* <img src="images/projects/ball-beam-system.png" className="project-img left-align-media">  */}
                <iframe width="420" height="315" className="project-img left-align-media"
                    src="https://drive.google.com/file/d/1z0tq2JNfl9youDE47plMrfh3eNTEtQct/preview">
                </iframe>
                {/* <object data="files/Archana_Ganesh_Publication.pdf" 
                width="420" height="315" className="paper-container"> 
                    <img src="images/projects/pdf-no-bg.jpg" className="repo-img">
                </object>  */}
                </div>
                <div className="col-6">
                <div className="project-content-with-media-less-space">
                    I worked on this project as part of my thesis when I pursued my Bachelor's degree in Instrumentation and Control Engineering with a minor in Computer Science. I chose this project as it is a perfect blend of both my degrees as I used Reinforcement Learning to control a ball and beam system. I developed a simulation environment of the servo based ball and beam system using Python and OpenAI gym. I trained the system using PPO2 and DDPG algorithms and was able to achieve a maximum reward of 0.99 on a scale of 0 to 1. The system was able to handle disturbances as well and was to able to stabilize. My work on this was published in the IEEE International Conference on Industrial and Information Systems in 2020.
                </div>
                </div>
            </div>
            </div>

            <div className="d-flex justify-content-between">
            <div className="d-flex">    
                <h5>
                Genome sequence analysis using Machine Learning
                <a href="/assets/files/genome-analysis-manuscript.pdf" target="_blank" rel="noreferrer"><img src="/assets/images/projects/pdf-no-bg.png" className="repo-img"/></a> 
                </h5>
            </div>
            <em>Dec '19 - May '20</em>
            </div>
            <div className="project-content">
            I was involved in this project when the COVID-19 had just started and was becoming a global threat. At the time, the virus was fairly new to the scientific world and the genome composition of it was relatively unknown. The goal of the project was to compare the genome of the Coronavirus with that of other respiratory diseases and draw knowledge from that. I trained LSTM, CNN and CNN-LSTM hybrid models on 8 respiratory diseases and achieved a maximum accuracy of 99.71%. I used this model to analyze the genome sequence of the Coronavirus by leveraging Transfer Learning.
            </div>

            <div className="d-flex justify-content-between">
            <div className="d-flex">    
                <h5> Uber Rides Analysis 
                <a href="https://github.com/Greenleaf20/CSOE17" target="_blank" rel="noreferrer"><img src="/assets/images/projects/Github-Logo-No-Background.png" className="repo-img"/></a> 
                </h5>
            </div>
            <em>Oct '19</em>
            </div>
            <div className="project-content">
            I created this application as a part of Big Data Analytics course in Fall 2019. I analyzed Uber rides data in New York City to determine how time and day influenced the frequency of the rides. I used MapReduce algorithm of Hadoop to process 4.3 million records and also used multi-threaded mapper classNamees to speed uf the process by 20%. The trends from this data could be useful for Uber and other ride-hailing services, enabling them to anticipate and optimize usage patterns effectively. 
            </div>
            
            <div className="d-flex justify-content-between">
            <div className="d-flex">    
                <h5> Railway Reservation System </h5>
            </div>
            <em>Apr '18</em>
            </div>
            <div className="project-content">
            I developed a railway reservation system using C++ which had features that included train schedules, seat reservation, seat chart view and seat cancellation. I used linked list data structure of C++ and used Object Oriented programming concepts like Inheritance, Encapsulation and Abstraction to effectively handle sensitive data. Only the admin can view the all reservation details and cancel them. The users can only view their reservation and the seating chart. The operations done in the background during a reservation were abstracted from the users.
            </div>

            <div className="d-flex justify-content-between">
            <div className="d-flex">    
                <h5> Ping Pong game </h5>
            </div>
            <em>Oct '16</em>
            </div>
            <div className="container">
            <div className="row">
                <div className="col-6">
                <div className="project-content-with-media">
                    I designed a multi player ping pong game as a web application using HTML, CSS and JavaScript. I developed the controllers for the game as a Mobile application and as Joystick. I developed the mobile application using Android Studio and it used gestures to control the paddle. I designed the Joystick using Arduino and the controller in it can be used to move the paddle.
                </div>
                </div>
                <div className="col-6">
                {/* <img src="images/projects/stock-prediction-dashboard.png" className="project-img right-align-media"> */}
                <iframe width="420" height="315" className="project-img right-align-media"
                    src="https://drive.google.com/file/d/1Pf2xXOjj4CIUUPqF0H1Ys3MLYypKkmPo/preview">
                </iframe>
                </div>
            </div>
            </div>   
        </div>
    );
}

export default Projects;