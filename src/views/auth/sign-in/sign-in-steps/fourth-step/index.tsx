import { IconButton } from '@mui/material';
import Button from 'components/button/button';
import BackIcon from 'components/icons/back.icon';
import PlusIcon from 'components/icons/plus.icon';
import XIcon from 'components/icons/x.icon';
import Input from 'components/input/input';
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

const FourthStep = () => {
  const { previusStep } = useSteps();
  const locationsDiv = useRef<HTMLDivElement>(null);
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');
  const [locations, setLocations] = useState<
    {
      id: string;
      country: string;
      region: string;
    }[]
  >([]);
  const { login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    locationsDiv.current?.scrollTo(0, 100);
  }, [locations]);

  const handleClickWithCurrentCountry = () => {
    const id = uuid();
    if (region && country) {
      setLocations((data) => [...data, { country, region, id }]);
      setRegion('');
    }
  };

  const handleClickWithNewCountry = () => {
    const id = uuid();

    if (region && country) {
      setLocations((data) => [...data, { country, region, id }]);
      setRegion('');
      setCountry('');
    }
  };

  const deleteLocation = (id: string) => {
    setLocations((data) => data.filter((item) => item.id !== id));
  };
  const submitLocations = () => {
    console.log({ locations });
  };

  const completeButton = () => {
    console.log('complete all ');
    login({
      tokens: {
        access: '1221',
        refresh: '1221',
      },
      userId: '1221',
      userType: 'driver',
    });
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
        {locations.length > 0 && (
          <FourthStepCreatedLocationsWrapper>
            {locations.map((location, index) => (
              <FourthStepCreatedLocationsSingleRow key={`location-${index}`}>
                <Text weight="600">
                  {index + 1}. {location.region}, {location.country}
                </Text>
                <IconButton onClick={() => deleteLocation(location.id)}>
                  <XIcon />
                </IconButton>
              </FourthStepCreatedLocationsSingleRow>
            ))}
          </FourthStepCreatedLocationsWrapper>
        )}
        <FourthStepInputsWrapper>
          <Input
            placeholder="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <div>
            <Input
              placeholder="Region"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
            />

            <Button onClick={handleClickWithCurrentCountry}>
              <PlusIcon />
            </Button>
          </div>
        </FourthStepInputsWrapper>
        <StyledGreenText onClick={handleClickWithNewCountry}>
          + Add new country
        </StyledGreenText>
        <Button buttonType="dark" onClick={submitLocations}>
          Submit
        </Button>
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
