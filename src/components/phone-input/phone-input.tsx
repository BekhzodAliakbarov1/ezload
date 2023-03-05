import React, { useState } from 'react';
import {
  CountryFlagImage,
  CountryFlagWrapper,
  PhoneInputWrapper,
  StyledSelect,
} from './phone-input.styles';
import MenuItem from '@mui/material/MenuItem';
import ChevronDownIcon from 'components/icons/chevron-down.icon';
import countries from 'data/countries.json';
import Text from 'components/typography/text';

const PhoneInput: React.FC<{
  value: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setValue: ({ code, value }: { code: string; value: string }) => void;
}> = ({ children, value, setValue }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleClick = () => {
    setIsDropdownOpen((val) => !val);
  };

  return (
    <PhoneInputWrapper>
      <StyledSelect
        value={value}
        onChange={(_, a: any) => {
          setValue({ code: a.props.value, value: a.props.title });
        }}
        open={isDropdownOpen}
        onClick={handleClick}
        IconComponent={() => <ChevronDownIcon onClick={handleClick} />}
        MenuProps={{
          PaperProps: {
            sx: {
              width: '170px',
              maxHeight: '277px',
              marginLeft: '13px',
              '::-webkit-scrollbar': {
                display: 'none',
              },
            },
          },
        }}
      >
        {countries.map(({ code, dial_code, name, image }) => {
          return (
            <MenuItem
              key={name}
              title={code}
              value={dial_code}
              style={{ display: 'flex' }}
            >
              <CountryFlagWrapper>
                <CountryFlagImage
                  style={{ backgroundImage: `url(${image})` }}
                />
              </CountryFlagWrapper>
              <Text size="md" weight="600">
                {code} ({dial_code})
              </Text>
            </MenuItem>
          );
        })}
      </StyledSelect>
      {children}
    </PhoneInputWrapper>
  );
};

export default PhoneInput;
