import React from 'react';

const Recipe = ({title, calories, image}) => {
    return (
        <div className="recipe">
            <img src={image} width="100"/>
            <div className="info">
                <h1>{title}</h1>
                <p>{calories} cal</p>
                <button>get Recipe</button>
            </div>
            
        </div>
    );
};

export default Recipe;