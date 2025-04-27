import "./ProductDetailsPage.scss";
import { Rating, Tabs, Tab } from "@mui/material";
import TileButton from "../../../shared/components/TileButton/TileButton";
import ProductQuantity from "../../components/ProductQuantity/ProductQuantity";
import { useState } from "preact/hooks";

const ProductDetailsPage = () => {

  const [tabIndex, setTabIndex] = useState(0);

  const handleChange = (event: PointerEvent, tabIndex: number) => {
    setTabIndex(tabIndex)
  }
  return (
    <div className="product-details-container">
      <div className="details-container">
        <div className="product-image-container">
          <img
            className="product-image"
            src="/product1.jpg"
            alt="product-image"
          />
          <div className="thumbnail-container">
            <img
              className="thumbnail"
              src="/product1.jpg"
              alt="product-image"
            />
            <img
              className="thumbnail"
              src="/product1.jpg"
              alt="product-image1"
            />
            <img
              className="thumbnail"
              src="/product1.jpg"
              alt="product-image2"
            />
          </div>
        </div>
        <div className="product-container">
          <h1>Black Shoes</h1>
          <div className="rating-sold-container">
            <div className="rating-container">
              <div className="rating-label">Rating:</div>
              <Rating
                className="rating-test"
                name="rating"
                precision={0.5}
                value={3.5}
                readOnly
              ></Rating>
            </div>
            <div className="sold-container">Sold: 12</div>
          </div>
          <div className="variation-container">
            <span>Variation:</span>
            <div className="variation">
              <TileButton title={"black"}></TileButton>
              <TileButton title={"black"}></TileButton>
              <TileButton title={"black"}></TileButton>
            </div>
          </div>
          <div className="quantity-container">
            Quantity:
            <ProductQuantity></ProductQuantity>
          </div>
          <div className="total-price-container">
            Total Price:
            <div className="price">$ 69</div>
          </div>

          <div className="cta-container">
            <button className="cta">Add to cart</button>
          </div>

          <div className="share-container">
            Share:
            <TileButton key={"fb"} title={"Facebook"}></TileButton>
            <TileButton key={"x"} title={"X"}></TileButton>
            <TileButton key={"ig"} title={"Instagram"}></TileButton>
          </div>
        </div>
      </div>
      <div className="additional-info-container">
        <Tabs value={tabIndex} onChange={handleChange} textColor="primary" indicatorColor="primary">
          <Tab label="Description"></Tab>
          <Tab label="Reviews"></Tab>
          </Tabs>

      </div>
    </div>
  );
};

export default ProductDetailsPage;