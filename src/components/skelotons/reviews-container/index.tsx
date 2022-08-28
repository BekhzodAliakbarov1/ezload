import { Skeleton } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const ReviewsContainerSkeloton = () => {
  const dummyData = [1, 2, 3, 4, 5, 6];
  return (
    <Box display="flex" flexDirection="column" gap="40px" width="100%">
      {dummyData.map((data) => (
        <Box key={data} display="flex" flexDirection="column" gap="16px">
          <Skeleton variant="rectangular" width="150px" height="20px" />
          <Box>
            <Skeleton variant="text" width="100%" height="20px" />
            <Skeleton variant="text" width="100%" height="20px" />
            <Skeleton variant="text" width="100%" height="20px" />
            <Skeleton variant="text" width="100%" height="20px" />
          </Box>
          <Box display="flex" flexDirection="column" gap="4px">
            <Skeleton variant="text" width="70px" height="27px" />
            <Skeleton variant="text" width="133px" height="18px" />
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default ReviewsContainerSkeloton;
