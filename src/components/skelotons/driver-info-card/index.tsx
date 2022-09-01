import { Skeleton } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const DriverInfoCardSkeloton = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{
        p: [0, 2, 3],
        width: ['100%', '100%', '372px'],
      }}
      gap="48px"
      width="372px"
    >
      <Box display="flex" flexDirection="column" gap="32px" alignItems="center">
        <Skeleton variant="circular" width="196px" height="196px" />
        <Skeleton variant="rectangular" width="152px" height="20px" />
      </Box>
      <Box>
        <Box marginBottom="24px">
          <Skeleton variant="text" width="152px" height="24px" />
        </Box>
        <Box marginBottom="17px">
          <Skeleton variant="text" width="115px" height="20px" />
        </Box>
        <Box marginBottom="32px">
          <Skeleton variant="text" width="82px" height="20px" />
        </Box>
        <Box marginBottom="3px">
          <Skeleton variant="text" width="104px" height="20px" />
        </Box>
        <Box marginBottom="65px">
          <Skeleton variant="text" width="160px" height="20px" />
        </Box>
        <Box marginBottom="7px">
          <Skeleton variant="text" width="76px" height="20px" />
        </Box>
        <Box
          marginBottom="60px"
          display="flex"
          flexDirection="column"
          gap="7px"
        >
          <Skeleton variant="text" width="160px" height="20px" />
          <Skeleton variant="text" width="160px" height="20px" />
          <Skeleton variant="text" width="160px" height="20px" />
          <Skeleton variant="text" width="160px" height="20px" />
        </Box>
        <Skeleton variant="text" width="111px" height="20px" />
        <Skeleton variant="text" width="220px" height="20px" />
      </Box>
    </Box>
  );
};

export default DriverInfoCardSkeloton;
