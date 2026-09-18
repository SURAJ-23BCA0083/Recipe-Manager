import Card from "./Card";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { RecipeContext } from "../store/RecipeContext";

const Recipes = () => {
    const { recipes } = useContext(RecipeContext);
    const { pathname } = useLocation();

    return (
        <div className="min-h-screen bg-light py-16">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="section-title">Our Recipes</h1>
                    <p className="text-neutral text-lg">
                        Explore our collection of delicious and easy-to-follow recipes
                    </p>
                </div>

                {/* Create Recipe Button - Only on /recipes page */}
                {pathname === "/recipes" && (
                    <div className="mb-12 flex justify-center">
                        <Link
                            to="/create-recipe"
                            className="flex items-center gap-2 btn-secondary"
                        >
                            <i className="ri-add-circle-line text-lg"></i>
                            Create Recipe
                        </Link>
                    </div>
                )}

                {/* Recipe Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {recipes.length > 0 ? (
                        recipes.map((r) => <Card key={r.id} recipe={r} />)
                    ) : (
                        <div className="col-span-full py-16">
                            <h2 className="text-center text-2xl font-semibold text-neutral">
                                No Recipes Found
                            </h2>
                            <p className="text-center text-neutral mt-2">
                                Start creating delicious recipes today!
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Recipes;
