import RatingComponent from 'components/rating/rating';
import Text from 'components/typography/text';
import React from 'react';
import { getDate } from 'utils/getDate';
import { ReviewCardWrapper } from './review-card.styles';

const ReviewCard: React.FC<{
  rate: number;
  feedback: string;
  reviewer: {
    first_name: string;
  };
  created_at?: string;
}> = ({ feedback, rate, reviewer, created_at = '' }) => {
  return (
    <ReviewCardWrapper>
      <RatingComponent value={rate} iconSize="20px" />
      <Text>{feedback}</Text>
      <h2>{reviewer.first_name}</h2>
      <h4>{getDate({ date: created_at })}</h4>
    </ReviewCardWrapper>
  );
};

export default ReviewCard;
