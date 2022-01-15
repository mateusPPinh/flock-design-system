import { Box } from "../Box"
import { Typogrpahy } from "../Typography"
import { Header } from "../Header"
import { Field } from "../Input"
import { Container, ImageContent, ImageLeft, ImageRight } from "./styles"

export const Main = () => {
  return (
    <Container>
      <Header />
     <ImageContent>
      {/* <ImageLeft src='https://www.ubereats.com/_static/c17637631f7b1bb7a2ea07e4520e3242.svg' alt='Left Image' />
      <ImageRight src='https://www.ubereats.com/_static/7e44f0f05ccfa9c00e1fbd413c1bf8c9.svg' alt='Right Image' /> */}
     </ImageContent>

     <Typogrpahy
        fontFamily="fontBold"
        mt={140}
        fontSize="52"
        element="h1">
      Peça delivery e receba na sua porta
    </Typogrpahy>
    <Box display="flex" alignItems="center">
      <form action="">
        <Field
            width={500}
            placeholder="Insira o Endereço de Entrega"
            height={56}
            marginTop={80}
            borderRadius={4}
            bgColor="#fff"
            border={0}
            padding={20}
        />

        <Field
          placeholder="Entregar agora"
          height={56}
        />
      </form>
    </Box>
    </Container>
  )  
}