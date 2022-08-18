import { IconButton } from '@mui/material';
import styled from 'styled-components';

const SliderButton = styled(IconButton)<{ disabled?: boolean }>`
  border-radius: 0 !important;
  position: absolute;
  bottom: 213px;
  z-index: 10;
  padding: 0 !important;
  cursor: pointer;
  opacity: ${({ disabled }) => (disabled ? '0.7' : '1')};
  @media (max-width: 800px) {
    bottom: 56px;
  }
`;

export const NextButton = styled(SliderButton)`
  && {
    right: -45%;
    transform: translate(0%, 0%);
    @media (max-width: 900px) {
      right: -40%;
      width: 24px;
    }
    @media (max-width: 576px) {
      right: -38.5%;
    }
  }
`;

export const PrevButton = styled(SliderButton)`
  && {
    transform: rotate(180deg);
    right: 45%;

    @media (max-width: 900px) {
      right: 40%;
      width: 24px;
    }
    @media (max-width: 576px) {
      right: 38.5%;
    }
  }
`;

export const SwiperWrapper = styled.div`
  width: 100%;
  position: relative;
`;
