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
import { useTranslation } from 'react-i18next';
import { useQueryClient } from 'react-query';
import { useUpdateNotification } from 'server-state/mutations/use-update-notification';

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
    {/* <Route path="/drivers/:id" element={<DriverInfoLayout />} /> */}

    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

const AppViews = () => {
  const qc = useQueryClient();
  const { t } = useTranslation();
  const { isDriver } = useDriver();
  const { socket } = useWebsocket();
  const { enqueueSnackbar } = useSnackbar();
  const updateNotification = useUpdateNotification();

  const notificationClickHandler = (notification_id: number) => {
    updateNotification.mutate({ notification_id });
  };

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
      qc.invalidateQueries([`notifications`]);
      switch (message.data.status) {
        case 1: //bid created
          enqueueSnackbar(t('Driver sent a bid'), {
            variant: 'info',
            preventDuplicate: true,
            autoHideDuration: 3000,
            action: () => (
              <>
                <Link
                  onClick={() => notificationClickHandler(message.data.id)}
                  to={`/load-bidded-driver/${message.data.object_id}`}
                  style={{
                    color: 'white',
                    fontSize: '12px',
                  }}
                >
                  Full detail
                </Link>
              </>
            ),
          });
          break;
        case 2: //bid accepted
          enqueueSnackbar(t('Your bid accepted'), {
            variant: 'info',
            preventDuplicate: true,
            autoHideDuration: 3000,
            action: () => (
              <>
                <Link
                  onClick={() => notificationClickHandler(message.data.id)}
                  to={`/load/${message.data.object_id}`}
                  style={{
                    color: 'white',
                    fontSize: '12px',
                  }}
                >
                  Full detail
                </Link>
              </>
            ),
          });
          break;
        case 3: //bid canceled
          enqueueSnackbar(t('Your bid canceled'), {
            variant: 'info',
            preventDuplicate: true,
            autoHideDuration: 3000,
            action: () => (
              <>
                <Link
                  onClick={() => notificationClickHandler(message.data.id)}
                  to={`/load/${message.data.object_id}`}
                  style={{
                    color: 'white',
                    fontSize: '12px',
                  }}
                >
                  Full detail
                </Link>
              </>
            ),
          });
          break;
        case 4:
          enqueueSnackbar(t('New load created'), {
            variant: 'info',
            preventDuplicate: true,
            autoHideDuration: 3000,
            action: () => (
              <>
                <Link
                  onClick={() => notificationClickHandler(message.data.id)}
                  to={`/load/${message.data.object_id}`}
                  style={{
                    color: 'white',
                    fontSize: '12px',
                  }}
                >
                  Full detail
                </Link>
              </>
            ),
          });
          break;
        case 5: // should know condition when it should works
          break;
        case 6: //load finished
          enqueueSnackbar(t('Driver finish the load'), {
            variant: 'info',
            preventDuplicate: true,
            autoHideDuration: 3000,
            action: () => (
              <>
                <Link
                  onClick={() => notificationClickHandler(message.data.id)}
                  to={`/load/${message.data.object_id}`}
                  style={{
                    color: 'white',
                    fontSize: '12px',
                  }}
                >
                  Full detail
                </Link>
              </>
            ),
          });
          break;
        default:
          console.log(t('Something went wrong') + message);
      }
    });
  }, [socket]);

  return <>{isDriver ? <DriverView /> : <CustomerView />}</>;
};

export default AppViews;
