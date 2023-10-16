'use client'
import Link from 'next/link'
import Home from './page'
import { ErrorContainer, ErrorMessage, ErrorImage } from '../styles/not-found'

export default function NotFound() {
  const imagem = '/imagens/astronauta.jpg'
  return (
    <Home>
      <ErrorContainer>
        <ErrorImage src={imagem} alt="Erro 404" />
        <ErrorMessage>
          <h2>Não encontrado</h2>
          <p>Não foi possível encontrar o recurso solicitado</p>
          <Link href="/">retornar para Home</Link>
        </ErrorMessage>
      </ErrorContainer>
    </Home>
  )
}
