

import React, { useEffect, useState } from 'react';

import './App.css';
import Recipe from './components/Recipe';
function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');
  const exampleReq= `https://api.edamam.com/search?q=${query}&app_id=a116d154&app_key=1e40b94d5bf434363595a43b57967722`;

  useEffect(() => {
    getRecipe()
  }, [])
  const getRecipe= async () => {
    const res = await fetch(exampleReq)
    const data = await res.json()
    setRecipes(data.hits);
  }
  const updateSearch = e => {
    setSearch(e.target.value)
  }
  const getSearch = e => {
    e.preventDefault()
    setQuery(search)
  }
  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value= {search} onChange= {updateSearch} placeholder="type here to search"/>
        <button className="search-button" type='submit'>Search</button> 
      </form>   
      {
        recipes.map(recipe => (
          <Recipe 
          title={recipe.recipe.label} 
          calories={Math.floor(recipe.recipe.calories)} 
          image={recipe.recipe.image}
          />
        ))
      
      }
      
        
    </div> 
  );
}

export default App;
