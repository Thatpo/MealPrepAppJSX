import React, { useContext, useState } from "react";
import { changePageContext } from "./Context";
import './Quiz.css';
function Quizmain(props) {

    const { changePage, setChangePage } = useContext(changePageContext)
    const { score, setScore } = useContext(changePageContext)
    const [i, setI] = useState(0)
    const [choice, setChoice] = useState("")
    const [moveToFinalPage, setMoveToFinaPage] = useState(false)


    // const changecontext = () => {
    //     setChangePage("results")
    // }
    const storeChoice = (submittedAnswer) => {
        setChoice(submittedAnswer)

    }

    const NextQuestion = () => {
        if (choice === props.questions[i].answer) {
            setScore(score + 1)
        }
        setI(i + 1)
        console.log(i)
        if (i === 3) {
            setMoveToFinaPage(true)
        }
        if (i >= 4) {
            setChangePage("results")
        }
    }

    return (
        <div className="Quiz-Main">
            <h1 className="Quiz-Main-Question">{props.questions[i].question}</h1>
            {/* <button onClick={storeChoice}>{props.quest1[i].option1}</button> */}
            <div className="Quiz-Main-Button">
                <button onClick={() => { storeChoice(props.questions[i].option1) }}>{props.questions[i].option1}</button>
                <button onClick={() => { storeChoice(props.questions[i].option2) }}>{props.questions[i].option2}</button>
                <button onClick={() => { storeChoice(props.questions[i].option3) }}>{props.questions[i].option3}</button>
                <button onClick={() => { storeChoice(props.questions[i].option4) }}>{props.questions[i].option4}</button>
            </div>
            <div className="Quiz-Main-Next">
                {moveToFinalPage ? <button onClick={NextQuestion}>See Results</button> : <button onClick={NextQuestion}>Next Question</button>}
            </div>
        </div>)

}

export default Quizmain;
