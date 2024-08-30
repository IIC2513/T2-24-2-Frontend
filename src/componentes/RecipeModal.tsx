'use client'

import React from "react"

interface ModalProps {
    title: string;
    description: string;
    ingredients: string[];
    tags: string[];
}

const RecipeModal: React.FC<ModalProps> = ({ title, description, ingredients, tags }) => {

    return (
        <div className="modal">
            <h2>{title}</h2>
            <p>{description}</p>
            <ul>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <ul>
                {tags.map((tag, index) => (
                    <li key={index}>{tag}</li>
                ))}
            </ul>
        </div>
    )
}

export default RecipeModal

