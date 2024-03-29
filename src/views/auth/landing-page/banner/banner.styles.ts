import styled from 'styled-components';

export const BannerWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  @media (max-width: 800px) {
    padding: 0px 24px;
  }
`;

export const BackgrounImageWrapper = styled.img<{ position: 'left' | 'right' }>`
  position: absolute;
  z-index: 15;
  left: ${(props) => props.position === 'left' && 0};
  right: ${(props) => props.position === 'right' && 0};
  top: ${(props) => (props.position === 'right' ? '500px' : '600px')};
  @media (max-width: 800px) {
    display: none;
  } ;
`;
