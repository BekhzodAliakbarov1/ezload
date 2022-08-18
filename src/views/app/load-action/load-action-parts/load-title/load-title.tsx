import Input from 'components/input/input';
import Text from 'components/typography/text';
import { useData } from 'layouts/load-action-layout/load-action-layout.context';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { LoadTitleWrapper } from './load-title.styles';

const LoadTitle = () => {
  const { setValues, data } = useData();
  const { t } = useTranslation();

  return (
    <LoadTitleWrapper>
      <Text size="md" weight="700">
        {t('Load title')}
      </Text>
      <Input
        onChange={(e) => setValues({ ...data, load_title: e.target.value })}
        placeholder={t('Need to deliver metal')}
        value={data.load_title}
      />
    </LoadTitleWrapper>
  );
};

export default LoadTitle;
