import Text from 'components/typography/text';
import React from 'react';
import LoadAddress from './create-load-parts/load-address/load-address';
import LoadTitle from './create-load-parts/load-title/load-title';
import { CreateLoadWrapper } from './create-load.styles';
import LoadDistination from './create-load-parts/load-distination/load-distinetion';
import LoadDateTime from './create-load-parts/load-date-time/load-date-time';
import LoadExtraInformation from './create-load-parts/load-extra-information/load-extra-information';
import LoadButtons from './create-load-parts/load-buttons/load-buttons';

const CreateLoad = () => {
  return (
    <CreateLoadWrapper>
      <Text weight="700">Create new load</Text>
      <LoadTitle />
      <LoadAddress />
      <LoadDistination />
      <LoadDateTime />
      <LoadExtraInformation />
      <LoadButtons />
    </CreateLoadWrapper>
  );
};

export default CreateLoad;
