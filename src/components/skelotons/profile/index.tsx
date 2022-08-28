import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import { Box } from '@mui/system';

const ProfileSkeloton = () => {
  return (
    <>
      <Box display="flex" flexDirection="row" gap="47px" alignItems="center">
        <Skeleton variant="circular" width={135} height={135} />
        <Box gap="24px" display="flex" flexDirection="column">
          <Box gap="8px">
            <Skeleton variant="text" width={75} height={18} />
            <Skeleton variant="text" width={150} height={20} />
          </Box>
          <Box gap="8px">
            <Skeleton variant="text" width={100} height={18} />
            <Skeleton variant="text" width={150} height={20} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProfileSkeloton;
