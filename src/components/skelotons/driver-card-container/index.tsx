import { Box } from '@mui/system';
import React from 'react';
import DriverCardSkeloton from '../driver-card';

const DriverCardContainerSkeloton = () => {
  const dumpArray = [1, 2, 3, 4, 5, 6];
  return (
    <Box display="flex" gap="32px" flexWrap="wrap">
      {dumpArray.map((driver) => (
        <DriverCardSkeloton key={driver} />
      ))}
    </Box>
  );
};

export default DriverCardContainerSkeloton;
