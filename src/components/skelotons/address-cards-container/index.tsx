import { Skeleton } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const AddressCardsContainer = () => {
  const dummyData = [1, 2, 3, 4, 5, 6];
  return (
    <Box display="flex" flexDirection="column" gap="64px" width="100%">
      {dummyData.map((data) => (
        <Box
          key={data}
          display="flex"
          justifyContent="space-between"
          height="40px"
          width="100%"
          flexWrap="wrap"
          gap="25px"
        >
          <Skeleton variant="text" width="300px" height="100%" />
          <Box display="flex" gap="32px" height="100%">
            <Skeleton variant="rectangular" width="130px" height="100%" />
            <Skeleton variant="text" width="30px" height="100%" />
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default AddressCardsContainer;
