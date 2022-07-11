import { IconButton } from '@mui/material';
import Button from 'components/button/button';
import PenIcon from 'components/icons/pen.icon';
import PlusIcon from 'components/icons/plus.icon';
import XIcon from 'components/icons/x.icon';
import Input from 'components/input/input';
import Text from 'components/typography/text';
import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
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
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [locations, setLocations] = useState<
    {
      id: string;
      country: string;
      region: string;
    }[]
  >([
    { country: 'Uzbekistan', id: '12211221', region: 'Tashkent' },
    { country: 'Uzbekistan', id: '21122112', region: 'Samarqand' },
  ]);

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
      {locations.length > 0 && (
        <ProfileRoutesCreatedLocationsWrapper>
          {locations.map((location, index) => (
            <ProfileRoutesCreatedLocationsSingleRow key={`location-${index}`}>
              <Text weight="600">
                {index + 1}. {location.region}, {location.country}
              </Text>
              <IconButton onClick={() => deleteLocation(location.id)}>
                <XIcon />
              </IconButton>
            </ProfileRoutesCreatedLocationsSingleRow>
          ))}
        </ProfileRoutesCreatedLocationsWrapper>
      )}
      {isEditing && (
        <>
          <ProfileRoutesInputsWrapper>
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
          </ProfileRoutesInputsWrapper>
          <StyledGreenText onClick={handleClickWithNewCountry}>
            + Add new country
          </StyledGreenText>
          <Button buttonType="dark" onClick={submitLocations}>
            Submit
          </Button>
          <LastButtonWrapper>
            <Button>Save changes</Button>
            <Button buttonType="white">Cancel</Button>
          </LastButtonWrapper>
        </>
      )}
    </ProfileRoutesDataWrapper>
  );
};

export default ProfileRoutes;
