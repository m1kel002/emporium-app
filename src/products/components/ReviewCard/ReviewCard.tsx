import ProductRating from "../../../shared/components/ProductRating/ProductRating";
import { Review } from "../../../shared/models/Review";
import "./ReviewCard.scss";

interface ReviewCardProps {
  review?: Review
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <div className="review-container" data-testid="ReviewCard">
      <img className="user-image" src={review?.user.avatarUrl || "/default-avatar.png"} alt="default user image" data-testid="ReviewImage" />
      <div className="user-info">
        <div className="user-name" data-testid="ReviewName">{review?.user.name}</div>
        <ProductRating rating={review?.rating || 0}></ProductRating>
      </div>
      <div className="review" data-testid="ReviewMessage">
        {review?.comment}
      </div>
    </div>
  );
};

export default ReviewCard;
