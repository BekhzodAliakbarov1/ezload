import ReviewCard from 'components/cards/review-card';
import FileIcon from 'components/icons/file.icon';
import RatingComponent from 'components/rating/rating';
import RateContainerSkeloton from 'components/skelotons/rate-container';
import ReviewsContainerSkeloton from 'components/skelotons/reviews-container';
import Text from 'components/typography/text';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useRates } from 'server-state/queries/use-rates';
import {
  DifferentRatingsBox,
  EmptyReviewWrapper,
  OveralRatingDataWrapper,
  ProfileRateReviewsDataBox,
  ProfileRatesStarsWrapper,
  ProfileRatesWrapper,
  RatingsRaw,
} from './profile-rate.styles';

const ProfileRate = () => {
  const { data, isLoading } = useRates();
  const { t } = useTranslation();

  return (
    <ProfileRatesWrapper>
      <Text>{t('Rates & Testimonials')}</Text>
      <ProfileRatesStarsWrapper>
        <Text weight="700">{t('Overall rate')}</Text>
        {isLoading ? (
          <RateContainerSkeloton />
        ) : (
          <>
            {data?.average_rate ? (
              <OveralRatingDataWrapper>
                <RatingComponent
                  value={data?.average_rate ?? 0}
                  iconSize="35px"
                />
                <Text weight="700">{data?.average_rate}</Text>
              </OveralRatingDataWrapper>
            ) : null}

            <DifferentRatingsBox>
              <RatingsRaw>
                <RatingComponent value={5} iconSize="24px" />
                <Text weight="500">{data?.rate_five}</Text>
              </RatingsRaw>
              <RatingsRaw>
                <RatingComponent value={4} iconSize="24px" />
                <Text weight="500">{data?.rate_four}</Text>
              </RatingsRaw>
              <RatingsRaw>
                <RatingComponent value={3} iconSize="24px" />
                <Text weight="500">{data?.rate_three}</Text>
              </RatingsRaw>
              <RatingsRaw>
                <RatingComponent value={2} iconSize="24px" />
                <Text weight="500">{data?.rate_two}</Text>
              </RatingsRaw>
              <RatingsRaw>
                <RatingComponent value={1} iconSize="24px" />
                <Text weight="500">{data?.rate_one}</Text>
              </RatingsRaw>
            </DifferentRatingsBox>
          </>
        )}
      </ProfileRatesStarsWrapper>
      <Text className="reviews" weight="700">
        {t('All user reviews')}
      </Text>
      <ProfileRateReviewsDataBox isEmpty={data?.reviews?.length === 0}>
        {isLoading ? (
          <ReviewsContainerSkeloton />
        ) : data?.reviews && data?.reviews?.length > 0 ? (
          data?.reviews?.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))
        ) : (
          <EmptyReviewWrapper>
            <FileIcon />
            <Text>{t('No reviews yet')}</Text>
          </EmptyReviewWrapper>
        )}
      </ProfileRateReviewsDataBox>
    </ProfileRatesWrapper>
  );
};

export default ProfileRate;
