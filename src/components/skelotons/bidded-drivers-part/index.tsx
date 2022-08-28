import { Skeleton } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import DriverCardContainerSkeloton from '../driver-card-container';

const BiddedDriversSkeleton = () => {
  return (
    <Box display="flex" flexDirection="column" gap="48px">
      <Skeleton variant="text" width="200px" height="30px" />
      <DriverCardContainerSkeloton />
    </Box>
  );
};

export default BiddedDriversSkeleton;
