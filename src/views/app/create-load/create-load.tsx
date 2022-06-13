import Text from 'components/typography/text';
import React from 'react';
import LoadAddress from './create-load-parts/load-address/load-address';
import LoadTitle from './create-load-parts/load-title/load-title';
import { CreateLoadWrapper } from './create-load.styles';

const CreateLoad = () => {
  return (
    <CreateLoadWrapper>
      <Text weight="700">Create new load</Text>
      <LoadTitle />
      <LoadAddress />
    </CreateLoadWrapper>
  );
};

export default CreateLoad;
