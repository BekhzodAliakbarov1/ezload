import { Skeleton } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const RouteSkeloton = () => {
  return (
    <Box>
      <Skeleton variant="text" width="300px" height="21px" animation="pulse" />
    </Box>
  );
};

export default RouteSkeloton;
