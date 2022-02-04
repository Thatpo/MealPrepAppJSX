import React from "react";
import { Link } from 'react-router-dom';
import './Home.css';
import food1 from './assets/food8.jpg';
import food2 from './assets/food2.jpg';
import food3 from './assets/food3.jpg';
import food4 from './assets/food5.jpg';


const Home = () => {
    return (
        <div className="Home-ctn">
            <h1 className="Home-title">Welcome
                to TKKS CookBook
            </h1>
            <div className="Home-links">

                <div className="Home-box home-color">
                    <div className="Home-text">
                        <h2>Start here and explore the wide arrange of dishes on offer.</h2>
                        <Link to="/App" style={{ textDecoration: 'none' }}><li>Search Dishes</li></Link>
                    </div>
                    <img src={food1} alt="food image" className="Home-img" />
                </div>

                <div className="Home-box home-color ">
                    <img src={food2} alt="food image" className="Home-img" />
                    <div className="Home-text">
                        <h2>Looks good, but why dont we spend some time learning about our Health</h2>
                        <Link to="/Type" style={{ textDecoration: 'none' }}><li>Nutrition Page</li></Link>
                    </div>
                </div>

                <div className="Home-box Home-Lower">
                    <div className="Home-text">
                        <h2>Feeling overwhelmed thats fine let us decide for you.</h2>
                        <Link to="/Random" style={{ textDecoration: 'none' }}><li>Let us pick for you</li></Link>
                    </div>
                    <img src={food3} alt="food image" className="Home-img" />
                </div>

                <div className="Home-box Home-Lower">
                    <img src={food4} alt="food image" className="Home-img" />
                    <div className="Home-text">
                        <h2>Test your food knowledge and take our wonderful Food Quiz.</h2>
                        <Link to="/Quiz" style={{ textDecoration: 'none' }}><li>Food Quiz</li></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;