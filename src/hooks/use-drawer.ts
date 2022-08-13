import { useState } from 'react';

export const useDrawer = () => {
  const [state, setState] = useState(false);

  const toggleDrawer = () => {
    setState((prevState) => !prevState);
  };
  const closeDrawer = () => {
    setState(false);
  };
  const openDrawer = () => {
    setState(true);
  };

  return { isOpen: state, toggleDrawer, closeDrawer, openDrawer };
};
