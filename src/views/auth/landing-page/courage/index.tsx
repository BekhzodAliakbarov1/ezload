import { CoverageMapImg } from 'assets/svg';
import { useTranslation } from 'react-i18next';
import {
  BoldText,
  CoverageWrappper,
  StyledText,
  TextBox,
  Image,
  ImageWrapper,
} from './courage.styles';
// import rectangle from 'assets/img/rectangle.png';

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
      <Image />
      {/* <ImageWrapper src={rectangle} /> */}
    </CoverageWrappper>
  );
};

export default Coverage;
