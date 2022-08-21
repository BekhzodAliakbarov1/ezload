import { Skeleton } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const DriverCardContainerSkeloton = () => {
  const dumpArray = [1, 2, 3, 4, 5, 6];
  return (
    <Box display="flex" gap="32px" flexWrap="wrap">
      {dumpArray.map((driver) => (
        <Box
          key={driver}
          display="flex"
          padding="16px"
          width="100%"
          maxWidth="300px"
          justifyContent="center"
          gap="16px"
        >
          <Skeleton variant="circular" width="104px" height="104px" />
          <Box display="flex" flexDirection="column" gap="8px">
            <Skeleton variant="text" width="80px" height="20px" />
            <Skeleton variant="text" width="123px" height="18px" />
            <Skeleton variant="text" width="90px" height="18px" />
            <Skeleton variant="rectangular" width="88px" height="16px" />
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default DriverCardContainerSkeloton;
