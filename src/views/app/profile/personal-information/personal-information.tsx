import React, { useState, useEffect } from 'react';
import {
  NamePhoneNumberWrapper,
  PersonalInformationTopPartWrapper,
  PersonalInformationWrapper,
} from './personal-information.styles';
import Avatar from 'components/avatar';
import img from 'assets/img/profile.png';
import EditableFiled from 'components/editable-field-component/editable-field';
import TruckInfo from './truck-part';
import { useDriver } from 'hooks/use-driver';
import { useProfile } from 'server-state/queries/use-profile';
import { useUpdateProfile } from 'server-state/mutations/use-update-profile';

const PersonalInformation = () => {
  const { data } = useProfile();
  const updateProfileRequest = useUpdateProfile();
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState('998996026611');
  const { isDriver } = useDriver();

  useEffect(() => {
    if (data?.first_name) {
      setName(data?.first_name);
    }
  }, [data]);

  const handleNameSubmit = (value: string) => {
    setName(value);
    updateProfileRequest.mutate(
      { first_name: value },
      {
        onSuccess(res) {
          console.log(res);
        },
      }
    );
  };
  const handlePhoneSubmit = (value: string) => {
    setPhone(value);
  };

  return (
    <PersonalInformationWrapper>
      <PersonalInformationTopPartWrapper>
        <Avatar sizes="141px" src={img} />
        <NamePhoneNumberWrapper>
          {name && (
            <EditableFiled
              inputType="text"
              label="Your name"
              value={name}
              placeholder="Enter name"
              onSubmit={handleNameSubmit}
              // it will correct when connect to api
              isLoading={false}
            />
          )}
          <EditableFiled
            inputType="number"
            label="Your phone number"
            value={phone}
            placeholder="Enter phone number"
            onSubmit={handlePhoneSubmit}
            // it will correct when connect to api
            isLoading={false}
          />
        </NamePhoneNumberWrapper>
      </PersonalInformationTopPartWrapper>
      {isDriver && (
        <TruckInfo
          car_capacity="2000 tonnes"
          car_model="Man"
          car_number="01  T 533 UU"
        />
      )}
    </PersonalInformationWrapper>
  );
};

export default PersonalInformation;
