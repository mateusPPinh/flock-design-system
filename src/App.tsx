import GlobalStyle from './styles/globals';
// import { Main } from './components/Main';
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import { Main } from './components/Main';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Main />
    </ThemeProvider>
  )
}