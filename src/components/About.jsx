import React from "react";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-light to-gray-50 py-20">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-primary mb-6">
                        About <span className="text-accent">RecipeHub</span>
                    </h1>
                    <p className="text-xl text-neutral leading-relaxed mb-8">
                        We believe that cooking is more than just preparing food—it's about creating memories, sharing love, and enjoying life's simple pleasures. Our mission is to inspire people to cook with confidence and creativity.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-primary">Our Vision</h2>
                        <p className="text-neutral leading-relaxed">
                            To become the world's most trusted platform for culinary inspiration and education, bringing together food lovers and cooking enthusiasts from every corner of the globe.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-primary">Our Mission</h2>
                        <p className="text-neutral leading-relaxed">
                            We provide easy-to-follow recipes, cooking tips, and techniques designed to empower home cooks to unleash their culinary creativity and create restaurant-quality dishes at home.
                        </p>
                    </div>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-card mb-12">
                    <h2 className="text-2xl font-bold text-primary mb-6">Why Choose Us?</h2>
                    <ul className="space-y-4">
                        <li className="flex gap-4 items-start">
                            <i className="ri-check-double-line text-accent text-2xl mt-1 flex-shrink-0"></i>
                            <div>
                                <h3 className="font-bold text-primary">Curated Recipes</h3>
                                <p className="text-neutral text-sm">Handpicked recipes tested and perfected by culinary experts</p>
                            </div>
                        </li>
                        <li className="flex gap-4 items-start">
                            <i className="ri-check-double-line text-accent text-2xl mt-1 flex-shrink-0"></i>
                            <div>
                                <h3 className="font-bold text-primary">Expert Guidance</h3>
                                <p className="text-neutral text-sm">Learn from experienced chefs and culinary professionals</p>
                            </div>
                        </li>
                        <li className="flex gap-4 items-start">
                            <i className="ri-check-double-line text-accent text-2xl mt-1 flex-shrink-0"></i>
                            <div>
                                <h3 className="font-bold text-primary">Community Driven</h3>
                                <p className="text-neutral text-sm">Join thousands of cooking enthusiasts sharing their experiences</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="text-center">
                    <p className="text-lg text-neutral mb-6">
                        Ready to start your culinary journey?
                    </p>
                    <Link to="/" className="btn-primary">
                        Explore Recipes <i className="ri-arrow-right-line ml-2"></i>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default About;
