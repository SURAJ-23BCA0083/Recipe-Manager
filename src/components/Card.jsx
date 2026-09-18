import { Link } from "react-router-dom";

const Card = (props) => {
    const { id, title, image, description, instructions, ingredients } =
        props.recipe;

    return (
        <Link
            to={`/recipes/${id}`}
            className="card-container group mb-8 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]"
        >
            {/* Image Container */}
            <div className="relative overflow-hidden rounded-lg mb-4 h-48 bg-gray-100">
                <img 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                    src={image} 
                    alt={title} 
                />
            </div>

            {/* Title and Description */}
            <h2 className="text-xl font-bold text-primary mb-2 line-clamp-2">{title}</h2>
            <p className="text-neutral text-sm mb-4 line-clamp-2">{description.slice(0, 100)}...</p>

            {/* Meta Information */}
            <div className="flex justify-around text-center pt-4 border-t border-gray-200">
                <div className="flex-1">
                    <i className="ri-time-line text-accent text-xl mb-1 block"></i>
                    <span className="text-xs text-neutral font-medium">20 min</span>
                </div>
                <div className="flex-1">
                    <i className="ri-emotion-happy-line text-accent text-xl mb-1 block"></i>
                    <span className="text-xs text-neutral font-medium">Easy</span>
                </div>
                <div className="flex-1">
                    <i className="ri-share-forward-line text-accent text-xl mb-1 block"></i>
                    <span className="text-xs text-neutral font-medium">Share</span>
                </div>
            </div>
        </Link>
    );
};

export default Card;
