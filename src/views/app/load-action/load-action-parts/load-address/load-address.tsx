import ActionLoadAddress from 'components/action-load-address/action-load-address';
import LocationIcon from 'components/icons/location.icon';
import Text from 'components/typography/text';
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  AllLocationInputsWrapper,
  LoadAddressFlexWrapper,
  LoadAddressWrapper,
  LoccationIconWrapper,
  VerticalLineWrapper,
} from './load-address.styles';

const LoadAddress = () => {
  const { t } = useTranslation();
  return (
    <LoadAddressWrapper>
      <Text weight="700">{t('Load address')}</Text>
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
          <ActionLoadAddress
            type="pickup"
            title={t('Select pickup location')}
          />
          <ActionLoadAddress
            type="delivery"
            title={t('Select destination location')}
          />
        </AllLocationInputsWrapper>
      </LoadAddressFlexWrapper>
    </LoadAddressWrapper>
  );
};

export default LoadAddress;
