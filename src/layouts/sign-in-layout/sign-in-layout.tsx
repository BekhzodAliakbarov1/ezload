import image from 'assets/img/login-bg-image.jpg';
import logo from 'assets/img/logo-white.png';
import styled from 'styled-components';
import SignIn from 'views/auth/sign-in';
import { useNavigate } from 'react-router';
import { IconButton, Menu } from '@mui/material';
import { useMenu } from 'hooks/use-menu';
import i18n from 'i18n';
import { colors } from 'styles/variables';
import Text from 'components/typography/text';
import ChevronDownIcon from 'components/icons/chevron-down.icon';

export const SignInLayoutWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: ${(props) => props.theme.bg.main};
`;

export const SignInImageWrapper = styled.div`
  width: 50%;
  height: 100vh;
  max-width: 705px;
  background-repeat: no-repeat;
  background-position-x: -25px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  img {
    cursor: pointer;
    margin-top: 32px;
    margin-left: 75px;
  }
  @media (max-width: 800px) {
    display: none;
  }
`;

export const LanguageWrapper = styled.div`
  position: absolute;
  top: 30px;
  right: 50px;
  .language {
    text-transform: capitalize;
  }
`;

export const StyledtText = styled.p`
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.5px;

  color: ${(props) => props.theme.text.main_70};
  text-align: left;
  padding: 12px 0px;
  padding-left: 16px;
  cursor: pointer;

  :hover {
    background-color: ${colors.green_20};
  }
`;

const SignInLayout = () => {
  // const [type, setType] = useState<'customer' | 'driver' | ''>('');
  const navigate = useNavigate();
  const language = useMenu();

  const languageClickHandler = ({
    lng,
  }: {
    lng: 'uz' | 'ru' | 'en' | 'tr';
  }) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
    language.handleClose();
  };

  // const handleChangeUserType = (val: 'customer' | 'driver' | '') => {
  //   setType(val);
  // };
  return (
    <SignInLayoutWrapper>
      <SignInImageWrapper style={{ backgroundImage: `url(${image})` }}>
        <img onClick={() => navigate(-1)} src={logo} alt="Logo" />
      </SignInImageWrapper>
      <SignIn />
      <LanguageWrapper>
        <IconButton
          disableFocusRipple
          disableRipple
          onClick={language.handleClick}
        >
          <Text className="language" size="md" weight="600">
            {i18n.language}
          </Text>
          <ChevronDownIcon size="20" />
        </IconButton>
        <Menu
          sx={{
            '& .MuiPaper-root': {
              width: '100px',
              // left: '-100px !important',
            },
          }}
          id="basic-menu"
          anchorEl={language.element}
          open={language.isMenuOpen}
          onClose={language.handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <StyledtText onClick={() => languageClickHandler({ lng: 'en' })}>
            En
          </StyledtText>
          <StyledtText onClick={() => languageClickHandler({ lng: 'uz' })}>
            Uz
          </StyledtText>
          <StyledtText onClick={() => languageClickHandler({ lng: 'ru' })}>
            Ru
          </StyledtText>
          <StyledtText onClick={() => languageClickHandler({ lng: 'tr' })}>
            Tr
          </StyledtText>
        </Menu>
      </LanguageWrapper>
    </SignInLayoutWrapper>
  );
};

export default SignInLayout;
