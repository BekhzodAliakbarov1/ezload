export const useDriver = () => {
  return {
    isDriver: localStorage.getItem('userType') === 'driver',
  };
};
