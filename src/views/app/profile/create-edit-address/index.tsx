import Input from 'components/input/input';
import Text from 'components/typography/text';
import React, { useState, useEffect } from 'react';
import {
  CreateAddressButtonsWrapper,
  CreateAddressInputsBox,
  CreateAddressMapWrapper,
  CreateAddressWrapper,
} from './create-address.styles';
import image from 'assets/img/default-image.png';
import Button from 'components/button/button';
import { useLocation, useNavigate } from 'react-router-dom';
import { AddressInterface } from 'types/address.types';
import {
  useCreateAddress,
  useEditAddress,
} from 'server-state/mutations/use-address';
import CountryInput from 'components/input/country-input';
import RegionInput from 'components/input/region-input';
import DistrictInput from 'components/input/district-input';

interface StateType {
  state: { type?: 'EDIT'; data?: AddressInterface };
}

const CreateEditAddress = () => {
  const { state } = useLocation() as StateType;
  const [
    { address_1, address_2, country, region, district, zip_code },
    setAddress,
  ] = useState({
    address_1: '',
    address_2: '',
    country: state?.data?.address.country.title ?? '',
    region: state?.data?.address.region.title ?? '',
    district: state?.data?.address.district.title ?? '',
    zip_code: state?.data?.address.postal_code ?? '',
  });

  const navigate = useNavigate();
  const createAddressRequest = useCreateAddress();
  const editAddressRequest = useEditAddress();

  const submitHandler = () => {
    // use createAddressRequest or editAddressRequest
    console.log('smth');
  };
  console.log(country);

  return (
    <CreateAddressWrapper>
      <Text color="main_100">My addresses</Text>
      <CreateAddressInputsBox>
        <div>
          <Input placeholder="Addressline 1" value={address_1} />
          <Input placeholder="Addressline 2" value={address_2} />
          <DistrictInput
            country={country}
            region={region}
            value={district}
            selectHanlder={({ id, title }) => {
              console.log({ id, title });
            }}
          />
        </div>
        <div>
          <RegionInput
            country={country}
            selectHanlder={({ id, title }) => {
              console.log({ id, title });
            }}
            value={region}
          />
          <CountryInput
            value={country}
            selectHanlder={({ id, title }) => {
              console.log({ id, title });
            }}
          />
          <Input placeholder="Zip Code" value={zip_code} />
        </div>
      </CreateAddressInputsBox>
      <CreateAddressMapWrapper style={{ backgroundImage: `url(${image})` }} />
      <CreateAddressButtonsWrapper>
        <Button
          onClick={submitHandler}
          loading={
            state?.type === 'EDIT'
              ? editAddressRequest.isLoading
              : createAddressRequest.isLoading
          }
        >
          {state?.type === 'EDIT' ? 'Edit address' : 'Add address'}
        </Button>
        <Button buttonType="secondary_dark" onClick={() => navigate(-1)}>
          Cancel
        </Button>
      </CreateAddressButtonsWrapper>
    </CreateAddressWrapper>
  );
};

export default CreateEditAddress;
