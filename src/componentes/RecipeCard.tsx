'use client'
import React from "react"

interface RecipeProps {
    title: string;
    image: string;
    description: string;
    ingredients: string[];
    tags: string[];
}

const RecipeCard: React.FC<RecipeProps> = ({ title, image, description, ingredients, tags }) => {

    return (
        <div className="card">
            <img src="" alt="" />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
        )
}

export default RecipeCard;