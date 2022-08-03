import Avatar from 'components/avatar';
import React from 'react';
import { PersonalInformationAvatarWrapper } from './profile-image.styles';
import Tooltip from '@mui/material/Tooltip';
import GaleryIcon from 'components/icons/galery.icon';
import FileInput from 'components/input/file-input';
import Spinner from 'components/loaders/spinner';

const ProfileImagePart: React.FC<{
  img?: string;
  onSubmit: (val: Blob | File) => void;
  isLoading: boolean;
}> = ({ img, onSubmit, isLoading }) => {
  return (
    <PersonalInformationAvatarWrapper>
      {isLoading ? (
        <Spinner loaderSize={22} loading height={20} />
      ) : (
        <>
          <Avatar sizes="141px" src={img} />
          <Tooltip className="change_photo" title="Change Photo">
            <label htmlFor="profile_photo">
              <GaleryIcon size="40" />
              <FileInput
                onChange={(e) => e.target.files && onSubmit(e.target.files[0])}
                id="profile_photo"
                accept="image/*"
              />
            </label>
          </Tooltip>
        </>
      )}
    </PersonalInformationAvatarWrapper>
  );
};

export default ProfileImagePart;
