import Button from 'components/button/button';
import AddressCard from 'components/cards/address-card/address-card';
import PlusIcon from 'components/icons/plus.icon';
import Text from 'components/typography/text';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAddress } from 'server-state/queries/use-address';
import {
  ProfileAddressesWrapper,
  ProfileAddressTopPartContainer,
  ProfileAddressWrapper,
} from './profile-address.styles';

const addresses = [
  {
    address_1: 'N.Kazirabad',
    address_2: '4-25',
    street: 'Chilonzor',
    region: 'Tashkent',
    country: 'Uzbekistan',
    zip_code: '100081',
    id: 1,
  },
  {
    address_1: 'N.Kazirabad',
    address_2: '4-25',
    street: 'Chilonzor',
    region: 'Tashkent',
    country: 'Uzbekistan',
    zip_code: '100081',
    id: 2,
  },
  {
    address_1: 'N.Kazirabad',
    address_2: '4-25',
    street: 'Chilonzor',
    region: 'Tashkent',
    country: 'Uzbekistan',
    zip_code: '100081',
    id: 3,
  },
  {
    address_1: 'N.Kazirabad',
    address_2: '4-25',
    street: 'Chilonzor',
    region: 'Tashkent',
    country: 'Uzbekistan',
    zip_code: '100081',
    id: 4,
  },
];

const ProfileAddress = () => {
  const navigate = useNavigate();
  const addressRequest = useAddress();
  return (
    <ProfileAddressWrapper>
      <ProfileAddressTopPartContainer>
        <Text color="main_100">My addresses</Text>
        <Button
          startIcon={<PlusIcon />}
          buttonType="dark"
          onClick={() => navigate('/profile/create-address')}
        >
          Add new
        </Button>
      </ProfileAddressTopPartContainer>
      <ProfileAddressesWrapper>
        {addresses.map((address) => (
          <AddressCard key={address.id} {...address} />
        ))}
      </ProfileAddressesWrapper>
    </ProfileAddressWrapper>
  );
};

export default ProfileAddress;
