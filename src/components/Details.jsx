import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { asyncgetrecipies } from "../store/actions/recipeActions";

const Details = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const params = useParams();
    const { recipes } = useSelector((state) => state.recipeReducer);
    const recipe = recipes.find((r) => r.id == params.id);

    const DeleteHandler = () => {
        localStorage.setItem(
            "recipes",
            JSON.stringify(recipes.filter((r) => r.id != params.id))
        );
        dispatch(asyncgetrecipies());
        toast.success("Recipe Deleted Successfully!");
        navigate("/recipes");
    };

    return recipe ? (
        <div className="min-h-screen bg-light py-12">
            <div className="max-w-7xl mx-auto px-6">
                {/* Back Button */}
                <Link 
                    to="/recipes" 
                    className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold mb-8 transition"
                >
                    <i className="ri-arrow-left-line text-2xl"></i>
                    Back to Recipes
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left: Image and Details */}
                    <div className="bg-white rounded-xl shadow-card overflow-hidden">
                        <div className="h-80 overflow-hidden bg-gray-100">
                            <img 
                                className="w-full h-full object-cover" 
                                src={recipe.image} 
                                alt={recipe.title}
                            />
                        </div>
                        <div className="p-8">
                            <h1 className="text-3xl font-bold text-primary mb-4">
                                {recipe.title}
                            </h1>
                            <p className="text-neutral leading-relaxed mb-8">
                                {recipe.description}
                            </p>

                            {/* Action Buttons */}
                            <div className="flex gap-4">
                                <Link
                                    to={`/update-recipe/${params.id}`}
                                    className="flex-1 bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition font-semibold text-center flex items-center justify-center gap-2"
                                >
                                    <i className="ri-edit-line"></i>
                                    Edit
                                </Link>
                                <button
                                    onClick={DeleteHandler}
                                    className="flex-1 bg-red-500 text-white py-3 px-4 rounded-lg hover:bg-red-600 transition font-semibold flex items-center justify-center gap-2"
                                >
                                    <i className="ri-delete-bin-line"></i>
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right: Ingredients and Instructions */}
                    <div className="space-y-8">
                        {/* Ingredients */}
                        <div className="bg-white rounded-xl shadow-card p-8">
                            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                                <i className="ri-restaurant-2-fill text-accent text-3xl"></i>
                                Ingredients
                            </h2>
                            <ul className="space-y-3">
                                {recipe.ingredients.split(",").map((ingredient, i) => (
                                    <li 
                                        key={i} 
                                        className="flex items-start gap-3 text-neutral group hover:text-primary transition"
                                    >
                                        <span className="text-accent text-xl mt-1 flex-shrink-0 group-hover:scale-110 transition">•</span>
                                        <span className="text-base">{ingredient.trim()}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Instructions */}
                        <div className="bg-white rounded-xl shadow-card p-8">
                            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                                <i className="ri-book-2-fill text-accent text-3xl"></i>
                                Instructions
                            </h2>
                            <ol className="space-y-4">
                                {recipe.instructions.split(".").filter(step => step.trim()).map((step, i) => (
                                    <li 
                                        key={i} 
                                        className="flex gap-4 group hover:bg-gray-50 p-3 rounded-lg transition"
                                    >
                                        <span className="font-bold text-accent bg-accent/10 w-8 h-8 flex items-center justify-center rounded-full flex-shrink-0 group-hover:bg-accent group-hover:text-white transition">
                                            {i + 1}
                                        </span>
                                        <span className="text-neutral flex-1 leading-relaxed pt-1">
                                            {step.trim()}
                                        </span>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <div className="min-h-screen flex items-center justify-center bg-light">
            <div className="text-center">
                <div className="animate-spin">
                    <i className="ri-loader-4-line text-5xl text-accent"></i>
                </div>
                <h1 className="text-2xl font-semibold text-neutral mt-4">Loading Recipe...</h1>
            </div>
        </div>
    );
};

export default Details;
