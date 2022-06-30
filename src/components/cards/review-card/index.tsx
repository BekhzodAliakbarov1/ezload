import RatingComponent from 'components/rating/rating';
import Text from 'components/typography/text';
import React from 'react';
import { ReviewCardWrapper } from './review-card.styles';

const ReviewCard: React.FC<{
  rate: number;
  feedback: string;
  reviewer: {
    profile_picture: {
      file: string;
    };
    first_name: string;
  };
}> = ({ feedback, rate, reviewer }) => {
  return (
    <ReviewCardWrapper>
      <RatingComponent value={rate} iconSize="20px" />
      <Text>{feedback}</Text>
      <h2>{reviewer.first_name}</h2>
      <h4>Apr 12, 2022, 18:41</h4>
    </ReviewCardWrapper>
  );
};

export default ReviewCard;
