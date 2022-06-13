import { useState } from 'react';

export const useMenu = () => {
  const [element, setElement] = useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(element);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setElement(event.currentTarget);
  };
  const handleClose = () => {
    setElement(null);
  };

  return {
    isMenuOpen,
    handleClick,
    handleClose,
    element,
  };
};
