import styled from "styled-components";

import { BoxProps } from "./types";

const Container = styled.div<BoxProps>`
  // Return width with px and porcentage
  width: ${(props) => props.width && `${props.width}px`};
  height: ${(props) => props.height && `${props.height}px`};
  max-width: ${(props) => props.maxWidth && `${props.maxWidth}px`};
  max-height: ${(props) => props.maxHeight && `${props.maxHeight}px`};
  min-width: ${(props) => props.minWidth && `${props.minWidth}px`};
  min-height: ${(props) => props.minHeight && `${props.minHeight}px`};
  background-color: ${(props) => props.backgroundColor && props.backgroundColor};
  border-radius: ${(props) => props.borderRadius && `${props.borderRadius}px`};
  border-width: ${(props) => props.borderWidth && `${props.borderWidth}px`};

  // Alignment Props
  display: ${(props) => props.display && props.display};
  align-items: ${(props) => props.alignItems && props.alignItems};
  align-content: ${(props) => props.alignContent && props.alignContent};
  justify-content: ${(props) => props.justifyContent && props.justifyContent};
  flex-direction: ${(props) => props.flexDirection && props.flexDirection};
  flex-wrap: ${(props) => props.flexWrap && props.flexWrap};
  flex: ${(props) => props.flex && props.flex};
  order: ${(props) => props.order && props.order};
  align-self: ${(props) => props.alignSelf && props.alignSelf};
  justify-self: ${(props) => props.justifySelf && props.justifySelf};
  overflow: ${(props) => props.overflow && props.overflow};
  overflow-x: ${(props) => props.overflowX && props.overflowX};
  overflow-y: ${(props) => props.overflowY && props.overflowY};
  overflow-wrap: ${(props) => props.overflowWrap && props.overflowWrap};
  text-align: ${(props) => props.textAlign && props.textAlign};  
`;

export { Container };