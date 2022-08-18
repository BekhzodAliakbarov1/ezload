import React from 'react';
import styled from 'styled-components';
import lightLogo from 'assets/img/logo-light.svg';
import darkLogo from 'assets/img/logo-dark.png';
import { Portal } from '@mui/material';
import { useTheme } from 'global-state/theme/theme.state';

const ProgressWrapper = styled.div`
  position: absolute;
  z-index: 10;
  left: 0;
  top: 0;
  background-color: ${(props) => props.theme.bg.main};
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  div > img {
    animation-name: breathing;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    backface-visibility: hidden;
    -webkit-font-smoothing: antialiased;
    @keyframes breathing {
      0% {
        -webkit-transform: scale(0.9);
        -ms-transform: scale(0.9);
        transform: scale(0.9);
      }

      25% {
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
      }

      60% {
        -webkit-transform: scale(0.9);
        -ms-transform: scale(0.9);
        transform: scale(0.9);
      }

      100% {
        -webkit-transform: scale(0.9);
        -ms-transform: scale(0.9);
        transform: scale(0.9);
      }
    }
  }

  @media (max-width: 576px) {
    div > img {
      width: 300px;
    }
  }
`;

const LogoLoader: React.FC = () => {
  const { theme } = useTheme();

  return (
    <Portal>
      <ProgressWrapper>
        <div>
          <img
            src={theme === 'light' ? lightLogo : darkLogo}
            width="500px"
            alt="logo"
          />
        </div>
      </ProgressWrapper>
    </Portal>
  );
};

export default LogoLoader;
