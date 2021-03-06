import './App.css';
import React, { useState, useEffect } from "react";
import Recipe from './Food';
import { Link } from "react-router-dom";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [lookup, setLookup] = useState(" ");
  const [query, setQuery] = useState('fish');

  const getRecipes = async () => {
    const resp = await fetch(`https://api.edamam.com/search?q=${query}&app_id=099c51d7&app_key=ec6d4ad98906bf1ab5d095683bcf0bf6`);
    const data = await resp.json();
    setRecipes(data.hits);
  }

  const update = event => {
    setLookup(event.target.value);
  }

  const getSearch = event => {
    event.preventDefault();
    setQuery(lookup);
    setLookup(" ")
  }

  //This useeffect tells the page to run whenever a path in the api is changed
  useEffect(() => {
    getRecipes();
  }, [query]);


  return (
    <div className="App">
      <h1 style={{ fontFamily: 'Kanit', letterSpacing: "3px", fontSize: "70px", color: "lightgoldenrodyellow" }}>Search for Dishes</h1>
      <div className="App-links">
        <Link to="/" id="App-links-item" ><li>Home</li></Link>
        <Link to="/Random" id="App-links-item"><li>Random Dishes</li></Link>
        <Link to="/Quiz" id="App-links-item" ><li>Food Quiz</li></Link>
        <Link to="/Type" id="App-links-item" ><li>Nutrition</li></Link>
      </div>
      <form onSubmit={getSearch} className="form" >
        {/* value={lookup} is weird but its just neccesary for searchs */}
        <input className="bar" type="text" value={lookup} onChange={update} />
        <button className="button" type="submit">Search</button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (<Recipe key={recipe.recipe.label} ingredients={recipe.recipe.ingredients}
          title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} />))}
      </div>
    </div>
  );
}

export default App;