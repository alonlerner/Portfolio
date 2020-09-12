import React from "react"
import Project from "./Project"
import SongsRecGame from "./videos/SongsRecGame.mp4"
import HangMan from "./videos/HangMan.mp4"
import njitTrivia from "./videos/njit-trivia.png"

function MyProjects() {
    return (
        <div className="section-div">
            <br/>
            <h2>My Projects</h2>
            <br />
            <Project
                videoUrl={njitTrivia}
                codeUrl="https://github.com/alonlerner/njit-trivia"
                title="NJIT S&D Trivia Game"
                explanation="This project is a trivia game about NJIT Swimming & Diving. The app was was built from scratch using react.js library. The app is using an API I developed by myself using lambda functions in AWS. The lambda functions connect to a MySQL database I own. All material I learned for this project is self taught." />

            <br />
            <Project
                videoUrl={SongsRecGame}
                codeUrl="https://github.com/alonlerner/SongRecognitionGame"
                title="Songs Recognition Game"
                explanation="This project is a song recognition game that is written from scratch in Java and is played in the Java console. The game combines material I studied in school and self taught." />

            <br/>
            <Project
                videoUrl={HangMan}
                codeUrl="https://github.com/alonlerner/CarBrandsHangman"
                title="Car Brands Hangman Game"
                explanation="This project is a car brands hangman game that is written from scratch in Python and is played in the Python console. The game combines material I studied in school and self taught." />
            <br/>
        </div>
    )
}

export default MyProjects