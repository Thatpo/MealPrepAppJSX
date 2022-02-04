import React, { useContext } from 'react';
import './Quiz.css';
import { changePageContext } from './Context';
import { Link } from "react-router-dom";
function Home() {
    const { changePage, setChangePage } = useContext(changePageContext)

    const changecontext = () => {
        setChangePage("quiz")
    }
    return (
        <div className="Quiz-start">
            <h1 className='Quiz-h1'>Food Quiz</h1>
            <div className="Quiz-links">
                <Link to="/" id="Quiz-links-item" ><li>Home</li></Link>
                <Link to="/Random" id="Quiz-links-item"><li>Random Dishes</li></Link>
                <Link to="/App" id="Quiz-links-item" ><li>Search Dishes</li></Link>
                <Link to="/Type" id="Quiz-links-item" ><li>Nutrition</li></Link>
            </div>
            <div className="Quiz-start-button">
                <button onClick={changecontext}>Start Quiz</button>
            </div>
        </div>)

}

export default Home;