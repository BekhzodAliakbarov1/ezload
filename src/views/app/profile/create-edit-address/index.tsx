import Input from 'components/input/input';
import Text from 'components/typography/text';
import React, { useState } from 'react';
import {
  CreateAddressButtonsWrapper,
  CreateAddressInputsBox,
  CreateAddressMapWrapper,
  CreateAddressWrapper,
} from './create-address.styles';
import Button from 'components/button/button';
import { useLocation, useNavigate } from 'react-router-dom';
import { AddressInterface } from 'types/address.types';
import {
  useCreateProfileAddress,
  useEditProfileAddress,
} from 'server-state/mutations/use-profile-address';
import CountryInput from 'components/input/country-input';
import RegionInput from 'components/input/region-input';
import DistrictInput from 'components/input/district-input';
import Map from 'components/map';
import { useTranslation } from 'react-i18next';
const CreateEditAddress = () => {
  const { state } = useLocation() as {
    state: { type?: 'EDIT'; data?: AddressInterface };
  };
  const [
    { address_1, address_2, country, region, district, zip_code, latLong },
    setAddress,
  ] = useState({
    address_1: state?.data?.address.orientation ?? '',
    address_2: '',
    country: {
      title: state?.data?.address.country.title ?? '',
      id: state?.data?.address.country.id,
    },
    region: {
      title: state?.data?.address.region.title ?? '',
      id: state?.data?.address.region.id,
    },
    district: {
      title: state?.data?.address.district.title ?? '',
      id: state?.data?.address.district.id,
    },
    latLong: {
      lat: state?.data?.address.location.latitude ?? 0,
      lng: state?.data?.address.location.longitude ?? 0,
    },
    zip_code: state?.data?.address.postal_code ?? '',
  });
  const { t } = useTranslation();
  const navigate = useNavigate();
  const createAddressRequest = useCreateProfileAddress();
  const editAddressRequest = useEditProfileAddress(state?.data?.id);
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const address = {
      country: Number(country.id),
      district: Number(district.id),
      location: { latitude: latLong.lat, longitude: latLong.lng },
      orientation: address_1 ?? 'street',
      postal_code: zip_code,
      region: Number(region.id),
    };

    if (state?.type === 'EDIT') {
      editAddressRequest.mutate(address, {
        onSuccess() {
          navigate(-1);
        },
      });
    } else {
      createAddressRequest.mutate(address, {
        onSuccess() {
          navigate(-1);
        },
      });
    }
  };
  const searchInputSelectHandler = ({
    fieldName,
    val,
  }: {
    val: { id: string; title: string };
    fieldName: 'region' | 'district' | 'country';
  }) => {
    setAddress((value) => {
      return { ...value, [fieldName]: val };
    });
  };
  const simpleInputSelectionHandler = ({
    fieldName,
    val,
  }: {
    fieldName: 'zip_code' | 'address_1' | 'address_2';
    val: string;
  }) => {
    setAddress((value) => {
      return { ...value, [fieldName]: val };
    });
  };
  const getLatLong = ({ lat, lng }: { lat: number; lng: number }) => {
    setAddress((val) => {
      return { ...val, latLong: { lat, lng } };
    });
  };
  return (
    <CreateAddressWrapper onSubmit={submitHandler}>
      <Text color="main_100">{t('My addresses')}</Text>
      <CreateAddressInputsBox>
        <div>
          <CountryInput
            value={country.title}
            selectHanlder={({ id, title }) => {
              searchInputSelectHandler({
                fieldName: 'country',
                val: { id, title },
              });
            }}
          />
          <RegionInput
            country={country.title}
            selectHanlder={({ id, title }) => {
              searchInputSelectHandler({
                fieldName: 'region',
                val: { id, title },
              });
            }}
            value={region.title}
          />
          <DistrictInput
            country={country.title}
            region={region.title}
            value={district.title}
            selectHanlder={({ id, title }) => {
              searchInputSelectHandler({
                fieldName: 'district',
                val: { id, title },
              });
            }}
          />
        </div>
        <div>
          <Input
            placeholder={`${'Addressline'} 1`}
            value={address_1}
            onChange={(e) => {
              simpleInputSelectionHandler({
                fieldName: 'address_1',
                val: e.target.value,
              });
            }}
          />
          <Input
            placeholder={`${'Addressline'} 2`}
            value={address_2}
            onChange={(e) => {
              simpleInputSelectionHandler({
                fieldName: 'address_2',
                val: e.target.value,
              });
            }}
          />
          <Input
            required
            placeholder="Zip Code"
            value={zip_code}
            onChange={(e) => {
              simpleInputSelectionHandler({
                fieldName: 'zip_code',
                val: e.target.value,
              });
            }}
          />
        </div>
      </CreateAddressInputsBox>
      <CreateAddressMapWrapper>
        <Map
          address={`${country.title}, ${region.title}, ${district.title}`}
          getAddressLine={simpleInputSelectionHandler}
          getLatLong={getLatLong}
        />
      </CreateAddressMapWrapper>
      <CreateAddressButtonsWrapper>
        <Button
          type="submit"
          loading={
            editAddressRequest.isLoading || createAddressRequest.isLoading
          }
        >
          {state?.type === 'EDIT' ? t('Edit address') : t('Add address')}
        </Button>
        <Button buttonType="secondary_dark" onClick={() => navigate(-1)}>
          {t('Cancel')}
        </Button>
      </CreateAddressButtonsWrapper>
    </CreateAddressWrapper>
  );
};
export default CreateEditAddress;
