'use client'
import React from "react"
import Image from "next/image";

interface RecipeProps {
    id: number;
    title: string;
    image: string;
    description: string;
    ingredients: string[];
    tags: string[];
    onClick: () => void;
}

const RecipeCard: React.FC<RecipeProps> = ({ id, title, image, description, ingredients, tags, onClick }) => {
    
    // Check if image is a URL
    const isURL = (str: string) => {
        const pattern = new RegExp('^(https?:\\/\\/)?'+ 
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ 
        '((\\d{1,3}\\.){3}\\d{1,3}))'+
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ 
        '(\\#[-a-z\\d_]*)?$','i'); 
        return !!pattern.test(str);
    }

 
    if (!isURL(image)) {
        image = '/fallback.jpg';
    }

    return (
        <div 
        key={id} 
        className="flex flex-col items-center p-4 border border-gray-300 rounded-md shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-100"
        onClick={onClick}
        >
            <div className="image-container">
            <Image
                  src={image}
                  alt={title}

                  width={500} 
                  height={100} 
                  className="mb-4 rounded-md"
                  
                />
                <h2 className="text-2xl font-bold">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
        )
}

export default RecipeCard;