import React from "react";
import { Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './Routes/Home';
import Types from './Routes/Type';
import RandomFood from './Routes/RandomFood';
import Quiz from './Routes/Quiz';



function Routing() {

    return (
        <Routes>
            <Route path='/' element={<Home />} /> {/* <button>HomePage</button> */}
            <Route path='/App' element={<App />} /> {/* <button>Search Dishes</button> */}
            <Route path='/Type' element={<Types />} /> {/* <button>Pick a dish type</button> */}
            <Route path='/Random' element={<RandomFood />} /> {/*<button>Let us pick for you</button> */}
            <Route path='/Quiz' element={<Quiz />} /> {/*<button>Not Sure, Take a Food Quiz</button> */}
        </Routes>
    );
}

export default Routing;