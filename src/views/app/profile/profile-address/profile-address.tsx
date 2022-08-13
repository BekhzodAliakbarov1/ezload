import Button from 'components/button/button';
import AddressCard from 'components/cards/address-card/address-card';
import FileIcon from 'components/icons/file.icon';
import PlusIcon from 'components/icons/plus.icon';
import Spinner from 'components/loaders/spinner';
import Text from 'components/typography/text';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAddress } from 'server-state/queries/use-address';
import {
  NoAddressesFindSection,
  ProfileAddressesWrapper,
  ProfileAddressTopPartContainer,
  ProfileAddressWrapper,
} from './profile-address.styles';

const ProfileAddress = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useAddress();

  return (
    <ProfileAddressWrapper>
      <ProfileAddressTopPartContainer>
        <Text color="main_100">My addresses</Text>
        <Button
          startIcon={<PlusIcon />}
          buttonType="dark"
          onClick={() => navigate('/profile/create-address')}
        >
          <p>Add new</p>
        </Button>
      </ProfileAddressTopPartContainer>
      <ProfileAddressesWrapper>
        <Spinner
          loading={isLoading}
          loaderSize="40px"
          width="300px"
          height="300px"
        />
        {data?.pages &&
          data.pages.map((page, index) =>
            page.results.length > 0 ? (
              page?.results.map((address) => {
                return <AddressCard key={address.id} {...address} />;
              })
            ) : (
              <NoAddressesFindSection key={index}>
                <FileIcon size="150" />
                <Text>No Addresses</Text>
              </NoAddressesFindSection>
            )
          )}
      </ProfileAddressesWrapper>
    </ProfileAddressWrapper>
  );
};

export default ProfileAddress;
