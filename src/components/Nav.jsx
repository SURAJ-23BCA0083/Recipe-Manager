import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition">
                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                        <i className="ri-restaurant-2-fill text-white text-lg"></i>
                    </div>
                    <span className="text-xl font-bold text-primary hidden sm:inline">RecipeHub</span>
                </Link>

                {/* Navigation Links */}
                <div className="hidden md:flex gap-x-8 items-center">
                    <Link 
                        className="text-primary hover:text-accent font-medium transition-colors duration-200" 
                        to="/"
                    >
                        Home
                    </Link>
                    <Link 
                        className="text-primary hover:text-accent font-medium transition-colors duration-200"
                        to="/recipes"
                    >
                        Recipes
                    </Link>
                    <Link 
                        className="text-primary hover:text-accent font-medium transition-colors duration-200"
                        to="/about"
                    >
                        About
                    </Link>
                    <Link 
                        className="text-primary hover:text-accent font-medium transition-colors duration-200"
                        to="/contact"
                    >
                        Contact
                    </Link>
                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden">
                    <i className="ri-menu-line text-2xl text-primary cursor-pointer"></i>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
