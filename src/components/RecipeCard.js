"use client"

// RecipeCard.js

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
const RecipeCard = ({recipes, openModal, closeModal, selectedRecipe}) => {
return (
	<div className="row">
		{
			recipes.map((recipe) => (
				<div key={recipe.recipe.label} className="col-md-3 mb-3">
					<div className="card">
						<img src={recipe.recipe.image} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} alt={recipe.recipe.label} />
						<div className="card-body">
							<h5 className="card-title">{recipe.recipe.label}</h5>
							<p className="card-text">Calories: {recipe.recipe.calories.toFixed(2)}</p>
							<button onClick={() => openModal(recipe)} className="btn btn-outline-success">View Ingredients</button>
						</div>
					</div>
				</div>
			))
		}
		<div className="modal" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" onClick={closeModal}>
	<div className="modal-dialog modal-dialog-centered" role="document" style={{ margin: "auto" }}>
		<div className="modal-content" onClick={(e) => e.stopPropagation()}>
			<div className="modal-header">
				<h5 className="modal-title" id="exampleModalLabel">Ingredients{' '}</h5>
				<button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closeModal}>
					<span aria-hidden="true">×</span>
				</button>
			</div>
			<div className="modal-body">
				<ul>
					{selectedRecipe && selectedRecipe.recipe.ingredientLines.map((ingredient, index) => (
						<li key={index}>{ingredient}</li>
					))}
				</ul>
			</div>
		</div>
	</div>
</div>

	</div>
	
)
}

export default RecipeCard
