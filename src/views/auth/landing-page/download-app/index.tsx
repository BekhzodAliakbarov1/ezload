import { AppStoreImg, GooglePlayImg, PhoneImg, QrCodeImg } from 'assets/svg';
import Container from 'wrappers/container/container';
import { BoldText, StyledText } from '../courage/courage.styles';
import {
  BigRectangle,
  Column,
  DownloadAppWrap,
  FlexWrap,
  Image,
  Row,
} from './download-app.styles';

const DownloadApp = () => {
  return (
    <>
      <Container style={{ position: 'relative' }}>
        <BigRectangle />
      </Container>
      <DownloadAppWrap>
        <Image src={PhoneImg} alt="download-app" />
        <FlexWrap>
          <Column style={{ gap: '40px' }}>
            <Column>
              <BoldText weight="700">Download and try app</BoldText>
              <StyledText weight="500">Type Ezload Cargo on search </StyledText>
            </Column>
            <Row>
              <img src={QrCodeImg} height={93} alt="qr-code" />
              <Column style={{ gap: '10px' }}>
                <img src={GooglePlayImg} height={41} alt="qr-code" />
                <img src={AppStoreImg} height={41} alt="qr-code" />
              </Column>
            </Row>
          </Column>
        </FlexWrap>
      </DownloadAppWrap>
    </>
  );
};

export default DownloadApp;
