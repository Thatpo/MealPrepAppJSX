import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Recipe from '../Food';
import "../Food.css";
import "./RandomFood.css";

const RandomFood = () => {
    const [recipes, setRecipes] = useState([]);
    const [query, setQuery] = useState('tomato');
    const foodlist = ["chicken", "tomato", "lamb", "beef", "fish", "pizza", "carrot", "lentel", "potatoes", "Broccoli", "Oatmeal", "beans", "Mango", "egg"]

    const getRecipes = async () => {
        if (query === "") {
            setQuery(foodlist[0])
        }

        const resp = await fetch(`https://api.edamam.com/search?q=${query}&app_id=099c51d7&app_key=ec6d4ad98906bf1ab5d095683bcf0bf6`);
        const data = await resp.json();

        // console.log(data.hits)
        setRecipes(data.hits)
    }

    const chooserecipe = () => {
        const randomnum = Math.floor(Math.random() * (foodlist.length))
        setQuery(foodlist[randomnum])
        // setQuery(foodlist[randomList])

    }

    useEffect(() => {
        getRecipes()
    }, [query]);

    return (
        <div className="Random-container">
            <h1 className="Random-h1">Food Generators</h1>
            <div className="Random-links">
                <Link to="/" id="Random-links-item" ><li>Home</li></Link>
                <Link to="/App" id="Random-links-item" ><li>Search Dishes</li></Link>
                <Link to="/Quiz" id="Random-links-item" ><li>Food Quiz</li></Link>
                <Link to="/Type" id="Random-links-item" ><li>Nutrition</li></Link>
            </div>
            <div className="Random-button"> <button onClick={chooserecipe}>Generate Random Dishes</button>
            </div>
            <div className="recipes Type-back">
                {recipes.map((recipe) => (
                    <Recipe key={recipe.recipe.label} ingredients={recipe.recipe.ingredients}
                        title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} />
                ))}
            </div>
        </div>
    )
}

export default RandomFood;