import React from 'react'
import Image from 'next/image'

import { Container, TextContainer } from './styles'

const Inicio = () => {
  return (
    <Container>
      <Image
        src="https://github.com/RochaGabriell/nextjs/blob/main/src/assets/imagens/ifpi.png?raw=true"
        alt="IFPI"
        width={200}
        height={180}
      />
      <TextContainer>
        <p>Olá, seja bem-vindo ao nosso conteúdo de Next.js.</p>
        <p>Espero que você goste do conteúdo!</p>
      </TextContainer>
    </Container>
  )
}

export default Inicio
