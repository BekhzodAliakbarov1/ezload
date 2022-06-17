import React from 'react';
import Rating from '@mui/material/Rating';
import FilledStarIcon from 'components/icons/filled-star.icon';

const RatingComponent: React.FC<{ value: number; iconSize?: string }> = ({
  value,
  iconSize,
}) => {
  return (
    <Rating
      name="read-only"
      value={value}
      readOnly
      icon={<FilledStarIcon fill="#76CBB4" size={iconSize} />}
      emptyIcon={<FilledStarIcon size={iconSize} />}
    />
  );
};

export default RatingComponent;
