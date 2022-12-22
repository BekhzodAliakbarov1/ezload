import { useAuth } from 'global-state/auth/auth.state';
import { useEffect, useState } from 'react';

export const useWebsocket = () => {
  const [socket, setSocket] = useState<WebSocket>();
  const { tokens } = useAuth();

  useEffect(() => {
    const connect = new WebSocket(
      `ws://3.111.197.25/ws/notification/?token=${tokens.access}`
    );
    connect.addEventListener('open', () => {
      console.log('CONNECTED');
    });
    connect.addEventListener('close', () => {
      console.log('DISCONNECTED');
    });
    if (connect) {
      setSocket(connect);
    }
  }, []);

  return { socket };
};
