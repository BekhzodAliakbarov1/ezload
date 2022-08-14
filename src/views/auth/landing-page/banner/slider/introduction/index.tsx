import RightArrow from 'components/icons/right-arrow.icon';
import { useTranslation } from 'react-i18next';
import {
  BoldText,
  CreateLoadBtn,
  IntroductionWrapper,
  Paragraph,
} from './introduction.styles';

const Introduction = () => {
  const { t } = useTranslation();
  return (
    <IntroductionWrapper>
      <BoldText color="main_100">{t('title')}</BoldText>
      <Paragraph>
        Internationally or regionally, simple process, simple delivery
      </Paragraph>
      <CreateLoadBtn endIcon={<RightArrow />}>Create Load</CreateLoadBtn>
    </IntroductionWrapper>
  );
};

export default Introduction;
