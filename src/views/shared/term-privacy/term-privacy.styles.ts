import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;
  height: 100%;
  flex: 1 1 auto;
  background-color: ${(props) => props.theme.bg.main};
`;
export const TermAndPolicyWrapper = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.bg.secondary};
  margin-bottom: 74px;
  margin-top: 40px;
  padding: 48px;
  display: flex;
  /* gap: 129px; */
  @media (max-width: 900px) {
    gap: 50px;
  }
  @media (max-width: 800px) {
    flex-direction: column;
  }
  @media (max-width: 600px) {
    padding: 24px;
    margin-top: 0px;
  }
`;

export const InformationTextBox = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  border-left: 2px solid ${(props) => props.theme.text.main_5};
  padding-left: 48px;
  max-width: 50%;
  h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: ${(props) => props.theme.text.main_100};
    margin-bottom: 32px;
    text-align: left;
  }
  h3 {
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.15px;
    color: ${(props) => props.theme.text.main_100};
    margin-bottom: 32px;
    text-align: left;
  }
  p ~ h3 {
    margin-top: 64px;
  }
  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.15px;
    color: ${(props) => props.theme.text.main_100};
    margin-bottom: 24px;
    text-align: left;
  }
  @media (max-width: 900px) {
    max-width: 90%;
  }
  @media (max-width: 800px) {
    max-width: 100%;
    border-left: none;
    padding-left: 0px;
  }
  @media (max-width: 600px) {
    h1 {
      font-size: 20px;
      line-height: 23px;
      margin-bottom: 24px;
    }
    h3 {
      font-size: 18px;
      line-height: 20px;
      margin-bottom: 24px;
    }
    p ~ h3 {
      margin-top: 34px;
    }
    p {
      font-size: 14px;
      line-height: 28px;
      margin-bottom: 18px;
    }
  }
`;
