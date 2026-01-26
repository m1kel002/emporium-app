import "./ProductDetailsPage.scss";
import { Tabs, Tab } from "@mui/material";
import TileButton from "../../../shared/components/TileButton/TileButton";
import ProductQuantity from "../../components/ProductQuantity/ProductQuantity";
import { useEffect, useState } from "preact/hooks";
import ProductDescriptionTabPanel from "../ProductDescriptionTabPanel/ProductDescriptionTabPanel";
import ProductReviewTabPanel from "../ProductReviewTabPanel/ProductReviewTabPanel";
import ProductRating from "../../../shared/components/ProductRating/ProductRating";
import { Product } from "../../../shared/models/Product";
import { fetchProductDetails } from "../../services/products.repository";
import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [product, setProduct] = useState<Product>();
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  let displayVariation = undefined;

  const handleChange = (event: PointerEvent, tabIndex: number) => {
    setTabIndex(tabIndex);
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        if (id) {
          const data = await fetchProductDetails(id);
          setProduct(data);
        }
      } catch (error) {
        console.log(`Error getting product details: ${error}`);
      }
    };
    getProduct();
  }, [id]);

  console.log("Product variations:", product);
  if (product?.variations) {
    displayVariation = (product.variations.map((variation, index) => (
      <img
          key={index}
          className="thumbnail"
          src={`${variation.image}`}
          alt="product-image"
      />
    )));
  }

  return (
    <div className="product-details-container">
      <div className="details-container">
        <div className="product-image-container">
          <img
            className="product-image"
            src={product?.image || "/default_image.png"}
            alt="product-image"
          />
          <div className="thumbnail-container">
            {displayVariation}
          </div>
        </div>
        <div className="product-container">
          <h1>{product?.name}</h1>
          <div className="rating-sold-container">
            <div className="rating-container">
              <div className="rating-label">Rating:</div>
              <ProductRating
                rating={parseFloat(product?.rating || "0")}
              ></ProductRating>
            </div>
            <div className="sold-container">Sold: {product?.soldCount || 0}</div>
          </div>
          <div className="quantity-container">
            Quantity:
            <ProductQuantity
              quantity={quantity}
              setQuantity={setQuantity}
            ></ProductQuantity>
          </div>
          <div className="total-price-container">
            Total Price:
            <div className="price">$ {(product?.price || 1) * quantity}</div>
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
        <ProductDescriptionTabPanel
          value={tabIndex}
          index={0}
          description={product?.description}
        ></ProductDescriptionTabPanel>
        <ProductReviewTabPanel
          value={tabIndex}
          index={1}
          reviews={product?.reviews}
        ></ProductReviewTabPanel>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
