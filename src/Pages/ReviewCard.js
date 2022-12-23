import { FaStar } from "react-icons/fa";
import Rating from "react-rating";
const ReviewCard = ({ review }) => {
  const {
    reviewerName,
    reviewBy,
    serviceTitle,
    reviewerImg,
    rating,
    reviewMessage,
    insertDate,
  } = review;

  const dateTime = new Date(insertDate);
  const addedOn = dateTime.toLocaleString();
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100  rounded-lg pl-12">
          <div className="flex items-center my-4">
            <img className=" rounded-full h-12 w-12" src={reviewerImg} alt="" />
            <div className="text-start  mx-4">
              <strong className="text-lg text-slate-700">{reviewerName}</strong>
              <h4 className="font-medium text-slate-400">{reviewBy}</h4>
            </div>
          </div>

          <div className="text-start">
            <h3 className="font-semibold">Service : {serviceTitle}</h3>

            <h3 className="font-semibold">Review : {reviewMessage}</h3>
            <h3 className="font-semibold text-slate-400">{addedOn}</h3>
            <Rating
              initialRating={rating}
              emptySymbol={<FaStar className="" />}
              fullSymbol={<FaStar style={{ color: " rgb(196 181 253)" }} />}
              fractions={2}
              readonly
            ></Rating>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
