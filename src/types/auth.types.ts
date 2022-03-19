export interface Tokens {
  tokens: {
    access: string;
    refresh: string;
  };
}

export interface AuthCredentials extends Tokens {
  userName: string | null;
  userId: string;
  userType: 1 | 3 | 4 | null;
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
    userName: string;
    userId: string;
    userType: 1 | 3 | 4;
  };
};

export type Logout = {
  type: 'LOGOUT';
};

export type AuthActions = Login | SetAuthCredentials | Logout;
