import React from "react";

const Home = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-light to-gray-50 flex items-center py-20">
            <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-6">
                    <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight">
                        Discover <span className="text-accent">Delicious</span> Recipes
                    </h1>
                    <p className="text-lg text-neutral leading-relaxed">
                        Explore a world of culinary delights. Learn cooking techniques from seasoned chefs and create amazing dishes right in your own kitchen.
                    </p>
                    <div className="flex gap-4 pt-4">
                        <button className="btn-primary">
                            Get Started <i className="ri-arrow-right-line ml-2"></i>
                        </button>
                        <button className="border-2 border-accent text-accent px-6 py-2 rounded-lg hover:bg-accent hover:text-white transition-all duration-200 font-medium">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Right Image */}
                <div className="px-6">
                    <img
                        className="w-full drop-shadow-lg"
                        src="https://www.pngall.com/wp-content/uploads/8/Cooking-Recipe-PNG-Clipart.png"
                        alt="Cooking"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
