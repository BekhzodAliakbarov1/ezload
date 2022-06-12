import React from 'react';
import Rating from '@mui/material/Rating';
import FilledStarIcon from 'components/icons/filled-star.icon';

const RatingComponent: React.FC<{ value: number }> = ({ value }) => {
  return (
    <Rating
      name="read-only"
      value={value}
      readOnly
      icon={<FilledStarIcon fill="#76CBB4" />}
      emptyIcon={<FilledStarIcon />}
    />
  );
};

export default RatingComponent;
