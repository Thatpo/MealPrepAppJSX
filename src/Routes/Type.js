import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Food from '../Food';
import "./Type.css";


function Type() {
    const [weight, setWeight] = useState(0)
    const [height, setHeight] = useState(0)
    const [bmi, setBmi] = useState('')
    const [message, setMessage] = useState('')



    let calcBmi = (event) => {
        event.preventDefault()
        if (weight === 0 || height === 0) {
            alert('Please enter a valid weight and height')
        } else {
            let bmi = (weight / (height * height) * 703)
            setBmi(bmi.toFixed(1))

            if (bmi < 25) {
                setMessage('You are underweight')
            } else if (bmi >= 25 && bmi < 30) {
                setMessage('You are a healthy weight')
            } else {
                setMessage('You are overweight')
            }
        }
    }


    let reload = () => {
        window.location.reload()
    }




    return (
        <div className="Type-container">

            {/* <h1 className="Type-text">Nutrition</h1> */}
            <div className="Type-Image">
                <h1>Nutrition</h1>

            </div>
            <div className="Type-links">
                <Link to="/" id="Type-links-item" ><li>Home</li></Link>
                <Link to="/App" id="Type-links-item"><li>Search Dishes</li></Link>
                <Link to="/Random" id="Type-links-item" ><li>Random Food Selection</li></Link>
                <Link to="/Quiz" id="Type-links-item" ><li>Food Quiz</li></Link>
            </div>

            <div className="Type-text-top">
                <h5>What is Nutrition</h5>
                <p>Nutrition is the study of how food and drink affects our bodies with  special regard to the essential nutrients necessary to support human health.
                    It looks at the physiological and biochemical processes involved in nourishment and how substances in food provide energy or are converted into body tissues.
                    These nutrients, which are the source of energy for our bodies, are classed as: carbohydrates, fats, fibre, minerals, proteins, vitamins and water.
                    Good nutrition means obtaining the right amount of nutrients from healthy foods in the right combinations.
                    An important part of the study of nutrition is looking at diseases that can result from malnutrition and the role that food plays in the development of chronic disease.
                </p>
            </div>

            <div className="Type-exercise">
                <div className="Type-Exercise-Text">
                    <h5>Exercise</h5>
                    <p>
                        Regular physical activity can improve your muscle strength and boost your endurance.
                        Exercise delivers oxygen and nutrients to your tissues and helps your cardiovascular system work more efficiently.
                        And when your heart and lung health improve, you have more energy to tackle daily chores. Take the BMI calculator to learn more about your health.
                    </p>
                </div>


                <div className="Type-app">
                    <div className='container'>
                        <h2 className='center'>BMI Calculator</h2>
                        <form onSubmit={calcBmi}>
                            <div>
                                <label>Weight (lbs)</label>
                                <input value={weight} onChange={(e) => setWeight(e.target.value)} />
                            </div>
                            <div>
                                <label>Height (in)</label>
                                <input value={height} onChange={(event) => setHeight(event.target.value)} />
                            </div>
                            <div>
                                <button className='btn' type='submit'>Submit</button>
                                <button className='btn btn-outline' onClick={reload} type='submit'>Clear</button>
                            </div>
                        </form>

                        <div className='center'>
                            <h3>Your BMI is: {bmi}</h3>
                            <p>{message}</p>
                        </div>
                    </div>
                </div>


            </div><div className="Type-Image2">
            </div>
        </div>

    );
}




export default Type;