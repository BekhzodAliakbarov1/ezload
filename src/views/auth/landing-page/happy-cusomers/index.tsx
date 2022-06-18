import { CustomerImg, ProfileImg } from 'assets/svg';
import Button from 'components/button/button';
import Container from 'wrappers/container/container';
import { BoldText, StyledText, TextBox } from '../courage/courage.styles';
import { BigRectangle } from '../download-app/download-app.styles';
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

const HappyCustomers = () => {
  return (
    <>
      <HappyCusmrWrapper>
        <Container>
          <Rectangle />
          <TextBox>
            <BoldText weight="700">Happy Customers</BoldText>
            <StyledText weight="500">
              Our core value is customer satisfaction
            </StyledText>
          </TextBox>
          <FlexBox>
            <FirstBox>
              <UserReview
                location="Programmer, Andijan"
                name="Jasur"
                photo={ProfileImg}
                size="small"
                text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis "
              />
              <UserReview
                location="Programmer, Andijan"
                name="Jasur"
                photo={ProfileImg}
                size="small"
                text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis "
              />
            </FirstBox>
            <SecondBox>
              <img width="100%" src={CustomerImg} alt="happy-customer" />
              <UserReview
                location="Programmer, Andijan"
                name="Jasur"
                photo={ProfileImg}
                size="large"
                text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis "
              />
            </SecondBox>
            <ThirdBox>
              <UserReview
                location="Programmer, Andijan"
                name="Jasur"
                photo={ProfileImg}
                size="small"
                text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis "
              />
              <UserReview
                location="Programmer, Andijan"
                name="Jasur"
                photo={ProfileImg}
                size="small"
                text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis "
              />
            </ThirdBox>
          </FlexBox>
          <Center style={{ marginBottom: '300px' }}>
            <Button>READ ALL REVIEWS</Button>
          </Center>
        </Container>
      </HappyCusmrWrapper>
    </>
  );
};

export default HappyCustomers;
