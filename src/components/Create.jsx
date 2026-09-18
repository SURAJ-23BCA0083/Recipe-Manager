import { nanoid } from "nanoid";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncgetrecipies } from "../store/actions/recipeActions";

const Create = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { recipes } = useSelector((state) => state.recipeReducer);

    const [image, setimage] = useState("");
    const [title, settitle] = useState("");
    const [description, setdescription] = useState("");
    const [ingredients, setingredients] = useState("");
    const [instructions, setinstructions] = useState("");

    const SubmitHandler = (e) => {
        e.preventDefault();
        if (!image || !title || !description || !ingredients || !instructions) {
            toast.error("Please fill in all fields");
            return;
        }
        
        const newRecipe = {
            id: nanoid(),
            image,
            title,
            description,
            ingredients,
            instructions,
        };

        localStorage.setItem(
            "recipes",
            JSON.stringify([...recipes, newRecipe])
        );
        dispatch(asyncgetrecipies());
        toast.success("Recipe Created Successfully!");
        navigate("/recipes");
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-light to-gray-50 py-20">
            <div className="max-w-4xl mx-auto px-6">
                <div className="mb-12">
                    <h1 className="text-5xl font-bold text-primary mb-4">
                        Create Your Own <span className="text-accent">Recipe</span>
                    </h1>
                    <p className="text-neutral text-lg">
                        Share your culinary creation with our community. Fill in the details below.
                    </p>
                </div>

                <form onSubmit={SubmitHandler} className="bg-white rounded-xl shadow-card p-8 space-y-6">
                    {/* Recipe Name */}
                    <div>
                        <label className="block text-primary font-semibold mb-2">Recipe Name *</label>
                        <input
                            onChange={(e) => settitle(e.target.value)}
                            value={title}
                            type="text"
                            className="input-field"
                            placeholder="Enter recipe name"
                            required
                        />
                    </div>

                    {/* Image URL */}
                    <div>
                        <label className="block text-primary font-semibold mb-2">Image URL *</label>
                        <input
                            onChange={(e) => setimage(e.target.value)}
                            value={image}
                            type="url"
                            className="input-field"
                            placeholder="https://example.com/image.jpg"
                            required
                        />
                        {image && (
                            <div className="mt-4 rounded-lg overflow-hidden h-40">
                                <img src={image} alt="Preview" className="w-full h-full object-cover" />
                            </div>
                        )}
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-primary font-semibold mb-2">Description *</label>
                        <textarea
                            onChange={(e) => setdescription(e.target.value)}
                            value={description}
                            className="input-field resize-none"
                            rows="4"
                            placeholder="Describe your recipe, its origin, and what makes it special..."
                            required
                        ></textarea>
                    </div>

                    {/* Ingredients */}
                    <div>
                        <label className="block text-primary font-semibold mb-2">Ingredients *</label>
                        <textarea
                            onChange={(e) => setingredients(e.target.value)}
                            value={ingredients}
                            className="input-field resize-none"
                            rows="6"
                            placeholder="List all ingredients (separate each ingredient with a comma)&#10;Example: 2 cups flour, 1 cup sugar, 3 eggs"
                            required
                        ></textarea>
                    </div>

                    {/* Instructions */}
                    <div>
                        <label className="block text-primary font-semibold mb-2">Instructions *</label>
                        <textarea
                            onChange={(e) => setinstructions(e.target.value)}
                            value={instructions}
                            className="input-field resize-none"
                            rows="6"
                            placeholder="Step-by-step cooking instructions (separate each step with a comma)&#10;Example: Preheat oven, Mix dry ingredients, Add wet ingredients"
                            required
                        ></textarea>
                    </div>

                    {/* Submit Buttons */}
                    <div className="flex gap-4 pt-6">
                        <button type="submit" className="btn-primary flex-1">
                            Publish Recipe <i className="ri-send-plane-line ml-2"></i>
                        </button>
                        <button 
                            type="button" 
                            onClick={() => navigate("/recipes")}
                            className="border-2 border-neutral/20 text-primary px-6 py-2 rounded-lg hover:bg-gray-50 transition-all duration-200 font-medium"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Create;
