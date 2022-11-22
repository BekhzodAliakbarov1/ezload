import { IconButton } from '@mui/material';
import Button from 'components/button/button';
import FileIcon from 'components/icons/file.icon';
import PenIcon from 'components/icons/pen.icon';
import PlusIcon from 'components/icons/plus.icon';
import XIcon from 'components/icons/x.icon';
import CountryRouteInput from 'components/input/route-inputs/country-route';
import RegionRouteInput from 'components/input/route-inputs/region-route';
import DeletRouteModal from 'components/modals/delete-route-modal';
import RoutesContainerSkeloton from 'components/skelotons/routes-container';
import Text from 'components/typography/text';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useCreateRoute } from 'server-state/mutations/use-create-route';
import { useRoutes } from 'server-state/queries/use-routes';
import {
  LastButtonWrapper,
  MyRoutesEditButtonWrapper,
  NoRoutesFindSection,
  ProfileRoutesCreatedLocationsSingleRow,
  ProfileRoutesCreatedLocationsWrapper,
  ProfileRoutesDataWrapper,
  ProfileRoutesHeader,
  ProfileRoutesInputsWrapper,
  StyledGreenText,
} from './profile-routes.styles';

const ProfileRoutes = () => {
  const initialState = { id: '', title: '' };
  const [country, setCountry] = useState<{ id: string; title: string }>(
    initialState
  );
  const [region, setRegion] = useState<{ id: string; title: string }>(
    initialState
  );
  const createRouteRequest = useCreateRoute();
  const [isEditing, setIsEditing] = useState(false);
  const routesRequest = useRoutes();
  const { t } = useTranslation();

  const createRoute = ({
    clear,
  }: {
    clear?: 'both' | 'region' | 'country';
  }) => {
    if (region.id && country.id) {
      createRouteRequest.mutate(
        { country: country.id, region: region.id },
        {
          onSuccess() {
            routesRequest.refetch();
            if (clear === 'both') {
              setRegion(initialState);
              setCountry(initialState);
            } else if (clear === 'country') {
              setCountry(initialState);
            } else if (clear === 'region') {
              setRegion(initialState);
            }
          },
        }
      );
    }
  };

  return (
    <ProfileRoutesDataWrapper>
      <ProfileRoutesHeader>
        <Text size="lg">{t('My routes')}</Text>
        {!isEditing && (
          <MyRoutesEditButtonWrapper onClick={() => setIsEditing(true)}>
            <IconButton>
              <PenIcon />
            </IconButton>
            <Text>{t('Edit')}</Text>
          </MyRoutesEditButtonWrapper>
        )}
      </ProfileRoutesHeader>
      {routesRequest.isLoading ? (
        <RoutesContainerSkeloton />
      ) : routesRequest?.data?.routes &&
        routesRequest.data.routes.length > 0 ? (
        <ProfileRoutesCreatedLocationsWrapper>
          {routesRequest.data?.routes?.map((route, index) => (
            <ProfileRoutesCreatedLocationsSingleRow key={route.id}>
              <Text weight="600">
                {index + 1}. {route.region.title}, {route.country.title}
              </Text>
              <DeletRouteModal route_id={route.id}>
                <IconButton>
                  <XIcon />
                </IconButton>
              </DeletRouteModal>
            </ProfileRoutesCreatedLocationsSingleRow>
          ))}
        </ProfileRoutesCreatedLocationsWrapper>
      ) : (
        <NoRoutesFindSection>
          <FileIcon size="150" />
          <Text>{t('No routes yet')}</Text>
        </NoRoutesFindSection>
      )}

      {isEditing && (
        <>
          <ProfileRoutesInputsWrapper>
            <CountryRouteInput
              value={country.title}
              selectHanlder={({ id, title }) => {
                setCountry({ id, title });
              }}
            />
            <div>
              <RegionRouteInput
                value={region.title}
                country={country?.title}
                selectHanlder={({ id, title }) => {
                  setRegion({ id, title });
                }}
              />

              <Button
                disabled={!country.id || !region.id}
                onClick={() => createRoute({ clear: 'region' })}
              >
                <PlusIcon />
              </Button>
            </div>
          </ProfileRoutesInputsWrapper>
          <StyledGreenText onClick={() => createRoute({ clear: 'both' })}>
            {t('+ Add new country')}
          </StyledGreenText>
          {/* <Button buttonType="dark" onClick={submitLocations}>
            Submit
          </Button> */}
          <LastButtonWrapper>
            <Button onClick={() => setIsEditing(false)}>
              {t('Save changes')}
            </Button>
            <Button onClick={() => setIsEditing(false)} buttonType="white">
              {t('Cancel')}
            </Button>
          </LastButtonWrapper>
        </>
      )}
    </ProfileRoutesDataWrapper>
  );
};

export default ProfileRoutes;
