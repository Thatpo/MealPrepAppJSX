import React, { useState } from 'react';
// import style from './recipe.module.css';
import './Food.css';
const Food = ({ image, title, calories, ingredients }) => {
    const [toggle, setToggle] = useState(false);
    const [btnText, setbtnText] = useState("View Meal");

    const changeview = () => {
        setToggle(!toggle);
        if (toggle === true) {
            setbtnText("View Meal")
        }
        else {
            setbtnText("Close Meal")
        }
    }

    return (
        <div className="Food">
            <h1>{title}</h1>
            <img src={image} alt="" />
            <div className={toggle ? "FoodTrue" : "FoodFalse"}>
                <ol>{ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}</ol>
                <p style={{ margin: "10px" }}> {String(Math.floor(Number(calories)))} Calories</p>
            </div>
            <button className="FoodBtn" onClick={changeview}>{btnText}</button>
        </div>
    )
}

export default Food;