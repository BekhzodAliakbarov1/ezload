import CreateLoadAddress from 'components/create-load-address/create-load-address';
import LocationIcon from 'components/icons/location.icon';
import Text from 'components/typography/text';
import React from 'react';
import {
  AllLocationInputsWrapper,
  LoadAddressFlexWrapper,
  LoadAddressWrapper,
  LoccationIconWrapper,
  VerticalLineWrapper,
} from './load-address.styles';

const LoadAddress = () => {
  return (
    <LoadAddressWrapper>
      <Text weight="700">Load address</Text>
      <LoadAddressFlexWrapper>
        <VerticalLineWrapper>
          <LoccationIconWrapper>
            <LocationIcon fill="#fff" />
          </LoccationIconWrapper>
          <span />
          <LoccationIconWrapper>
            <LocationIcon fill="#fff" />
          </LoccationIconWrapper>
        </VerticalLineWrapper>
        <AllLocationInputsWrapper>
          <CreateLoadAddress title="Select pickup location" />
          <CreateLoadAddress title="Select destination location" />
        </AllLocationInputsWrapper>
      </LoadAddressFlexWrapper>
    </LoadAddressWrapper>
  );
};

export default LoadAddress;
