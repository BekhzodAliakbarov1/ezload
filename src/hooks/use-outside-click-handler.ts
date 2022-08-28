import { useEffect, useState } from 'react';

export const useOutsideHandler = (ref: any) => {
  const [outsideClicked, setOutsideClicked] = useState<boolean>();
  console.log('clicked');

  useEffect(() => {
    setOutsideClicked(false);
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOutsideClicked(true);
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  return {
    outsideClicked,
  };
};
