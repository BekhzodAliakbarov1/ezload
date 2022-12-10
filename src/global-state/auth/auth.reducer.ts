import { AuthActions, AuthCredentials } from 'types/auth.types';
import { getStorage } from '../../utils/local-storage';

export const initialState = {
  userId: getStorage('userId') ?? '',
  userType: getStorage('userType') ?? '',
  tokens: {
    access: getStorage('accessToken') ?? '',
    refresh: getStorage('refreshToken') ?? '',
  },
};

export const authReducer = (state: AuthCredentials, action: AuthActions) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        tokens: {
          refresh: action.payload.refreshToken,
          access: action.payload.accessToken,
        },
        userId: action.payload.userId,
      };
    case 'SET_AUTH_CREDENTIALS':
      return {
        ...state,
        userId: action.payload.userId,
        userType: action.payload.userType,
      };
    case 'LOGOUT':
      window.location.reload();
      return {
        userName: null,
        userId: '',
        userType: '',
        tokens: {
          access: '',
          refresh: '',
        },
      };
    default:
      return state;
  }
};
