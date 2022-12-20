import React from 'react';
import ReviewCard from './ReviewCard';

const Reviews = ({allReviews}) => {
    return (
        <div className="grid grid-cols-3 gap-10">
        {
            allReviews.map(review=><ReviewCard review={review} key={review._id}></ReviewCard>)
        }
      </div>
    );
};

export default Reviews;