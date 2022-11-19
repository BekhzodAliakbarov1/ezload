import FileIcon from 'components/icons/file.icon';
import Text from 'components/typography/text';
import React from 'react';
import { NoItemsComponentWrapper } from './no-item.styles';

const NoItemComponent: React.FC<{ text: string; iconSize?: number }> = ({
  text,
  iconSize = 100,
}) => {
  return (
    <NoItemsComponentWrapper>
      <FileIcon size={iconSize} />
      <Text>{text}</Text>
    </NoItemsComponentWrapper>
  );
};

export default NoItemComponent;
