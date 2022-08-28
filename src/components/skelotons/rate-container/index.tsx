import { Skeleton } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

function RateContainerSkeloton() {
  return (
    <Box display="flex" flexDirection="column" gap="40px">
      <Box display="flex" gap="12px">
        <Skeleton variant="rectangular" height="32px" width="215px" />
        <Skeleton variant="text" height="32px" width="24px" />
      </Box>
      <Box display="flex" flexDirection="column" gap="24px">
        <Box
          display="flex"
          gap="12px"
          width="210px"
          justifyContent="space-between"
        >
          <Skeleton variant="rectangular" height="24px" width="173px" />
          <Skeleton variant="text" height="24px" width="16px" />
        </Box>
        <Box
          display="flex"
          gap="12px"
          width="210px"
          justifyContent="space-between"
        >
          <Skeleton variant="rectangular" height="24px" width="135px" />
          <Skeleton variant="text" height="24px" width="16px" />
        </Box>
        <Box
          display="flex"
          gap="12px"
          width="210px"
          justifyContent="space-between"
        >
          <Skeleton variant="rectangular" height="24px" width="99px" />
          <Skeleton variant="text" height="24px" width="16px" />
        </Box>
        <Box
          display="flex"
          gap="12px"
          width="210px"
          justifyContent="space-between"
        >
          <Skeleton variant="rectangular" height="24px" width="62px" />
          <Skeleton variant="text" height="24px" width="16px" />
        </Box>
        <Box
          display="flex"
          gap="12px"
          width="210px"
          justifyContent="space-between"
        >
          <Skeleton variant="rectangular" height="24px" width="30px" />
          <Skeleton variant="text" height="24px" width="16px" />
        </Box>
      </Box>
    </Box>
  );
}

export default RateContainerSkeloton;
