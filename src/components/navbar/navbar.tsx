import { useRef } from 'react';
import {
  NavbarWrapper,
  NavbarPositionEffectEraiser,
  NabarBox,
} from './navbar-shared.styles';
import { useAuth } from 'global-state/auth/auth.state';
import NavbarUnAuth from './nav-types/nav-unauth';
import NavbarAuth from './nav-types/nav-outh';

const Navbar = () => {
  const { tokens } = useAuth();
  const headerRef = useRef<HTMLDivElement>(null);
  let prevScrollpos = window.pageYOffset;
  window.onscroll = () => {
    if (headerRef.current) {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos || currentScrollPos < 1) {
        headerRef.current.style.top = '0';
      } else {
        headerRef.current.style.top = '-100px';
      }
      prevScrollpos = currentScrollPos;
    }
  };

  return (
    <>
      <NabarBox ref={headerRef}>
        <NavbarWrapper>
          {tokens.access ? <NavbarAuth /> : <NavbarUnAuth />}
        </NavbarWrapper>
      </NabarBox>

      <NavbarPositionEffectEraiser />
    </>
  );
};
export default Navbar;
