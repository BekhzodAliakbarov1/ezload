import Button from 'components/button/button';
import Container from 'wrappers/container/container';
import { BoldText, StyledText, TextBox } from '../courage/courage.styles';
import {
  Center,
  FirstBox,
  FlexBox,
  HappyCusmrWrapper,
  Rectangle,
  SecondBox,
  ThirdBox,
} from './happy-customers.styles';
import UserReview from './user-review';
import customerImage from 'assets/img/customer-image.png';
import profileImage from 'assets/img/profile.png';
import { useTranslation } from 'react-i18next';

const HappyCustomers = () => {
  const { t } = useTranslation();
  return (
    <>
      <HappyCusmrWrapper>
        <Container>
          <Rectangle />
          <TextBox>
            <BoldText weight="700">{t('Happy Customers')}</BoldText>
            <StyledText weight="500">
              {t('Our core value is customer satisfaction')}
            </StyledText>
          </TextBox>
          <FlexBox>
            <FirstBox>
              <UserReview
                location="Programmer, Andijan"
                name="Jasur"
                photo={profileImage}
                size="small"
                text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis "
              />
              <UserReview
                location="Programmer, Andijan"
                name="Jasur"
                photo={profileImage}
                size="small"
                text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis "
              />
            </FirstBox>
            <SecondBox>
              <img width="100%" src={customerImage} alt="happy-customer" />
              <UserReview
                location="Programmer, Andijan"
                name="Jasur"
                photo={profileImage}
                size="large"
                text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis "
              />
            </SecondBox>
            <ThirdBox>
              <UserReview
                location="Programmer, Andijan"
                name="Jasur"
                photo={profileImage}
                size="small"
                text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis "
              />
              <UserReview
                location="Programmer, Andijan"
                name="Jasur"
                photo={profileImage}
                size="small"
                text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis "
              />
            </ThirdBox>
          </FlexBox>
          <Center style={{ marginBottom: '300px' }}>
            <Button>{t('READ ALL REVIEWS')}</Button>
          </Center>
        </Container>
      </HappyCusmrWrapper>
    </>
  );
};

export default HappyCustomers;
