import styled from 'styled-components';

import { LinkProps } from './types';

const LinkComponent = styled.a<LinkProps>`
  text-decoration: none;
  color: inherit;
  cursor: ${({cursor}) => {
    if (cursor === 'pointer') {
      return 'pointer';
    }
    return 'default';
  }}
`;

export { LinkComponent };