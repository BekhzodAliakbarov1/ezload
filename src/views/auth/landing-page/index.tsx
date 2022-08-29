import LeftBox from 'assets/img/left-bg-image.png';
import RightBox from 'assets/img/right-bg-image.png';
import Footer from 'components/footer';
import Navbar from 'components/navbar/navbar';
import Container from 'wrappers/container/container';
import Banner from './banner';
import { BackgrounImageWrapper } from './banner/banner.styles';
import Coverage from './courage';
import DownloadApp from './download-app';
import HappyCustomers from './happy-cusomers';
import { LandingPageWrapper } from './landing-page.styles';
import TopDrivers from './top-drivers';

const LandingPage = () => {
  return (
    <LandingPageWrapper>
      <Navbar />
      <Container>
        <Banner />
      </Container>
      <BackgrounImageWrapper src={LeftBox} alt="left" position="left" />
      <BackgrounImageWrapper src={RightBox} alt="right" position="right" />
      <TopDrivers />
      <Coverage />
      <HappyCustomers />
      <DownloadApp />
      <Footer />
    </LandingPageWrapper>
  );
};

export default LandingPage;
