import React from 'react';

import { Typogrpahy } from '../components/Typography';
import theme from '../styles/theme';
import { ThemeProvider } from 'styled-components'


export default {
  title: 'Example/Typography',
  component: Typogrpahy,
}

export const Primary = () => {
  return (
    <ThemeProvider theme={theme}>
      <Typogrpahy fontFamily='Roboto' mt={140} fontSize="52" element="h1">Name</Typogrpahy>
    </ThemeProvider>
  )
}

export const Playground = () => <Typogrpahy fontFamily="fontBold" mt={140} fontSize="52" element="h1">Name</Typogrpahy>;