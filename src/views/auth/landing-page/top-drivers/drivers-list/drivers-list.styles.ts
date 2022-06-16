import Button from 'components/button/button';
import styled from 'styled-components';
import { colors } from 'styles/variables';
import Container from 'wrappers/container/container';

export const CreatorListWrapper = styled.div`
  width: 100%;
  background: ${colors.dark_90};
`;

export const SliderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: 88px auto 72px auto;
`;

export const StyledContainer = styled(Container)`
  .timeline-icon {
    margin: 0 16px;
    color: transparent;
    margin: 0 16px;
    font-size: 2px;
    padding: 0 4.25px;
    border-radius: 50%;
    cursor: pointer;
    background: ${colors.green_20};
  }

  .timeline-icon-active {
    background: ${colors.green_50};
  }
`;

export const ViewButton = styled(Button)`
  margin: 72px auto 88px auto !important;
  width: 234px;
  font-size: 14px !important;
  align-items: center !important;
  line-height: 18px !important;
  letter-spacing: 0.25px !important;
  padding: auto;
  text-transform: uppercase;
`;
