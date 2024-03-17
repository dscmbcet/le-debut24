import "./ReviewCard.css";
import reviewCorner from "../assets/review_corner.png";

export default function ReviewCard(props: { rating: number }) {
  return (
    <div className="review_card_wrapper">
      <div className="review_card">
        <div className="card_rating_container">
          <div className="rating">
            <div className="rating_no">
              <p>{props.rating}.0</p>
            </div>
            <div className="rating_score">
              {[...Array(props.rating)].map((_, i) => {
                return <div className="fill" key={i} />;
              })}
              {[...Array(5 - props.rating)].map((_, i) => {
                return <div className="no-fill" key={i} />;
              })}
            </div>
          </div>
          <img src={reviewCorner} alt="" />
        </div>
        <div className="card_body">
          <div className="card_text">
            <p>
              They say opportunities don't knock twice. Such a chance was the
              LeDebut, which helped me learn a lot, and connect and socialize
              with many people. Moreover, it helped me discover my passion for
              engineering and build a solid foundation for its development.
            </p>
          </div>
          <div className="card_footer">
            <p>Advaith U</p>
            <small>Prev. Regional Lead Figma</small>
          </div>
        </div>
      </div>
    </div>
  );
}
