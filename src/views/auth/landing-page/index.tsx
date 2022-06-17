import { LeftBox, RightBox } from 'assets/svg';
import Navbar from 'components/navbar/navbar';
import Container from 'wrappers/container/container';
import Banner from './banner';
import { BackgrounImageWrapper } from './banner/banner.styles';
import { LandingPageWrapper } from './landing-page.styles';
import TopDrivers from './top-drivers';

const LandingPage = () => {
  return (
    <LandingPageWrapper>
      <Navbar />
      <Container>
        <Banner />
      </Container>
      <BackgrounImageWrapper src={LeftBox} alt="1212" position="left" />
      <BackgrounImageWrapper src={RightBox} alt="1212" position="right" />
      <TopDrivers />
    </LandingPageWrapper>
  );
};

export default LandingPage;
