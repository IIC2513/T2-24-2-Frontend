'use client';
'use client';
import { useState, useEffect } from "react";
import Image from "next/image";
import RecipeModal from "@/componentes/RecipeModal";
import RecipeCard from "@/componentes/RecipeCard";
import PageSelector from "@/componentes/PageSelector";

import { getRecipes } from "@/services/fetch/getRecipes";

interface Recipe {
  id: number;
  title: string;
  image: string;
  description: string;
  ingredients: string[];
  steps: string[];
  preparation_time_in_minutes: number;
  evaluation: number;
  categories: string[];
}

export default function Home() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const itemsPerPage = 9;

  useEffect(() => {
    const fetchRecipes = async () => {
      const recipes = await getRecipes(page);
      setRecipes(recipes);

      const categories_test = recipes.map((recipe: { categories: any; }) => {
        return recipe.categories;
      }).flat();
      setCategories(Array.from(new Set(categories_test)));
    
      setFilteredRecipes(recipes);
      setLoading(false);
    };
    fetchRecipes();
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    const filtered = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredRecipes(filtered);
    setPage(1);
  };

  const clearSearch = () => {
    setSearchQuery("");
    setFilteredRecipes(recipes);
    setPage(1);
  }

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
    if (event.target.value === "") {
      setFilteredRecipes(recipes);
      setPage(1);
      return;
    }
    const filtered = recipes.filter((recipe) =>
      recipe.categories.includes(event.target.value)
    );
    setFilteredRecipes(filtered);
    setPage(1);
  }

  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentRecipes = filteredRecipes.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const handleRecipeSelect = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleCloseModal = () => {
    setSelectedRecipe(null);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="bg-custom-image bg-cover bg-center bg-no-repeat w-full h-[400px] flex items-center justify-center">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white"
            style={{
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
            }}>
          Welcome to DCChef!
        </h1>
      </div>
      <div className="flex flex-col items-center p-24">
      <p className="text-lg md:text-xl text-gray-700 mb-4">Find your favorite recipes here and start cooking!</p>
        
      <div className="flex flex-row items-center mb-8">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search for recipes"
            className="p-2 border border-gray-300 rounded-md"
          />
          <button
            onClick={handleSearch}
            className="p-2 bg-blue-500 text-white rounded-md ml-2">
            Search
          </button>
          {searchQuery && (
            <button
              onClick={clearSearch}
              className="p-2 bg-red-500 text-white rounded-md ml-2">
              Clear 
            </button>
          )}
        </div>
        <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="p-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        {loading && <p>Loading...</p>}
        {!loading && (
          <div className="grid grid-cols-3 gap-4 mt-4">
            {currentRecipes.map((recipe) => (
              <RecipeCard
                id={recipe.id}
                title={recipe.title}
                image={recipe.image}
                description={recipe.description}
                ingredients={recipe.ingredients}
                tags={recipe.categories}
                onClick={() => handleRecipeSelect(recipe)}
              />
            ))}
          </div>
        )}
        <PageSelector
          currentPage={page}
          totalPages={Math.ceil(filteredRecipes.length / itemsPerPage)}
          onPageChange={handlePageChange}
        />
      </div>
      {selectedRecipe && (
        <RecipeModal
          recipe={selectedRecipe}
          onClose={handleCloseModal}
        />
      )}
    </main>
  );
}

