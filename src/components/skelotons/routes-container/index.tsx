import { Box } from '@mui/system';
import React from 'react';
import RouteSkeloton from '../route';

const RoutesContainerSkeloton = () => {
  const dummyData = [1, 2, 3, 4, 5];
  return (
    <Box display="flex" flexDirection="column" gap="24px">
      {dummyData.map((data) => (
        <RouteSkeloton key={data} />
      ))}
    </Box>
  );
};

export default RoutesContainerSkeloton;
