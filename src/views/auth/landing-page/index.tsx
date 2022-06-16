import { LeftBox, RightBox } from 'assets/svg';
import Container from 'wrappers/container/container';
import Banner from './banner';
import { BackgrounImageWrapper } from './banner/banner.styles';
import TopCreators from './top-creators';

const LandingPage = () => {
  return (
    <>
      <Container>
        <Banner />
      </Container>
      <BackgrounImageWrapper src={LeftBox} alt="1212" position="left" />
      <BackgrounImageWrapper src={RightBox} alt="1212" position="right" />
      <TopCreators />
    </>
  );
};

export default LandingPage;
