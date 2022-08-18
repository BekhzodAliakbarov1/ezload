import { Drawer, IconButton } from '@mui/material';
import FilterIcon from 'components/icons/filter.icon';
import MenuCloseIcon from 'components/icons/menu-close.icon';
import Text from 'components/typography/text';
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  FilterMobileDrawerContainer,
  FilterMobileNavbar,
  SearchFilterWrapper,
  StyledCloseButton,
} from './filter-page-component.styles';

const FilterPageComponent: React.FC<{
  closeDrawer: () => void;
  openDrawer: () => void;
  isOpen: boolean;
}> = ({ children, closeDrawer, isOpen, openDrawer }) => {
  const { t } = useTranslation();
  return (
    <>
      <FilterMobileNavbar onClick={openDrawer}>
        <IconButton>
          <FilterIcon />
        </IconButton>
        <Text>{t('Filters')}</Text>
      </FilterMobileNavbar>
      <SearchFilterWrapper>
        <Text weight="700">{t('Filters')}</Text>
        {children}
      </SearchFilterWrapper>
      <Drawer
        style={{
          zIndex: 5,
        }}
        sx={{
          '.MuiDrawer-root': {
            zIndex: '5',
          },
        }}
        anchor="left"
        open={isOpen}
        onClose={closeDrawer}
      >
        <FilterMobileDrawerContainer>
          <StyledCloseButton onClick={closeDrawer}>
            <MenuCloseIcon />
          </StyledCloseButton>
          <Text weight="700">{t('Filters')}</Text>
          {children}
        </FilterMobileDrawerContainer>
      </Drawer>
    </>
  );
};

export default FilterPageComponent;
