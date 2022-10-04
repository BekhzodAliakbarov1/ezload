import Text from 'components/typography/text';
import React from 'react';
import {
  ActionLoaddAddressWrapper,
  ActionLoadInputAndMapWrapper,
  ActionLoadInputsWrapper,
  StyledText,
  ActionLoadMapContentWrapper,
  ChooseAndCreateTextWrapper,
  ClearTextWrapper,
  ActionLoadMapWrapper,
  SaveAddressWrapper,
  StyledIconButton,
} from './action-load-address.styles';
import Input from 'components/input/input';
// import CloseIcon from 'components/icons/close.icon';
import TickIcon from 'components/icons/tick.icon';
import { colors } from 'styles/variables';
import {
  defaultdata,
  useData,
} from 'layouts/load-action-layout/load-action-layout.context';
import AddressInput from './action-loads-inputs/address-input';
import CountryInput from 'components/input/country-input';
import RegionInput from 'components/input/region-input';
import DistrictInput from 'components/input/district-input';
import Map from 'components/map';
import { useTranslation } from 'react-i18next';

const ActionLoadAddress: React.FC<{
  title: string;
  type: 'pickup' | 'delivery';
}> = ({ title, type }) => {
  const { t } = useTranslation();
  const { data, setValues } = useData();
  const { address_1, address_2, country, region, district, zip_code } =
    data[type];

  const searchInputSelectHandler = ({
    fieldName,
    val,
  }: {
    val: { id: string; title: string };
    fieldName: 'region' | 'district' | 'country';
  }) => {
    setValues({
      ...data,
      [type]: {
        ...data[type],
        [fieldName]: val,
      },
    });
  };

  const simpleInputSelectionHandler = ({
    fieldName,
    val,
  }: {
    fieldName: 'zip_code' | 'address_1' | 'address_2';
    val: string;
  }) => {
    setValues({
      ...data,
      [type]: {
        ...data[type],
        [fieldName]: val,
      },
    });
  };

  const getLatLong = ({ lat, lng }: { lat: number; lng: number }) => {
    setValues({
      ...data,
      [type]: {
        ...data[type],
        latLong: {
          lat,
          lng,
        },
      },
    });
  };

  return (
    <ActionLoaddAddressWrapper>
      <Text size="md" weight="600">
        {title}
      </Text>
      <AddressInput />
      <ChooseAndCreateTextWrapper>
        <StyledText>{t('Or choose manually')}</StyledText>
        <ClearTextWrapper onClick={() => setValues(defaultdata)}>
          {/* <StyledIconButton>
            <CloseIcon />
          </StyledIconButton>
          <Text weight="500">{t('Clear form')}</Text> */}
        </ClearTextWrapper>
      </ChooseAndCreateTextWrapper>
      <ActionLoadInputAndMapWrapper>
        <ActionLoadInputsWrapper>
          <CountryInput
            value={country.title}
            selectHanlder={(value) => {
              searchInputSelectHandler({
                fieldName: 'country',
                val: { id: value.id, title: value.title },
              });
            }}
          />
          <RegionInput
            country={country.title}
            selectHanlder={(value) => {
              searchInputSelectHandler({
                fieldName: 'region',
                val: { id: value.id, title: value.title },
              });
            }}
            value={region.title}
          />
          <DistrictInput
            country={country.title}
            region={region.title}
            value={district.title}
            selectHanlder={(value) => {
              searchInputSelectHandler({
                fieldName: 'district',
                val: { id: value.id, title: value.title },
              });
            }}
          />
          <Input
            onChange={(e) => {
              simpleInputSelectionHandler({
                fieldName: 'address_2',
                val: e.target.value,
              });
            }}
            placeholder={`${t('addressline')} 2`}
            value={address_2}
          />
          <Input
            onChange={(e) => {
              simpleInputSelectionHandler({
                fieldName: 'address_1',
                val: e.target.value,
              });
            }}
            placeholder={`${t('addressline')} 1`}
            value={address_1}
          />
          <Input
            onChange={(e) => {
              simpleInputSelectionHandler({
                fieldName: 'zip_code',
                val: e.target.value,
              });
            }}
            placeholder="Zip Code"
            value={zip_code}
            required
          />
        </ActionLoadInputsWrapper>
        <ActionLoadMapContentWrapper>
          <ActionLoadMapWrapper>
            <Map
              address={`${country.title}, ${region.title}, ${district.title}`}
              getAddressLine={simpleInputSelectionHandler}
              getLatLong={getLatLong}
            />
          </ActionLoadMapWrapper>
          <SaveAddressWrapper>
            <StyledIconButton
              onClick={() =>
                setValues({
                  ...data,
                  [type]: {
                    ...data[type],
                    save_my_address: !data[type].save_my_address,
                  },
                })
              }
            >
              {data[type].save_my_address ? (
                <TickIcon />
              ) : (
                <TickIcon fill={colors.dark_50} />
              )}
            </StyledIconButton>
            <Text weight="500">{t('Save to my addresses')}</Text>
          </SaveAddressWrapper>
        </ActionLoadMapContentWrapper>
      </ActionLoadInputAndMapWrapper>
    </ActionLoaddAddressWrapper>
  );
};

export default ActionLoadAddress;
