import styled, { css } from 'styled-components';

type FontProps = {
  fontSize?: string | number;
  fontWeight?: string;
  fontFamily?: string;
  element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  mr?: string | number;
  ml?: string | number;
  mt?: number | string;
}

const stylesProps = css<FontProps>`
  font-family: ${(props) => props.fontFamily ? props.fontFamily : 'Roboto'};

  margin-top: ${({ mt }) => {
    if (mt) {
      return `${mt}px`;
    }
  }};

  margin-right: ${({ mr }) => {
    if (mr) {
      return `${mr}px`;
    }
  }};

  margin-left: ${({ ml }) => {
    if (ml) {
      return `${ml}px`;
    }
  }};

  font-size: ${({ fontSize }) => {
    if (fontSize) {
      return `${fontSize}px`;
    }
  }}
`;

const HeadingOne = styled.h1`
  ${stylesProps}
`;

const HeadingTwo = styled.h2`
  ${stylesProps}
`;

const HeadingThree = styled.h3`
  ${stylesProps}
`;

const HeadingFour = styled.h4`
  ${stylesProps}
`;

const HeadingFive = styled.h5`
  ${stylesProps}
`;

const HeadingSix = styled.h6`
  ${stylesProps}
`;

const P = styled.p`
  ${stylesProps}
`;

const Label = styled.label`
  ${stylesProps}
`;

const Span = styled.span`
  ${stylesProps}
`;

export { HeadingOne, HeadingTwo, HeadingThree, HeadingFour, HeadingFive, HeadingSix, P, Label, Span };