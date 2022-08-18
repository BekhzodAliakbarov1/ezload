import styled from 'styled-components';

export const SliderWrapper = styled.div`
  width: 100%;
`;

export const SliderContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  /* margin-bottom: 350px; */
`;

export const Image = styled.img`
  width: 100%;
  height: 416px;
  object-fit: cover;
  @media (max-width: 800px) {
    height: 224px;
  }
`;
