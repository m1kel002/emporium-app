import './ProductDetailsPage.scss'
import { Rating } from '@mui/material';
import TileButton from '../../../shared/components/TileButton/TileButton';

const ProductDetailsPage = () => {
    return (
        <div className='product-details-container'>
            <div className="product-image-container">
                <img className='product-image' src="/product1.jpg" alt="product-image" />
                <div className="thumbnail-container">
                <img className="thumbnail" src="/product1.jpg" alt="product-image" />
                <img className="thumbnail" src="/product1.jpg" alt="product-image1" />
                <img className="thumbnail" src="/product1.jpg" alt="product-image2" />
                </div>
                </div>
            <div className="product-container">
                <h1>Black Shoes</h1>
                <div className="rating-sold-container">
                    <div className="rating-container">
                        <div className="rating-label">Rating:</div>
                        <Rating className="rating-test" name="rating" precision={0.5} value={3.5} readOnly></Rating>
                    </div>
                    <div className="sold-container">
                        Sold: 12
                    </div>
                </div>
                <div className="variation-container">
                    <span>Variation:</span>
                    <div className="variation">
                        <TileButton title={'black'}></TileButton>
                        <TileButton title={'black'}></TileButton>
                        <TileButton title={'black'}></TileButton>
                    </div>
                </div>
                <div className="quantity-container">
                    Quantity:
                </div>
                <div className="total-price-container">
                    Total Price:
                    <div className="price">$ 69</div>
                </div>

                <div className="cta-container">
                    <button className="cta">Add to cart</button>
                </div>

                <div className="share-container">Share</div>

            </div>

        </div>
    );
}

export default ProductDetailsPage;