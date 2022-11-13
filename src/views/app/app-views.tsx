import ProfileLayout from 'layouts/profile-layout/profile-layout';
import ActionLoadLayout from 'layouts/load-action-layout';
import SearchDriverLayout from 'layouts/search-driver-layout';
import DriverInfoLayout from 'layouts/driver-info-layout/driver-info-layout';
import SearchLoadLayout from 'layouts/search-load-layout';
import LoadInfoLayout from 'layouts/load-info-layout';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import Feed from './feed/feed';
import { useDriver } from 'hooks/use-driver';
import { useWebsocket } from 'server-state/ws/use-websocket';
import { useEffect } from 'react';
import { useSnackbar } from 'notistack';

const CustomerView = () => (
  <Routes>
    <Route path="/" element={<Feed />} />
    <Route path="/profile/*" element={<ProfileLayout />} />
    <Route path="/create-load" element={<ActionLoadLayout />} />
    <Route path="/edit-load" element={<ActionLoadLayout />} />
    <Route path="/search-driver" element={<SearchDriverLayout />} />
    <Route path="/drivers/:id" element={<DriverInfoLayout />} />
    <Route path="/load-bidded-driver/:bid_id" element={<DriverInfoLayout />} />
    <Route path="/load/:load_id" element={<LoadInfoLayout />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

const DriverView = () => (
  <Routes>
    <Route path="/" element={<Feed />} />
    <Route path="/profile/*" element={<ProfileLayout />} />
    <Route path="/search-load" element={<SearchLoadLayout />} />
    <Route path="/load/:load_id" element={<LoadInfoLayout />} />
    <Route path="/drivers/:id" element={<DriverInfoLayout />} />

    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

const AppViews = () => {
  const { isDriver } = useDriver();
  const { socket } = useWebsocket();
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    socket?.addEventListener('message', (e) => {
      const message: {
        data: {
          id: number;
          model_name: string;
          object_id: number;
          status: number;
        };
      } = JSON.parse(e.data);

      switch (message.data.status) {
        case 1: //bid created
          enqueueSnackbar('Driver sent a bid', {
            variant: 'info',
            preventDuplicate: true,
            autoHideDuration: 3000,
            action: () => (
              <>
                <Link
                  to={`/load-bidded-driver/${message.data.object_id}`}
                  style={{
                    color: 'white',
                    fontSize: '12px',
                  }}
                  onClick={() => console.log(message)}
                >
                  Full detail
                </Link>
              </>
            ),
          });
          break;
        case 2: //bid accepted
          enqueueSnackbar('Your bid accepted', {
            variant: 'info',
            preventDuplicate: true,
            autoHideDuration: 3000,
            action: () => (
              <>
                <Link
                  to={`/load/${message.data.object_id}`}
                  style={{
                    color: 'white',
                    fontSize: '12px',
                  }}
                  onClick={() => console.log(message)}
                >
                  Full detail
                </Link>
              </>
            ),
          });
          break;
        case 3: //bid canceled
          enqueueSnackbar('Your bid canceled', {
            variant: 'info',
            preventDuplicate: true,
            autoHideDuration: 3000,
            action: () => (
              <>
                <Link
                  to={`/load/${message.data.object_id}`}
                  style={{
                    color: 'white',
                    fontSize: '12px',
                  }}
                  onClick={() => console.log(message)}
                >
                  Full detail
                </Link>
              </>
            ),
          });
          break;
        case 4:
          enqueueSnackbar('New load created', {
            variant: 'info',
            preventDuplicate: true,
            autoHideDuration: 3000,
            action: () => (
              <>
                <Link
                  to={`/load/${message.data.object_id}`}
                  style={{
                    color: 'white',
                    fontSize: '12px',
                  }}
                  onClick={() => console.log(message)}
                >
                  Full detail
                </Link>
              </>
            ),
          });
          break;
        case 5: // should know condition when it should works
          console.log('Load canceled');
          break;
        case 6: //load finished
          enqueueSnackbar('Driver finish the load', {
            variant: 'info',
            preventDuplicate: true,
            autoHideDuration: 3000,
            action: () => (
              <>
                <Link
                  to={`/load/${message.data.object_id}`}
                  style={{
                    color: 'white',
                    fontSize: '12px',
                  }}
                  onClick={() => console.log(message)}
                >
                  Full detail
                </Link>
              </>
            ),
          });
          break;
        default:
          console.log('Something went wrong' + message);
      }

      console.log({ message });
    });
  }, [socket]);

  return <>{isDriver ? <DriverView /> : <CustomerView />}</>;
};

export default AppViews;
