"use client"

// RecipeGenerator.js

'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import RecipeCard from '@/components/RecipeCard';

const RecipeGenerator = () => {
const [recipes, setRecipes] = useState([]);
const [search, setSearch] = useState('');
const [selectedRecipe, setSelectedRecipe] = useState(null);
const APP_ID = 'YOUR_EDAMAM_APP_ID';
const APP_KEY = 'YOUR_EDAMAM_APP_KEY';

const generateRecipe = async () => {
	try {
	const response = await axios.get(`https://api.edamam.com/search?q=${search}&app_id=bbb0cce2&app_key=2fe683efd1286808ab9fc1d52132e3dd`);
	if (response.data.hits.length > 0) {
		setRecipes(response.data.hits);
	}
	} catch (error) {
	console.error('Failed to fetch recipe', error);
	}
};

const openModal = (recipe) => {
	setSelectedRecipe(recipe);
	document.getElementById('exampleModal').style.display = 'block';
};

const closeModal = () => {
	setSelectedRecipe(null);
	document.getElementById('exampleModal').style.display = 'none';
};

return (
	<>
	<Navbar />
	<div className="container mt-3 justify-content-center">
	<div className="row">
		<div className="col mb-4">
		<input type="text" value={search} onChange={(e) => setSearch(e.target.value)} className="form-control" />
		</div>
		<div className="col">
		<button onClick={generateRecipe} className="btn btn-success justify-content-center">Create Recipe</button>
		</div>
	</div>
	
		{recipes.length === 0 ? (
		<p>No recipes found</p>
		) : (
		<RecipeCard recipes={recipes}
		openModal={openModal}
		closeModal={closeModal}
		selectedRecipe={selectedRecipe}
		
		/>
		)}
	</div>
	</>
);
};

export default RecipeGenerator;
