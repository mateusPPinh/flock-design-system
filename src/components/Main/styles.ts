import styled, { css } from 'styled-components'

const Container = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.primary};
  padding: 20px 40px;
  height: 100vh;
`;

const ImageContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  z-index: 1;
`;

const imageStyles = css`
  object-fit: cover;
  flex: none;
`;

const ImageRight = styled.div`
  background-image: uri('https://www.ubereats.com/_static/7e44f0f05ccfa9c00e1fbd413c1bf8c9.svg');
  background-repeat: no-repeat;
`;

const ImageLeft = styled.img`
  ${imageStyles}
`;

export { Container, ImageContent, ImageRight, ImageLeft };