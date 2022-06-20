import React from 'react';
import { ProfileImg } from 'assets/svg';
import {
  LoadCardButtonWrapper,
  LoadCardDataWrapper,
  LoadCreatorWrapper,
} from './load-creator.styles';
import Avatar from 'components/avatar';
import Text from 'components/typography/text';
import Button from 'components/button/button';

const LoadCreator: React.FC<{
  loadType: 'NEW' | 'BIDDED' | 'ON_THE_WAY';
}> = ({ loadType }) => {
  return (
    <>
      <LoadCreatorWrapper>
        <Avatar sizes="96px" src={ProfileImg} />
        <LoadCardDataWrapper>
          <Text>Load owner</Text>
          <Text weight="600">Asror Namozov</Text>
          <Text weight="600">+99894 555 66 66</Text>
        </LoadCardDataWrapper>
      </LoadCreatorWrapper>
      {loadType === 'ON_THE_WAY' && (
        <LoadCardButtonWrapper>
          <Button>Delivered the load</Button>
          <Button buttonType="warning">Cancel this load</Button>
        </LoadCardButtonWrapper>
      )}
    </>
  );
};

export default LoadCreator;
