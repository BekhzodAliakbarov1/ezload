import ReviewCard from 'components/cards/review-card';
import FileIcon from 'components/icons/file.icon';
import Text from 'components/typography/text';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SingleDriverResponse } from 'server-state/queries/use-driver';
import {
  DriverReviewsDataBox,
  DriverReviewsWrapper,
  EmptyReviewWrapper,
} from './driver-reviews.styles';

export const DriverReviews: React.FC<{
  data?: SingleDriverResponse;
}> = ({ data }) => {
  return (
    <DriverReviewsWrapper>
      <Text>Driver reviews</Text>
      <DriverReviewsDataBox isEmpty={!data?.reviews[0]}>
        {data?.reviews[0] ? (
          <>
            {data.reviews.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </>
        ) : (
          <EmptyReviewWrapper>
            <FileIcon />
            <Text>No reviews yet</Text>
          </EmptyReviewWrapper>
        )}
      </DriverReviewsDataBox>
    </DriverReviewsWrapper>
  );
};
