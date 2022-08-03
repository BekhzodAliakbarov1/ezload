import React, { useState, useEffect } from 'react';
import {
  NamePhoneNumberWrapper,
  PersonalInformationTopPartWrapper,
  PersonalInformationWrapper,
} from './personal-information.styles';
import EditableFiled from 'components/editable-field-component/editable-field';
import TruckInfo from './truck-part';
import { useProfile } from 'server-state/queries/use-profile';
import { useUpdateCustomerProfile } from 'server-state/mutations/use-update-profile';
import ProfileImagePart from './profile-image-part';
import { useUpload } from 'server-state/mutations/use-upload';
const PersonalInformation = () => {
  const { data } = useProfile();
  const updateProfileRequest = useUpdateCustomerProfile();
  const uploadImageRequest = useUpload();
  const [profileInfo, setProfileInfo] = useState<{
    name: string;
    phone: string;
    profile_picture?: string;
    vehicle?: {
      title?: string;
      licence_plate?: string;
      capacity?: string;
    };
  }>({ name: '', phone: '', profile_picture: '' });

  useEffect(() => {
    if (data?.first_name && data.phone_number) {
      setProfileInfo({
        name: data.first_name,
        phone: data.phone_number,
        profile_picture: data.profile_picture?.file,
        vehicle: {
          capacity: data.vehicle?.capacity,
          licence_plate: data.vehicle?.licence_plate,
          title: data.vehicle?.title,
        },
      });
    }
  }, [data]);

  const handleNameSubmit = (value: string) => {
    setProfileInfo((info) => {
      return { ...info, name: value };
    });
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
            />
          )}
          {profileInfo.phone && (
            <EditableFiled
              inputType="number"
              label="Your phone number"
              value={profileInfo.phone}
              placeholder="Enter phone number"
              onSubmit={handlePhoneSubmit}
            />
          )}
        </NamePhoneNumberWrapper>
      </PersonalInformationTopPartWrapper>
      {profileInfo.vehicle?.title && (
        <TruckInfo
          car_capacity={profileInfo.vehicle?.capacity}
          car_model={profileInfo.vehicle?.title}
          car_number={profileInfo.vehicle?.licence_plate}
        />
      )}
    </PersonalInformationWrapper>
  );
};

export default PersonalInformation;
