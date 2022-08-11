import useMediaQuery from '@mui/material/useMediaQuery';
import { useEffect, useState } from 'react';

export const useMobile = () => {
  const [isMobile, setisMobile] = useState<boolean>();
  useEffect(() => {
    const resizeHandler = (e: any) => {
      console.log(e.target.innerWidth);
      console.log(isMobile);

      if (e.target.innerWidth < 800 && !isMobile) {
        console.log('mobile');

        setisMobile(true);
      } else if (e.target.innerWidth > 800 && isMobile) {
        console.log('desktop');

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
