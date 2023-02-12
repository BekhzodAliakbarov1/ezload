import styled from 'styled-components';

export const ProfileNotificationsWrapper = styled.div`
  width: 100%;
  padding: 0px 43px 43px 48px;
  button {
    margin-top: 50px;
  }
  @media (max-width: 800px) {
    padding: 30px 24px;
  }
`;

export const ProfileNotificationsTopPartContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 46px;
  > p {
    font-size: 24px;
    line-height: 24px;
    color: ${(props) => props.theme.text.main_100};
  }
  > h4 {
    font-size: 16px;
    cursor: pointer;
    color: ${(props) => props.theme.colors.secondary};
    font-weight: 400;
    :hover {
      text-decoration: underline;
    }
  }
  @media (max-width: 800px) {
    margin-bottom: 30px;
    p {
      font-size: 20px;
    }
    h4 {
      font-size: 14px;
    }
  }
`;

export const NotificationsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const SingleNotification = styled.div`
  width: 100%;
  padding: 32px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e2e2e2;
  cursor: pointer;
  :hover {
    background-color: ${(props) => props.theme.bg.main};
  }
  > p {
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.15px;
  }
  @media (max-width: 800px) {
    padding: 24px 0px;
    > p {
      font-size: 10px;
    }
  }
`;

export const NotificationRightContent = styled.div<{ is_viewed: boolean }>`
  width: fit-content;
  display: flex;
  align-items: center;
  p {
    text-align: left;
    font-weight: ${(props) => (props.is_viewed ? 500 : 600)};
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.15px;
    color: ${(props) =>
      props.is_viewed ? '#6B7C82' : props.theme.text.main_100};
  }
  @media (max-width: 800px) {
    p {
      font-size: 12px;
    }
  }
`;

export const NewNotificationCircle = styled.div<{ is_viewed: boolean }>`
  display: ${(props) => (props.is_viewed ? 'none' : 'static')};
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #ea694d;
  margin-right: 32px;
  @media (max-width: 800px) {
    width: 8px;
    height: 8px;
    margin-right: 20px;
  }
`;
