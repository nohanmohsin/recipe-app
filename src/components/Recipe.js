import React from 'react';

const Recipe = ({title, calories, image}) => {
    return (
        <div className="recipe">
            <img src={image} width="100" alt=''/>
            <div className="info">
                <h1 className='foodname'>{title}</h1>
                <span>{calories} cal</span>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis dui velit amet, cursus congue ultrices tellus enim a. Et, volutpat natoque tristique varius nunc dignissim. Arcu, mollis et interdum cras cursus. In enim, eget etiam interdum facilisis eget massa nullam ullamcorp</p>
                <button>get Recipe</button>
            </div>
            
        </div>
    );
};

export default Recipe;