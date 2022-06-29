import React, { useState, useEffect } from 'react';
import {
  NamePhoneNumberWrapper,
  PersonalInformationTopPartWrapper,
  PersonalInformationWrapper,
} from './personal-information.styles';
import EditableFiled from 'components/editable-field-component/editable-field';
import TruckInfo from './truck-part';
import { useDriver } from 'hooks/use-driver';
import { useProfile } from 'server-state/queries/use-profile';
import { useUpdateProfile } from 'server-state/mutations/use-update-profile';
import ProfileImagePart from './profile-image-part';
import { useUpload } from 'server-state/mutations/use-upload';
const PersonalInformation = () => {
  const { data } = useProfile();
  const updateProfileRequest = useUpdateProfile();
  const uploadImageRequest = useUpload();
  const [profileInfo, setProfileInfo] = useState<{
    name: string;
    phone: string;
    profile_picture: string;
  }>({ name: '', phone: '', profile_picture: '' });
  const { isDriver } = useDriver();

  useEffect(() => {
    if (data?.first_name && data.phone_number) {
      setProfileInfo({
        name: data.first_name,
        phone: data.phone_number,
        profile_picture: data.profile_picture.file,
      });
    }
  }, [data]);

  const handleNameSubmit = (value: string) => {
    setProfileInfo((info) => {
      return { ...info, name: value };
    });
    updateProfileRequest.mutate(
      { first_name: value },
      {
        onSuccess(res) {
          console.log(res);
        },
      }
    );
  };

  const handlePhoneSubmit = (value: string) => {
    setProfileInfo((info) => {
      return { ...info, phone: value };
    });
  };

  const handleImageUpload = (val: Blob | File) => {
    if (val) {
      uploadImageRequest.mutate(
        { file: val },
        {
          onSuccess(res) {
            setProfileInfo((info) => {
              return { ...info, profile_picture: res.file };
            });
            updateProfileRequest.mutate({ profile_picture: res.id });
          },
        }
      );
    }
  };

  return (
    <PersonalInformationWrapper>
      <PersonalInformationTopPartWrapper>
        <ProfileImagePart
          img={profileInfo.profile_picture}
          onSubmit={handleImageUpload}
          isLoading={uploadImageRequest.isLoading}
        />
        <NamePhoneNumberWrapper>
          {profileInfo.name && (
            <EditableFiled
              inputType="text"
              label="Your name"
              value={profileInfo.name}
              placeholder="Enter name"
              onSubmit={handleNameSubmit}
              // it will correct when connect to api
              isLoading={false}
            />
          )}
          {profileInfo.phone && (
            <EditableFiled
              inputType="number"
              label="Your phone number"
              value={profileInfo.phone}
              placeholder="Enter phone number"
              onSubmit={handlePhoneSubmit}
              // it will correct when connect to api
              isLoading={false}
            />
          )}
        </NamePhoneNumberWrapper>
      </PersonalInformationTopPartWrapper>
      {isDriver && (
        <TruckInfo
          car_capacity="2000 tonnes"
          car_model="Man"
          car_number="01  T 533 UU"
        />
      )}
    </PersonalInformationWrapper>
  );
};

export default PersonalInformation;
