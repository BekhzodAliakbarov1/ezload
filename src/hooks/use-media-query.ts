import useMediaQuery from '@mui/material/useMediaQuery';
import { useEffect, useState } from 'react';

export const useMobile = () => {
  const [isMobile, setisMobile] = useState<boolean>();
  useEffect(() => {
    const resizeHandler = (e: any) => {
      if (e.target.innerWidth < 800 && !isMobile) {
        setisMobile(true);
      } else if (e.target.innerWidth > 800 && isMobile) {
        setisMobile(false);
      }
    };

    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return {
    isMobile,
  };
};
