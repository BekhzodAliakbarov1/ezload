import RatingComponent from 'components/rating/rating';
import Text from 'components/typography/text';
import React from 'react';
import { ReviewCardWrapper } from './review-card.styles';

const ReviewCard = () => {
  return (
    <ReviewCardWrapper>
      <RatingComponent value={4} iconSize="20px" />
      <Text>
        You could even ask influencers to write a blog post for their own
        website that reviews your product or services, plus the tips they
        learned through working with you. This gets your business in front of
        even more readers and prospective target clients
      </Text>
      <h2>Alexandra</h2>
      <h4>Apr 12, 2022, 18:41</h4>
    </ReviewCardWrapper>
  );
};

export default ReviewCard;
