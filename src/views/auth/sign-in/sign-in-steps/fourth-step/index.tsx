import { IconButton } from '@mui/material';
import Button from 'components/button/button';
import BackIcon from 'components/icons/back.icon';
import PlusIcon from 'components/icons/plus.icon';
import XIcon from 'components/icons/x.icon';
import Text from 'components/typography/text';
import { useAuth } from 'global-state/auth/auth.state';
import { useSteps } from 'global-state/step/step-context';
import React, { useState, useRef, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import {
  DriverSignInFourthStepWrapper,
  FourthStepCreatedLocationsSingleRow,
  FourthStepCreatedLocationsWrapper,
  FourthStepDataWrapper,
  FourthStepInfoWrapper,
  FourthStepInputsWrapper,
  FourthStepNavigateBack,
  LastButtonWrapper,
  StyledGreenText,
} from './fourth-step.styles';
import { useNavigate } from 'react-router-dom';
import CountryRouteInput from 'components/input/route-inputs/country-route';
import RegionRouteInput from 'components/input/route-inputs/region-route';
import { useCreateRoute } from 'server-state/mutations/use-create-route';
import { useDeleteRoute } from 'server-state/mutations/use-delete-route';
import { useRoutes } from 'server-state/queries/use-routes';

const FourthStep: React.FC<{
  token: string;
  user_id: string;
  handleLogin: () => void;
}> = ({ token, user_id, handleLogin }) => {
  const { previusStep } = useSteps();
  const initialState = { id: '', title: '' };
  const [country, setCountry] = useState<{ id: string; title: string }>(
    initialState
  );
  const [region, setRegion] = useState<{ id: string; title: string }>(
    initialState
  );
  const locationsDiv = useRef<HTMLDivElement>(null);
  const [locations, setLocations] = useState<
    {
      id: string;
      country: string;
      region: string;
    }[]
  >([]);
  const createRouteRequest = useCreateRoute(token);
  const deleteRouteRequest = useDeleteRoute(token);
  const routesRequest = useRoutes(token, user_id);

  const navigate = useNavigate();

  useEffect(() => {
    locationsDiv.current?.scrollTo(0, 100);
  }, [locations]);

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

  const completeButton = () => {
    handleLogin();
    navigate('/');
  };

  return (
    <DriverSignInFourthStepWrapper>
      <FourthStepDataWrapper>
        <Text size="lg" weight="800">
          My routes
        </Text>
        <FourthStepInfoWrapper>
          <FourthStepNavigateBack>
            <IconButton>
              <BackIcon />
            </IconButton>
            <Text onClick={previusStep} weight="600">
              Personal and truck info
            </Text>
          </FourthStepNavigateBack>
          <Text color="main_90">Step 2/2</Text>
        </FourthStepInfoWrapper>
        {routesRequest.data?.routes && routesRequest.data.routes.length > 0 && (
          <FourthStepCreatedLocationsWrapper>
            {routesRequest.data.routes.map((routes, index) => (
              <FourthStepCreatedLocationsSingleRow key={routes.id}>
                <Text weight="600">
                  {index + 1}. {routes.region.title}, {routes.country.title}
                </Text>
                <IconButton onClick={() => deleteLocation(routes.id)}>
                  <XIcon />
                </IconButton>
              </FourthStepCreatedLocationsSingleRow>
            ))}
          </FourthStepCreatedLocationsWrapper>
        )}
        <FourthStepInputsWrapper>
          <CountryRouteInput
            value=""
            selectHanlder={() => console.log('')}
            token={token}
          />
          <div>
            <RegionRouteInput
              value=""
              country=""
              selectHanlder={() => console.log('')}
              token={token}
            />

            <Button onClick={() => createRoute({ clear: 'region' })}>
              <PlusIcon />
            </Button>
          </div>
        </FourthStepInputsWrapper>
        <StyledGreenText onClick={() => createRoute({ clear: 'both' })}>
          + Add new country
        </StyledGreenText>
        {/* <Button buttonType="dark" onClick={submitLocations}>
          Submit
        </Button> */}
        <LastButtonWrapper>
          <Button fullWidth onClick={completeButton}>
            Complete
          </Button>
        </LastButtonWrapper>
      </FourthStepDataWrapper>
    </DriverSignInFourthStepWrapper>
  );
};

export default FourthStep;
