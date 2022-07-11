import { useAuth } from 'global-state/auth/auth.state';

export const useDriver = () => {
  const { userType } = useAuth();

  return {
    isDriver: userType === 'driver',
  };
};
