import { Skeleton } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const LoadSkeloton = () => {
  return (
    <Box
      padding="24px"
      width="370px"
      height="430px"
      display="flex"
      flexDirection="column"
      gap="28px"
    >
      <Box display="flex" gap="24px">
        <Box>
          <Skeleton variant="rectangular" width="24px" height="150px" />
        </Box>
        <Box display="flex" flexDirection="column" gap="32px">
          <Box display="flex" flexDirection="column" gap="12px">
            <Skeleton variant="text" width="106px" height="18px" />
            <Skeleton variant="text" width="200px" height="24px" />
            <Skeleton variant="text" width="126px" height="16px" />
            <Skeleton variant="text" width="126px" height="16px" />
          </Box>
          <Box display="flex" flexDirection="column" gap="12px">
            <Skeleton variant="text" width="106px" height="18px" />
            <Skeleton variant="text" width="200px" height="24px" />
            <Skeleton variant="text" width="126px" height="16px" />
            <Skeleton variant="text" width="126px" height="16px" />
          </Box>
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" gap="18px">
        <Skeleton variant="text" width="92px" height="24px" />
        <Box display="flex" gap="16px">
          <Skeleton variant="text" width="105px" height="18px" />
          <Skeleton variant="text" width="105px" height="18px" />
        </Box>
      </Box>
    </Box>
  );
};

export default LoadSkeloton;
