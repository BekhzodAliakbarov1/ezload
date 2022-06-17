import ReviewCard from 'components/cards/review-card';
import FileIcon from 'components/icons/file.icon';
import Text from 'components/typography/text';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  DriverReviewsDataBox,
  DriverReviewsWrapper,
  EmptyReviewWrapper,
} from './driver-reviews.styles';

export const DriverReviews = () => {
  const { id } = useParams<{ id: string }>();
  const [isEmpty, setisEmpty] = useState(false);
  useEffect(() => {
    if (Number(id) % 2 === 0) {
      setisEmpty(true);
    }
  }, [id]);

  return (
    <DriverReviewsWrapper>
      <Text>Driver reviews</Text>
      <DriverReviewsDataBox isEmpty={isEmpty}>
        {isEmpty ? (
          <EmptyReviewWrapper>
            <FileIcon />
            <Text>No reviews yet</Text>
          </EmptyReviewWrapper>
        ) : (
          <>
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
          </>
        )}
      </DriverReviewsDataBox>
    </DriverReviewsWrapper>
  );
};
