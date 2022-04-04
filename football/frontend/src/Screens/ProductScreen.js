import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';

function ProductScreen(props) {
    console.log(props.match.params.id)
    const product = data.product.find(x => x._id === props.match.params.id);
    return <div>
        <div>
            <Link to="/">Back to result</Link>
        </div>
        <div className="details"></div>
        <div className="details-image">
            <img src={product.image} alt="product"></img>
        </div>
        <div className="details-info" >
            <ul>
                <li>
                    <h4>{product.name}</h4>
                </li>
                <li>
                    {product.rating} Stars ({product.numReviews} Reviews)
                </li>
                <li>
                    Price: <b>{product.price}</b>
                </li>
                <li>
                    Description:
                    <div>
                        {product.description}
                    </div>
                </li>
            </ul>
            <div className="details-action">
                <ul>
                    <li>
                        Price: {product.price}
                    </li>
                    <li>
                        Status: {product.price}
                    </li>
                    <li>
                        Qty: <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                        </select>
                        <li>
                            <button>Add to Cart</button>
                        </li>
                    </li>
                </ul>
            </div>
        </div>
    </div>
}

export default ProductScreen;