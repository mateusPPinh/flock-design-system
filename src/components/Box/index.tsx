import React from 'react';

import {Container} from './styles';
import { BoxProps } from './types';

export const Box = ({
  children,
  className,
  style,
  width,
  height,
  maxWidth,
  maxHeight,
  minWidth,
  minHeight,
  backgroundColor,
  borderRadius,
  borderWidth,
  alignContent,
  alignItems,
  alignSelf,
  flex,
  flexDirection,
  flexWrap,
  justifyContent,
  order,
}: BoxProps) => {
  return (
    <Container
      className={className}
      style={style}
      width={width}
      height={height}
      maxWidth={maxWidth}
      maxHeight={maxHeight}
      minWidth={minWidth}
      minHeight={minHeight}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      borderWidth={borderWidth}
      alignContent={alignContent}
      alignItems={alignItems}
      alignSelf={alignSelf}
      flex={flex}
      flexDirection={flexDirection}
      flexWrap={flexWrap}
      justifyContent={justifyContent}
      order={order}
    >
      {children}
    </Container>
  );
};