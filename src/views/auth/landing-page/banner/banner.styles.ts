import styled from 'styled-components';

export const BannerWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const BackgrounImageWrapper = styled.img<{ position: 'left' | 'right' }>`
  position: absolute;
  z-index: 15;
  left: ${(props) => props.position === 'left' && 0};
  right: ${(props) => props.position === 'right' && 0};
  top: ${(props) => (props.position === 'right' ? '500px' : '600px')};
  @media (max-width: 576px) {
    width: 100px;
    top: ${(props) => (props.position === 'right' ? '640px' : '700px')};
  } ;
`;
