import ProductRating from "../../../shared/components/ProductRating/ProductRating";
import "./ReviewCard.scss";

const ReviewCard = () => {
  return (
    <div className="review-container" data-testid="ReviewCard">
      <img className="user-image" src="/default-avatar.png" alt="default user image" data-testid="ReviewImage" />
      <div className="user-info">
        <div className="user-name" data-testid="ReviewName">Juan Dela Cruz</div>
        <ProductRating rating={2.5}></ProductRating>
      </div>
      <div className="review" data-testid="ReviewMessage">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum eros vel mi rhoncus fringilla.
      </div>
    </div>
  );
};

export default ReviewCard;
