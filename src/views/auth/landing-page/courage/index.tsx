import { useTranslation } from 'react-i18next';
import {
  BoldText,
  CoverageWrappper,
  StyledText,
  TextBox,
  Image,
  // ImageWrapper,
} from './courage.styles';
import light_image from 'assets/img/earth.png';
import dark_image from 'assets/img/earth-dark.png';
import { useTheme } from 'global-state/theme/theme.state';

const Coverage = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  return (
    <CoverageWrappper>
      <TextBox>
        <BoldText color="main_100" weight="700">
          {t('Ezload coverage')}
        </BoldText>
        <StyledText weight="500">{t('We are growing fast')}</StyledText>
      </TextBox>
      <Image img={theme === 'dark' ? dark_image : light_image} />
    </CoverageWrappper>
  );
};

export default Coverage;
