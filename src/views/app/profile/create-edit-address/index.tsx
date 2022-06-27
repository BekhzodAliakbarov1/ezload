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

interface StateType {
  state: { type?: 'EDIT'; data?: AddressInterface };
}

const CreateEditAddress = () => {
  const [
    { address_1, address_2, country, region, street, zip_code },
    setAddress,
  ] = useState({
    address_1: '',
    address_2: '',
    street: '',
    region: '',
    country: '',
    zip_code: '',
  });
  const { state } = useLocation() as StateType;
  const navigate = useNavigate();
  const createAddressRequest = useCreateAddress();
  const editAddressRequest = useEditAddress();

  useEffect(() => {
    if (state?.type === 'EDIT') {
      setAddress({
        address_1: state.data?.address_1 ?? '',
        address_2: state.data?.address_2 ?? '',
        country: state.data?.country ?? '',
        region: state.data?.region ?? '',
        street: state.data?.street ?? '',
        zip_code: state.data?.zip_code ?? '',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const submitHandler = () => {
    // use createAddressRequest or editAddressRequest
    console.log('smth');
  };

  return (
    <CreateAddressWrapper>
      <Text color="main_100">My addresses</Text>
      <CreateAddressInputsBox>
        <div>
          <Input placeholder="Addressline 1" value={address_1} />
          <Input placeholder="Addressline 2" value={address_2} />
          <Input placeholder="Street" value={street} />
        </div>
        <div>
          <Input placeholder="Region" value={region} />
          <Input placeholder="Country" value={country} />
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
