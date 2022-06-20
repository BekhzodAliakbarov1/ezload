import React, { useState } from 'react';
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

const PersonalInformation = () => {
  const [name, setName] = useState('Asror Namozov');
  const [phone, setPhone] = useState('998996026611');
  const { isDriver } = useDriver();

  const handleNameSubmit = (value: string) => {
    setName(value);
  };
  const handlePhoneSubmit = (value: string) => {
    setPhone(value);
  };

  return (
    <PersonalInformationWrapper>
      <PersonalInformationTopPartWrapper>
        <Avatar sizes="141px" src={img} />
        <NamePhoneNumberWrapper>
          <EditableFiled
            inputType="text"
            label="Your name"
            value={name}
            placeholder="Enter name"
            onSubmit={handleNameSubmit}
            // it will correct when connect to api
            isLoading={false}
          />
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
