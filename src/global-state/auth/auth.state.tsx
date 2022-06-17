/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useMemo } from 'react';
import { login as loginAction, logout as logoutAction } from './auth.actions';
import { authReducer, initialState } from './auth.reducer';
import { AuthContextInterface, Tokens } from 'types/auth.types';

const AuthCtx = React.createContext<AuthContextInterface>(
  {} as AuthContextInterface
);

export const AuthProvider: React.FC = ({ children }) => {
  const [authState, dispatch] = React.useReducer(authReducer, initialState);

  const login = useCallback(
    (
      data: { userId: string; userType: 'driver' | 'customer' | '' } & Tokens
    ) => {
      dispatch(loginAction(data));
    },
    [dispatch]
  );

  const logout = useCallback(() => {
    dispatch(logoutAction());
  }, [dispatch]);

  const authStore = useMemo(
    () => ({
      ...authState,
      login,
      logout,
    }),
    [authState]
  );
  return <AuthCtx.Provider value={authStore}>{children}</AuthCtx.Provider>;
};

export const useAuth = () => React.useContext(AuthCtx);
