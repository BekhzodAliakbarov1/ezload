import Button from 'components/button/button';
import LoadsContainer from 'components/loads-container/loads-container';
import LoadsContainerSkeloton from 'components/skelotons/loads-container';
import Text from 'components/typography/text';
import { useQueryUrl } from 'hooks/use-query-url';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useLoads } from 'server-state/queries/use-loads';
import {
  ProfileLoadsWrapper,
  SectionControllerWrapper,
  SingleController,
} from './profile-loads.styles';

const ProfileLoads = () => {
  const { t } = useTranslation();
  const newLoadsRequest = useLoads('new');
  const onTheWayLoadsRequest = useLoads('on_the_way');
  const deliveredLoadsRequest = useLoads('delivered');
  const query = useQueryUrl();
  const navigate = useNavigate();

  useEffect(() => {
    const type = query.get('name');
    switch (type) {
      case 'new':
        newLoadsRequest.refetch();
        break;
      case 'on_the_way':
        onTheWayLoadsRequest.refetch();
        break;
      case 'done':
        deliveredLoadsRequest.refetch();
        break;
      default:
        newLoadsRequest.refetch();
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query.get('name'), localStorage.getItem('language')]);
  const onClickHandler = (type: 'new' | 'on_the_way' | 'done') => {
    // setSectionType(type);
    navigate(`/profile/my-loads?name=${type.toLowerCase()}`);
  };

  const isLoading =
    newLoadsRequest.isLoading ||
    onTheWayLoadsRequest.isLoading ||
    deliveredLoadsRequest.isLoading;

  const fetchNextPage = () => {
    const type = query.get('name');
    if (type === 'new' || !query.get('name')) {
      newLoadsRequest.fetchNextPage();
    } else if (type === 'on_the_way') {
      onTheWayLoadsRequest.fetchNextPage();
    } else if (type === 'done') {
      deliveredLoadsRequest.fetchNextPage();
    }
  };

  return (
    <ProfileLoadsWrapper>
      <SectionControllerWrapper>
        <SingleController
          onClick={() => onClickHandler('new')}
          active={query.get('name') === 'new' || !query.get('name')}
        >
          <Text weight="700">{t('New')}</Text>
        </SingleController>
        <SingleController
          onClick={() => onClickHandler('on_the_way')}
          active={query.get('name') === 'on_the_way'}
        >
          <Text weight="700">{t('On the way')}</Text>
        </SingleController>
        <SingleController
          onClick={() => onClickHandler('done')}
          active={query.get('name') === 'done'}
        >
          <Text weight="700">{t('Delivered')}</Text>
        </SingleController>
      </SectionControllerWrapper>
      {isLoading && <LoadsContainerSkeloton />}
      {(query.get('name') === 'new' || !query.get('name')) &&
        newLoadsRequest.data?.pages && (
          <>
            {newLoadsRequest.data.pages.map((page, index) => (
              <LoadsContainer key={index} loads={page.results} status={1} />
            ))}
            {newLoadsRequest.hasNextPage && (
              <Button
                onClick={fetchNextPage}
                aria-label="more"
                fullWidth
                buttonType="secondary_dark"
                loading={newLoadsRequest.isFetching}
              >
                {t('Load more')}
              </Button>
            )}
          </>
        )}
      {query.get('name') === 'on_the_way' &&
        onTheWayLoadsRequest.data?.pages && (
          <>
            {onTheWayLoadsRequest.data.pages.map((page, index) => (
              <LoadsContainer key={index} loads={page.results} status={2} />
            ))}
            {onTheWayLoadsRequest.hasNextPage && (
              <Button
                onClick={fetchNextPage}
                aria-label="more"
                fullWidth
                buttonType="secondary_dark"
                loading={onTheWayLoadsRequest.isFetching}
              >
                {t('Load more')}
              </Button>
            )}
          </>
        )}
      {query.get('name') === 'done' && deliveredLoadsRequest.data?.pages && (
        <>
          {deliveredLoadsRequest.data.pages.map((page, index) => (
            <LoadsContainer key={index} loads={page.results} status={3} />
          ))}
          {deliveredLoadsRequest.hasNextPage && (
            <Button
              onClick={fetchNextPage}
              aria-label="more"
              fullWidth
              buttonType="secondary_dark"
              loading={deliveredLoadsRequest.isFetching}
            >
              {t('Load more')}
            </Button>
          )}
        </>
      )}
    </ProfileLoadsWrapper>
  );
};

export default ProfileLoads;
