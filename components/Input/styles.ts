import styled from 'styled-components';

import { InputProps } from './types';

const FieldElement = styled.input<InputProps>`
  width: ${({width}) => {
    if (width) {
      return `${width}px;`;
    }
  }};

  height: ${({height}) => {
    if (height) {
      return `${height}px;`;
    }
  }};

  color: ${({color}) => {
    if (color) {
      return color;
    }
  }};

  margin-top: ${({marginTop}) => {
    if (marginTop) {
      return `${marginTop}px;`;
    }
  }};

  border-radius: ${({borderRadius}) => {
    if (borderRadius) {
      return `${borderRadius}px;`;
    }
  }};

  /* border: ${({border}) => {
    if (border) {
      return `${border}px;`;
    }
  }}; */

  border: 0;

  border-width: ${({borderWidth}) => {
    if (borderWidth) {
      return `${borderWidth}px;`;
    }
  }};

  background-color: ${({bgColor}) => {
    if (bgColor) {
      return `${bgColor}`;
    }
  }};

  border-color: ${({borderColor}) => {
    if (borderColor) {
      return `${borderColor}`;
    }
  }};

  padding: ${({padding}) => {
    if (padding) {
      return `${padding}px;`;
    }
  }};

  font-size: ${({fontSize}) => {
    if (fontSize) {
      return `${fontSize}px;`;
    }
  }};

  font-weight: ${({fontWeight}) => {
    if (fontWeight) {
      return `${fontWeight}`;
    }
  }};
`;

export {FieldElement};