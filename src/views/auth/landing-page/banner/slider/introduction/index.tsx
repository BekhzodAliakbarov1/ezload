import RightArrow from 'components/icons/right-arrow.icon';
import {
  BoldText,
  CreateLoadBtn,
  IntroductionWrapper,
  Paragraph,
} from './introduction.styles';

const Introduction = () => {
  return (
    <IntroductionWrapper>
      <BoldText color="main_100">Sending cargo is now easy</BoldText>
      <Paragraph>
        Internationally or regionally, simple process, simple delivery
      </Paragraph>
      <CreateLoadBtn endIcon={<RightArrow />}>Create Load</CreateLoadBtn>
    </IntroductionWrapper>
  );
};

export default Introduction;
