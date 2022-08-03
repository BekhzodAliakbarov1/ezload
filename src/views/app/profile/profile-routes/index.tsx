import { IconButton } from '@mui/material';
import Button from 'components/button/button';
import PenIcon from 'components/icons/pen.icon';
import PlusIcon from 'components/icons/plus.icon';
import XIcon from 'components/icons/x.icon';
import CountryRouteInput from 'components/input/route-inputs/country-route';
import RegionRouteInput from 'components/input/route-inputs/region-route';
import Text from 'components/typography/text';
import { useAuth } from 'global-state/auth/auth.state';
import React, { useState } from 'react';
import { useCreateRoute } from 'server-state/mutations/use-create-route';
import { useDeleteRoute } from 'server-state/mutations/use-delete-route';
import { useRoutes } from 'server-state/queries/use-routes';
import {
  LastButtonWrapper,
  MyRoutesEditButtonWrapper,
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
  const deleteRouteRequest = useDeleteRoute();
  const [isEditing, setIsEditing] = useState(false);
  const routesRequest = useRoutes();

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

  const deleteLocation = (route_id: number) => {
    deleteRouteRequest.mutate(
      { route_id },
      {
        onSuccess() {
          routesRequest.refetch();
        },
      }
    );
  };
  // const submitLocations = () => {
  //   console.log({ locations });
  // };

  return (
    <ProfileRoutesDataWrapper>
      <ProfileRoutesHeader>
        <Text size="lg" weight="800">
          My routes
        </Text>
        {!isEditing && (
          <MyRoutesEditButtonWrapper onClick={() => setIsEditing(true)}>
            <IconButton>
              <PenIcon />
            </IconButton>
            <Text>Edit</Text>
          </MyRoutesEditButtonWrapper>
        )}
      </ProfileRoutesHeader>
      {routesRequest?.data?.routes && routesRequest.data.routes.length > 0 && (
        <ProfileRoutesCreatedLocationsWrapper>
          {routesRequest.data?.routes?.map((route, index) => (
            <ProfileRoutesCreatedLocationsSingleRow key={route.id}>
              <Text weight="600">
                {index + 1}. {route.region.title}, {route.country.title}
              </Text>
              <IconButton onClick={() => deleteLocation(route.id)}>
                <XIcon />
              </IconButton>
            </ProfileRoutesCreatedLocationsSingleRow>
          ))}
        </ProfileRoutesCreatedLocationsWrapper>
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
            + Add new country
          </StyledGreenText>
          {/* <Button buttonType="dark" onClick={submitLocations}>
            Submit
          </Button> */}
          <LastButtonWrapper>
            <Button>Save changes</Button>
            <Button onClick={() => setIsEditing(false)} buttonType="white">
              Cancel
            </Button>
          </LastButtonWrapper>
        </>
      )}
    </ProfileRoutesDataWrapper>
  );
};

export default ProfileRoutes;
