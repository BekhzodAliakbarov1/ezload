import Button from 'components/button/button';
import Text from 'components/typography/text';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useUpdateNotification } from 'server-state/mutations/use-update-notification';
import { useNotificationsList } from 'server-state/queries/use-notification-list';
import {
  ProfileNotificationsWrapper,
  ProfileNotificationsTopPartContainer,
  NotificationsWrapper,
  SingleNotification,
  NewNotificationCircle,
  NotificationRightContent,
} from './profile-notifications.styles';

const ProfileNotifications = () => {
  const { data, isLoading, fetchNextPage } = useNotificationsList();
  const { mutate } = useUpdateNotification();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleClick = ({
    status,
    object_id,
    id,
  }: {
    status: number;
    object_id: number;
    id: number;
  }) => {
    mutate({ notification_id: id });
    if (status === 1) {
      navigate(`/load-bidded-driver/${object_id}`);
    } else if (status === 2) {
      navigate(`/load/${object_id}`);
    } else if (status === 3) {
      navigate(`/load/${object_id}`);
    } else if (status === 4) {
      navigate(`/load/${object_id}`);
    } else if (status === 5) {
      // navigate(`/load/${object_id}`);
    } else if (status === 6) {
      navigate(`/load/${object_id}`);
    }
  };

  return (
    <ProfileNotificationsWrapper>
      <ProfileNotificationsTopPartContainer>
        <Text color="main_100">{t('Notifications')}</Text>
      </ProfileNotificationsTopPartContainer>
      <NotificationsWrapper>
        {data?.pages.map((page) =>
          page.results.map(
            ({ id, is_viewed, object_id, status, created_at, creator }) => (
              <SingleNotification
                key={id}
                onClick={() => handleClick({ status, object_id, id })}
              >
                <NotificationRightContent is_viewed={is_viewed}>
                  <NewNotificationCircle is_viewed={is_viewed} />
                  {status === 1 && <Text>{creator.first_name} send a bid</Text>}
                  {status === 2 && (
                    <Text>{creator.first_name} accepted your bid</Text>
                  )}
                  {status === 3 && (
                    <Text>{creator.first_name} canceled a bid</Text>
                  )}
                  {status === 4 && (
                    <Text>{creator.first_name} created new load</Text>
                  )}
                  {status === 5 && (
                    <Text>{creator.first_name} canceled a load</Text>
                  )}
                  {status === 6 && (
                    <Text>{creator.first_name} delivered load</Text>
                  )}
                </NotificationRightContent>
                <Text>{new Date(created_at).toLocaleDateString()}</Text>
              </SingleNotification>
            )
          )
        )}
      </NotificationsWrapper>
      {data?.pages.at(-1)?.hasNextPage && (
        <Button
          onClick={() => fetchNextPage()}
          loading={isLoading}
          aria-label="more"
          fullWidth
          buttonType="secondary_dark"
        >
          {t('Load more')}
        </Button>
      )}
    </ProfileNotificationsWrapper>
  );
};

export default ProfileNotifications;