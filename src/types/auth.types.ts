export interface Tokens {
  tokens: {
    access: string;
    refresh: string;
  };
}

export interface AuthCredentials extends Tokens {
  userId: string;
  userType: 'driver' | 'customer' | string;
}

export interface AuthContextInterface extends AuthCredentials {
  login: (data: { userId: string } & Tokens) => void;
  logout: () => void;
}

// Auth Action types
export type Login = {
  type: 'LOGIN';
  payload: {
    accessToken: string;
    refreshToken: string;
    userId: string;
  };
};

export type SetAuthCredentials = {
  type: 'SET_AUTH_CREDENTIALS';
  payload: {
    userId: string;
    userType: 'driver' | 'customer' | '';
  };
};

export type Logout = {
  type: 'LOGOUT';
};

export type AuthActions = Login | SetAuthCredentials | Logout;
