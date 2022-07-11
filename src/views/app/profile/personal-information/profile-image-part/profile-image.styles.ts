import styled from 'styled-components';

export const PersonalInformationAvatarWrapper = styled.div`
  min-width: 141px;
  min-height: 141px;
  border-radius: 50%;
  position: relative;
  transition: all 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.bg.main};
  .change_photo {
    cursor: pointer;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: -1;
    transform: translate(-50%, -50%);
  }
  :hover {
    .change_photo {
      z-index: 10;
    }
  }
`;
