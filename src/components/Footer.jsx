import React from "react";

const Footer = () => {
    return (
        <div className="bg-primary text-white py-20">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-accent font-semibold text-sm uppercase tracking-wider">Features</p>
                    <h1 className="text-4xl font-bold mt-2">Why Choose RecipeHub</h1>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
                    <div className="flex flex-col items-center text-center">
                        <div className="bg-accent/20 rounded-full p-4 mb-4">
                            <i className="ri-restaurant-line text-3xl text-accent"></i>
                        </div>
                        <h3 className="text-lg font-bold mb-2">Quality Food</h3>
                        <p className="text-gray-300 text-sm">
                            Curated recipes featuring premium ingredients and authentic techniques
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <div className="bg-accent/20 rounded-full p-4 mb-4">
                            <i className="ri-graduation-cap-line text-3xl text-accent"></i>
                        </div>
                        <h3 className="text-lg font-bold mb-2">Learn Expertly</h3>
                        <p className="text-gray-300 text-sm">
                            Master cooking techniques from experienced chefs and culinary experts
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <div className="bg-accent/20 rounded-full p-4 mb-4">
                            <i className="ri-leaf-line text-3xl text-accent"></i>
                        </div>
                        <h3 className="text-lg font-bold mb-2">Fresh Ingredients</h3>
                        <p className="text-gray-300 text-sm">
                            Guides on selecting and using the freshest, highest-quality ingredients
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <div className="bg-accent/20 rounded-full p-4 mb-4">
                            <i className="ri-lightbulb-line text-3xl text-accent"></i>
                        </div>
                        <h3 className="text-lg font-bold mb-2">Easy to Follow</h3>
                        <p className="text-gray-300 text-sm">
                            Step-by-step instructions that are simple and easy to understand
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <div className="bg-accent/20 rounded-full p-4 mb-4">
                            <i className="ri-fire-line text-3xl text-accent"></i>
                        </div>
                        <h3 className="text-lg font-bold mb-2">Delicious Results</h3>
                        <p className="text-gray-300 text-sm">
                            Create restaurant-quality dishes that will impress your family
                        </p>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
                    <p>&copy; 2026 RecipeHub. All rights reserved. | Made with <i className="ri-heart-fill text-accent"></i></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
