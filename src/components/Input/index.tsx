import React from 'react';
import { FieldElement } from './styles';

import { InputProps } from './types';

export const Field = ({
  width,
  height,
  color,
  bgColor,
  border,
  borderColor,
  borderWidth,
  borderRadius,
  padding,
  marginTop,
  fontSize,
  fontWeight,
  fontFamily,
}: InputProps) => {
  return (
    <FieldElement 
      width={width}
      height={height}
      color={color}
      bgColor={bgColor}
      border={border}
      borderColor={borderColor}
      borderWidth={borderWidth}
      borderRadius={borderRadius}
      padding={padding}
      marginTop={marginTop}
      fontSize={fontSize}
      fontWeight={fontWeight}
      fontFamily={fontFamily}
    />
  );
}