import React from 'react';
import { PersonalInformationWrapper } from './personal-information.styles';
import Avatar from 'components/avatar';
import img from 'assets/img/profile.png';

const PersonalInformation = () => {
  return (
    <PersonalInformationWrapper>
      <Avatar sizes="141px" src={img} />
    </PersonalInformationWrapper>
  );
};

export default PersonalInformation;
