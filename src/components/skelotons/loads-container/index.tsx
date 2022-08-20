import { Box } from '@mui/system';
import React from 'react';
import LoadSkeloton from '../load-card';

const LoadsContainerSkeloton = () => {
  const defaultLoads = [1, 2, 3, 4];
  return (
    <>
      <Box display="flex" gap="32px" flexWrap="wrap">
        {defaultLoads.map((load) => (
          <LoadSkeloton key={load} />
        ))}
      </Box>
    </>
  );
};

export default LoadsContainerSkeloton;
