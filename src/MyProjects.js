import React from "react"
import Project from "./Project"
import vueFlask from "./videos/vuejs-flask.png"
import SongsRecGame from "./videos/SongsRecGame.mp4"
import HangMan from "./videos/HangMan.mp4"
import njitTrivia from "./videos/njit-trivia.png"
import jdbcCompany from "./videos/jdbc-company2.png"

function MyProjects() {
    return (
        <div className="section-div">
            <br/>
            <h2>My Projects</h2>
            <br />
            <Project
                videoUrl={vueFlask}
                codeUrl="https://github.com/alonlerner/college-recruiting-email-generator"
                title="College Recruiting Email Generator"
                explanation="This project is a full stack web application. Users in this application may register, select their favorite colleges, and send mass emails in order to get recruit. This application is written in Python and utilizes Flask and Vue.js frameworks."
                picUrl={null}
            />
            <br />

            <Project
                videoUrl={njitTrivia}
                codeUrl="https://github.com/alonlerner/nba-trivia"
                title="NBA Trivia Game"
                explanation="This project is a trivia game about the NBA. The app was was built from scratch using JavaScript lbaries such as react.js and Node.js. The app is using an external and an API I developed by myself using lambda functions in AWS. The lambda functions connect to a MySQL database I own. All the questions and answers are changed automatically as needed throughout the season. All material I learned for this project is self taught."
                picUrl="https://alonlerner.github.io/nba-trivia/"
            />

            {/* <br/>
            <Project
                videoUrl={njitTrivia}
                codeUrl="https://github.com/alonlerner/njit-trivia"
                title="NJIT S&D Trivia Game"
                explanation="This project is a trivia game about NJIT Swimming & Diving. The app was was built from scratch using react.js library. The app is using an API I developed by myself using lambda functions in AWS. The lambda functions connect to a MySQL database I own. All material I learned for this project is self taught."
                picUrl="https://alonlerner.github.io/njit-trivia/"
            /> */}
                
            <br />
            <Project
                videoUrl={jdbcCompany}
                codeUrl="https://github.com/alonlerner/JDBC-company"
                title="Company Workers Data Editor"
                explanation="This project is a company workers data editor that was written from scratch in Java using JDBC Framework. The project connects to a MySQL database I own. The project combines material I studied in school and self taught."
                picUrl={null}
            />

            <br />
            <Project
                videoUrl={SongsRecGame}
                codeUrl="https://github.com/alonlerner/SongRecognitionGame"
                title="Songs Recognition Game"
                explanation="This project is a song recognition game that was written from scratch in Java and is played in the Java console. The game combines material I studied in school and self taught."
                picUrl={null}
            />

            {/* <br/>
            <Project
                videoUrl={HangMan}
                codeUrl="https://github.com/alonlerner/CarBrandsHangman"
                title="Car Brands Hangman Game"
                explanation="This project is a car brands hangman game that was written from scratch in Python and is played in the Python console. The game combines material I studied in school and self taught."
                picUrl={null}
            />
            <br/> */}
        </div>
    )
}

export default MyProjects