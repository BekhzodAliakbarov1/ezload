import AppStoreImg from 'assets/img/app-store.png';
import { useTranslation } from 'react-i18next';
import Container from 'wrappers/container/container';
import PhoneImg from 'assets/img/phone.png';
import QrCodeImg from 'assets/img/qrcode.png';
import GooglePlayImg from 'assets/img/google-play.png';
import {
  BigRectangle,
  BoldText,
  DownloadAppWrap,
  FlexWrap,
  Image,
  ImagesWrapper,
  SmallImagesWrappaer,
  StyledText,
  TextWrapper,
} from './download-app.styles';

const DownloadApp = () => {
  const { t } = useTranslation();
  return (
    <>
      <Container style={{ position: 'relative' }}>
        <BigRectangle />
      </Container>
      <DownloadAppWrap>
        <Image src={PhoneImg} alt="download-app" />
        <FlexWrap>
          <TextWrapper>
            <BoldText weight="700">{t('Download and try app')}</BoldText>
            <StyledText weight="500">
              {t('Type Ezload Cargo on search')}{' '}
            </StyledText>
          </TextWrapper>
          <ImagesWrapper>
            <img src={QrCodeImg} height={93} alt="qr-code" />
            <SmallImagesWrappaer>
              <img src={GooglePlayImg} height={41} alt="qr-code" />
              <img src={AppStoreImg} height={41} alt="qr-code" />
            </SmallImagesWrappaer>
          </ImagesWrapper>
        </FlexWrap>
      </DownloadAppWrap>
    </>
  );
};

export default DownloadApp;
