import { CoverageMapImg } from 'assets/svg';
import { useTranslation } from 'react-i18next';
import {
  BoldText,
  CoverageWrappper,
  StyledText,
  TextBox,
  Image,
} from './courage.styles';

const Coverage = () => {
  const { t } = useTranslation();
  return (
    <CoverageWrappper>
      <TextBox>
        <BoldText color="main_100" weight="700">
          {t('Ezload coverage')}
        </BoldText>
        <StyledText weight="500">{t('We are growing fast')}</StyledText>
      </TextBox>
      <Image src={CoverageMapImg} alt="map" />
    </CoverageWrappper>
  );
};

export default Coverage;
