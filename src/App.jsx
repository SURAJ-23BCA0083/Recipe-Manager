import React, { useEffect, useContext } from "react";
import Nav from "./components/Nav";

import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Recipes from "./components/Recipes";
import Details from "./components/Details";
import Create from "./components/Create";
import About from "./components/About";
import Contact from "./components/Contact";
import Update from "./components/Update";
import { RecipeContext } from "./store/RecipeContext";

const App = () => {
    const { getRecipes } = useContext(RecipeContext);

    useEffect(() => {
        getRecipes();
    }, []);

    return (
        <div className="flex flex-col min-h-screen bg-light">
            <Nav />

            <main className="flex-1">
                <Routes>
                    <Route path="/" element={<Layout />} />
                    <Route path="/create-recipe" element={<Create />} />
                    <Route path="/update-recipe/:id" element={<Update />} />
                    <Route path="/recipes" element={<Recipes />} />
                    <Route path="/recipes/:id" element={<Details />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>
        </div>
    );
};

export default App;
