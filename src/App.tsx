import GlobalStyle from './styles/globals';
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import { Typogrpahy } from './components/Typography';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typogrpahy fontFamily="fontBMedium" mt={140} fontSize="52" element="h1">Name</Typogrpahy>
      </div>
    </ThemeProvider>
  )
}