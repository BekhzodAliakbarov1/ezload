import { Skeleton } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const LoadInfoSkeloton = () => {
  return (
    <Box
      width="100%"
      maxWidth="700px"
      padding="24px"
      display="flex"
      flexDirection="column"
    >
      <Box display="flex" flexDirection="column" gap="16px">
        <Skeleton variant="text" width="179px" height="20px" />
        <Skeleton variant="rectangular" width="82px" height="26px" />
      </Box>
      <Box display="flex" gap="80px" flexWrap="wrap">
        <Box display="flex" flexDirection="column" gap="8px">
          <Skeleton variant="text" width="82px" height="16px" />
          <Skeleton variant="text" width="200px" height="20px" />
        </Box>
        <Box display="flex" flexDirection="column" gap="8px">
          <Skeleton variant="text" width="87px" height="16px" />
          <Skeleton variant="text" width="77px" height="20px" />
        </Box>
        <Box display="flex" flexDirection="column" gap="8px">
          <Skeleton variant="text" width="61px" height="16px" />
          <Skeleton variant="text" width="122px" height="20px" />
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" gap="8px">
        <Skeleton variant="text" width="82px" height="16px" />
        <Skeleton variant="text" width="100%" height="50px" />
      </Box>
      <Box display="flex" gap="80px" flexWrap="wrap">
        <Box display="flex" flexDirection="column" gap="8px">
          <Skeleton variant="text" width="68px" height="16px" />
          <Skeleton variant="text" width="40px" height="20px" />
        </Box>
        <Box display="flex" flexDirection="column" gap="8px">
          <Skeleton variant="text" width="68px" height="16px" />
          <Skeleton variant="text" width="40px" height="20px" />
        </Box>
      </Box>
    </Box>
  );
};

export default LoadInfoSkeloton;
