import { IconButton } from '@mui/material';
import Button from 'components/button/button';
import BackIcon from 'components/icons/back.icon';
import PlusIcon from 'components/icons/plus.icon';
import XIcon from 'components/icons/x.icon';
import Text from 'components/typography/text';
import { useSteps } from 'global-state/step/step-context';
import React, { useState, useRef, useEffect } from 'react';
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
import { useTranslation } from 'react-i18next';

const FourthStep: React.FC<{
  token: string;
  handleLogin: () => void;
}> = ({ token, handleLogin }) => {
  const { t } = useTranslation();
  const { previusStep } = useSteps();
  const initialState = { id: '', title: '' };
  const [country, setCountry] = useState<{ id: string; title: string }>(
    initialState
  );
  const [region, setRegion] = useState<{ id: string; title: string }>(
    initialState
  );
  const locationsDiv = useRef<HTMLDivElement>(null);

  const createRouteRequest = useCreateRoute(token);
  const deleteRouteRequest = useDeleteRoute(token);
  const routesRequest = useRoutes(token);

  const navigate = useNavigate();

  useEffect(() => {
    locationsDiv.current?.scrollTo(0, 100);
  }, [routesRequest.data?.routes]);

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

  const deleteLocation = (route_id: number) => {
    deleteRouteRequest.mutate({ route_id });
  };

  const completeButton = () => {
    handleLogin();
    navigate('/');
  };

  return (
    <DriverSignInFourthStepWrapper>
      <FourthStepDataWrapper>
        <Text size="lg" weight="800">
          {t('My routes')}
        </Text>
        <FourthStepInfoWrapper>
          <FourthStepNavigateBack>
            <IconButton>
              <BackIcon />
            </IconButton>
            <Text onClick={previusStep} weight="600">
              {t('Personal and truck info')}
            </Text>
          </FourthStepNavigateBack>
          <Text color="main_90">{t('Step')} 2/2</Text>
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
            value={country.title}
            selectHanlder={({ id, title }) => {
              setCountry({ id, title });
            }}
            token={token}
          />
          <div>
            <RegionRouteInput
              value={region.title}
              country={country.title}
              selectHanlder={({ id, title }) => {
                setRegion({ id, title });
              }}
              token={token}
            />

            <Button
              buttonType={
                !Boolean(country.id) && !Boolean(region.id)
                  ? 'disabled'
                  : 'contained'
              }
              onClick={() => createRoute({ clear: 'both' })}
            >
              <PlusIcon />
            </Button>
          </div>
        </FourthStepInputsWrapper>
        {/* <StyledGreenText onClick={() => createRoute({ clear: 'both' })}>
          {t('+ Add new country')}
        </StyledGreenText> */}
        {/* <Button buttonType="dark" onClick={submitLocations}>
          {t('Submit')}
        </Button> */}
        <LastButtonWrapper>
          <Button fullWidth onClick={completeButton}>
            {t('Complete')}
          </Button>
        </LastButtonWrapper>
      </FourthStepDataWrapper>
    </DriverSignInFourthStepWrapper>
  );
};

export default FourthStep;
