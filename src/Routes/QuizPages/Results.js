import React, { useContext, useState } from "react";
import { changePageContext } from "./Context";
import './Quiz.css';
function Results(props) {

    const { changePage, setChangePage } = useContext(changePageContext)
    const { score, setScore } = useContext(changePageContext)
    const [showAnswers, setShowAnswers] = useState(false)



    const changecontext = () => {
        setChangePage("homePage")
        setScore(0)
    }

    const displayAnswers = () => {
        setShowAnswers(!showAnswers)
    }

    return (
        <div className="Quiz-Results">
            <h2>Results</h2>
            <h1>You got {score}/5 questions right</h1>
            <button onClick={changecontext}>GO TO START</button>
            {/* <h1>{props.questions[i].option1}</h1> */}
            {console.log(props)}
            <div className={showAnswers ? "Quiz-Results-Show" : "Quiz-Results-DontShow"}>
                <h1>{props.questions[0].question}</h1>
                <h1>Answer : {props.questions[0].answer}</h1>
                <h1>{props.questions[1].question}</h1>
                <h1>Answer : {props.questions[1].answer}</h1>
                <h1>{props.questions[2].question}</h1>
                <h1>Answer : {props.questions[2].answer}</h1>
                <h1>{props.questions[3].question}</h1>
                <h1>Answer : {props.questions[3].answer}</h1>
                <h1>{props.questions[4].question}</h1>
                <h1>Answer : {props.questions[4].answer}</h1>
            </div>

            <button onClick={displayAnswers}>See Answers</button>
        </div>
    )

}

export default Results;
