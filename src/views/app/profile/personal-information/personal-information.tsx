import React, { useState } from 'react';
import {
  NamePhoneNumberWrapper,
  PersonalInformationWrapper,
} from './personal-information.styles';
import Avatar from 'components/avatar';
import img from 'assets/img/profile.png';
import EditableFiled from 'components/editable-field-component/editable-field';

const PersonalInformation = () => {
  const [name, setName] = useState('Asror Namozov');
  const [phone, setPhone] = useState('998996026611');

  const handleNameSubmit = (value: string) => {
    setName(value);
  };
  const handlePhoneSubmit = (value: string) => {
    setPhone(value);
  };

  return (
    <PersonalInformationWrapper>
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
    </PersonalInformationWrapper>
  );
};

export default PersonalInformation;
