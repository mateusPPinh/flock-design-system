import { 
  HeadingOne,
  HeadingTwo,
  HeadingThree,
  HeadingFour,
  HeadingFive,
  HeadingSix,
  Label,
  P,
  Span
 } from './styles'

// Create abstration for font component
type FontProps = {
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string;
  children?: React.ReactNode;
  element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  ml?: string | number;
  mr?: string | number;
  mt?: number | string;
}

export const Typogrpahy = ({children, fontFamily, fontSize, fontWeight, mt, element, ml, mr}: FontProps) => {
  const props = { element, fontFamily, fontSize, fontWeight, mt, ml, mr };

  switch(element) {
    case 'h1':
      return <HeadingOne {...props}>{children}</HeadingOne>
    case 'h2':
      return <HeadingTwo {...props}>{children}</HeadingTwo>
    case 'h3':
      return <HeadingThree {...props}>{children}</HeadingThree>
    case 'h4':
      return <HeadingFour {...props}>{children}</HeadingFour>
    case 'h5':
      return <HeadingFive {...props}>{children}</HeadingFive>
    case 'h6':
      return <HeadingSix {...props}>{children}</HeadingSix>
    case 'p':
      return <P {...props}>{children}</P>
    case 'span':
      return <Span {...props}>{children}</Span>
    default:
      return <Label {...props}>{children}</Label>
  }
}

