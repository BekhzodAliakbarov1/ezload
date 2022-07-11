import { CoverageMapImg } from 'assets/svg';
import {
  BoldText,
  CoverageWrappper,
  StyledText,
  TextBox,
  Image,
} from './courage.styles';

const Coverage = () => {
  return (
    <CoverageWrappper>
      <TextBox>
        <BoldText color="main_100" weight="700">
          Ezload coverage
        </BoldText>
        <StyledText weight="500">We are growing fast</StyledText>
      </TextBox>
      <Image src={CoverageMapImg} alt="map" />
    </CoverageWrappper>
  );
};

export default Coverage;
