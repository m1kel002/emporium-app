import "./ProductDetailsPage.scss";
import { Tabs, Tab } from "@mui/material";
import TileButton from "../../../shared/components/TileButton/TileButton";
import ProductQuantity from "../../components/ProductQuantity/ProductQuantity";
import { useState } from "preact/hooks";
import ProductDescriptionTabPanel from "../ProductDescriptionTabPanel/ProductDescriptionTabPanel";
import ProductReviewTabPanel from "../ProductReviewTabPanel/ProductReviewTabPanel";
import ProductRating from "../../../shared/components/ProductRating/ProductRating";

const ProductDetailsPage = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleChange = (event: PointerEvent, tabIndex: number) => {
    setTabIndex(tabIndex);
  };
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
              <ProductRating rating={3.5} precision={0.5}></ProductRating>
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
        <Tabs
          value={tabIndex}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
        >
          <Tab label="Description"></Tab>
          <Tab label="Reviews"></Tab>
        </Tabs>
        <ProductDescriptionTabPanel value={tabIndex} index={0}></ProductDescriptionTabPanel>
        <ProductReviewTabPanel value={tabIndex} index={1}></ProductReviewTabPanel>
      </div>
    </div>
  );
};

export default ProductDetailsPage;