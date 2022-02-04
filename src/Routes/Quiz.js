// import './Quiz.css';
import React, { useState, useContext } from 'react';
import Home from "./QuizPages/QuizStart";
import Results from "./QuizPages/Results";
import Quizmain from "./QuizPages/Quizmain";
import { changePageContext } from "./QuizPages/Context";


function Quiz() {
    const [changePage, setChangePage] = useState("homePage")
    const [score, setScore] = useState(0)
    const qAndA = [
        {
            question: "In which country do peaches originate from?",
            option1: "China",
            option2: "Vietnam",
            option3: "Brazil",
            option4: "India",
            answer: "China"
        },
        {
            question: "What family are Raspberries a member of?",
            option1: "Bean",
            option2: "Bell",
            option3: "Daisy",
            option4: "Rose",
            answer: "Rose"
        },
        {
            question: "Which Mexican city do Ceasar Salads originate from?",
            option1: "Tijuana",
            option2: "Puebla",
            option3: "Durango",
            option4: "Xalapa",
            answer: "Tijuana"
        },
        {
            question: "How long does it take for Avocados to ripen?",
            option1: "1 month",
            option2: "2-5 days",
            option3: "1-2 weeks",
            option4: "3-4 weeks",
            answer: "1-2 weeks"
        },
        {
            question: "When were burgers invented?",
            option1: "1920",
            option2: "1859",
            option3: "1911",
            option4: "1900",
            answer: "1900"
        }
    ]

    return (
        <changePageContext.Provider value={{ changePage, setChangePage, score, setScore }}>
            {/* {(changePage === "") && <Login />} */}
            {(changePage === "homePage") && <Home />}
            {(changePage === "results") && <Results questions={qAndA} />}
            {(changePage === "quiz") && <Quizmain questions={qAndA} />}
            {/* These if gamestate===whatere are just saying if this
                  is true then render x component, its called
                  short circuit evaluation*/}
        </changePageContext.Provider>

    );

}
export default Quiz;