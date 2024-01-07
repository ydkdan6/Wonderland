import React from "react";
import { useCart } from "react-use-cart";
import StarRating from "./starRating";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const ItemCard = (props) => {
    const { addItem } = useCart();

    const handleAddToCart = () => {
        console.log(props)
        addItem(props); // Passing the entire object to the addItem method
    };

    return (
        <div className="col-md-4 mb-4" key={props.id}>
            <div className="card">
                <img src={props.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p>Price: #{props.price}</p>
                    <p className="card-text">
                        <StarRating totalStars={5} rating={props.rating} />
                    </p>
                    <Link to='/addtocart' className="btn btn-dark" onClick={handleAddToCart}>
                        Add to Cart
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ItemCard;
