import { RightIcon } from 'components/icons/right.icon';
import { colors } from 'styles/variables';
import {
  BolderText,
  Description,
  NextButton,
  PrevButton,
  SliderNavWrapper,
  TextWrapper,
} from './slider-nav.styles';

interface NavigationProps {
  prevClass: string;
  nextClass: string;
  isEnd: boolean;
  isStart: boolean;
}

const SliderNav = ({
  isEnd,
  isStart,
  nextClass,
  prevClass,
}: NavigationProps) => {
  return (
    <SliderNavWrapper>
      <PrevButton className={prevClass} disabled={isStart} variant="text">
        <RightIcon
          style={{ transform: 'rotate(180deg)' }}
          fill={!isStart ? `${colors.dark_90}` : `${colors.dark_60}`}
        />
      </PrevButton>
      <TextWrapper>
        <BolderText weight="700">Top Drivers</BolderText>
        <Description>Find your driver for long term contracts</Description>
      </TextWrapper>
      <NextButton className={nextClass} disabled={isEnd} variant="text">
        <RightIcon fill={!isEnd ? `${colors.dark_90}` : `${colors.dark_60}`} />
      </NextButton>
    </SliderNavWrapper>
  );
};

export default SliderNav;
