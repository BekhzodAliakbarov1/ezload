import Input from 'components/input/input';
import Text from 'components/typography/text';
import React from 'react';
import { LoadTitleWrapper } from './load-title.styles';

const LoadTitle = () => {
  return (
    <LoadTitleWrapper>
      <Text size="md" weight="700">
        Load title
      </Text>
      <Input placeholder="Need to deliver metal" />
    </LoadTitleWrapper>
  );
};

export default LoadTitle;
