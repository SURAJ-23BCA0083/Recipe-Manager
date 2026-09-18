import React, { createContext, useReducer } from "react";
import { toast } from "react-toastify";

// Create Context
export const RecipeContext = createContext();

// Reducer (same logic as recipeSlice)
const recipeReducer = (state, action) => {
    switch (action.type) {
        case "ADD_RECIPE":
            return { ...state, recipes: action.payload };
        default:
            return state;
    }
};

// Provider Component
export const RecipeProvider = ({ children }) => {
    const initialState = { recipes: [] };
    const [state, dispatch] = useReducer(recipeReducer, initialState);

    // Fetch recipes from localStorage (same as asyncgetrecipies)
    const getRecipes = () => {
        try {
            let data = JSON.parse(localStorage.getItem("recipes")) || [];
            dispatch({ type: "ADD_RECIPE", payload: data });
        } catch (error) {
            toast.error(error);
        }
    };

    return (
        <RecipeContext.Provider value={{ recipes: state.recipes, getRecipes }}>
            {children}
        </RecipeContext.Provider>
    );
};
