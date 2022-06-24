import styled from 'styled-components';
import { colors } from 'styles/variables';

export const ReviewCardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  span {
    display: flex;
    gap: 12px;
  }
  p {
    margin: 16px 0px;
    text-align: left;
    font-size: 16px;
    line-height: 29px;

    letter-spacing: 0.15px;

    /* 3/Ezload Dark 90% */
  }
  h2 {
    font-weight: 700;
    font-size: 14px;
    line-height: 27px;
    color: ${(props) => props.theme.text.main_70};
    margin-bottom: 4px;
  }
  h4 {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.25px;
    color: ${(props) => props.theme.text.main_60};
  }
`;
