import ReviewCard from 'components/cards/review-card';
import FileIcon from 'components/icons/file.icon';
import ReviewsContainerSkeloton from 'components/skelotons/reviews-container';
import Text from 'components/typography/text';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { SingleDriverResponse } from 'server-state/queries/use-driver';
import {
  DriverReviewsDataBox,
  DriverReviewsWrapper,
  EmptyReviewWrapper,
} from './driver-reviews.styles';

export const DriverReviews: React.FC<{
  data?: SingleDriverResponse;
}> = ({ data }) => {
  const { t } = useTranslation();
  return (
    <DriverReviewsWrapper>
      <Text>{t('Driver reviews')}</Text>
      <DriverReviewsDataBox isEmpty={!data?.reviews}>
        {data ? (
          data?.reviews && data.reviews.length > 0 && data?.reviews[0] ? (
            <>
              {data.reviews.map((review, index) => (
                <ReviewCard key={index} {...review} />
              ))}
            </>
          ) : (
            <EmptyReviewWrapper>
              <FileIcon />
              <Text>{t('No reviews yet')}</Text>
            </EmptyReviewWrapper>
          )
        ) : (
          <ReviewsContainerSkeloton />
        )}
      </DriverReviewsDataBox>
    </DriverReviewsWrapper>
  );
};
