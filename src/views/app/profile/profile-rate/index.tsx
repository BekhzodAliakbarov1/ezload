import ReviewCard from 'components/cards/review-card';
import FileIcon from 'components/icons/file.icon';
import RatingComponent from 'components/rating/rating';
import Text from 'components/typography/text';
import React, { useState } from 'react';
import {
  DifferentRatingsBox,
  EmptyReviewWrapper,
  OveralRatingDataWrapper,
  ProfileRateReviewsDataBox,
  ProfileRatesStarsWrapper,
  ProfileRatesWrapper,
  RatingsRaw,
} from './profile-rate.styles';

const data = [
  {
    type: 5,
    number: 32,
    id: 1,
  },
  {
    type: 4,
    number: 12,
    id: 2,
  },
  {
    type: 3,
    number: 4,
    id: 3,
  },
  {
    type: 2,
    number: 2,
    id: 4,
  },
  {
    type: 1,
    number: 0,
    id: 5,
  },
];

const ProfileRate = () => {
  const [isEmpty, setisEmpty] = useState(false);

  return (
    <ProfileRatesWrapper>
      <Text>Rates & Testimonials</Text>
      <ProfileRatesStarsWrapper>
        <Text weight="700">Overall rate</Text>
        <OveralRatingDataWrapper>
          <RatingComponent value={4.7} iconSize="35px" />
          <Text weight="700">4.7</Text>
        </OveralRatingDataWrapper>
        <DifferentRatingsBox>
          {data.map((rating) => (
            <RatingsRaw key={rating.id}>
              <RatingComponent value={rating.type} iconSize="24px" />
              <Text weight="500">{rating.number}</Text>
            </RatingsRaw>
          ))}
        </DifferentRatingsBox>
      </ProfileRatesStarsWrapper>
      <Text className="reviews" weight="700">
        All user reviews
      </Text>
      <ProfileRateReviewsDataBox isEmpty={isEmpty}>
        {isEmpty ? (
          <EmptyReviewWrapper>
            <FileIcon />
            <Text>No reviews yet</Text>
          </EmptyReviewWrapper>
        ) : (
          <>
            {/* <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard /> */}
          </>
        )}
      </ProfileRateReviewsDataBox>
    </ProfileRatesWrapper>
  );
};

export default ProfileRate;
