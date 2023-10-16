'use client'
import Home from '../../page'
import { Container } from './styles'

const Page = ({ params }) => {
  const noticias = [
    {
      id: 1,
      titulo: 'Professor Carlos Estevão apresenta projeto de visão',
      noticia: 'No último domingo, professor Carlos ...',
      imagemUrl: 'http://github.com/carlosestevaobs.png'
    },
    {
      id: 2,
      titulo: 'Professor Túlio conclui seu curso',
      noticia: 'Na última sexta-feira, professor Túlio...',
      imagemUrl: 'https://github.com/tulioqrxkyde.png'
    }
  ]

  const noticiaEncontrada = noticias.find(
    noticia => noticia.id === parseInt(params.slug)
  )

  if (!noticiaEncontrada) {
    return <p>Notícia não encontrada</p>
  }
  return (
    <Home>
      <Container>
        <div>
          <img src={noticiaEncontrada.imagemUrl} alt="Imagem da Notícia" />
        </div>
        <div>
          <h2>{noticiaEncontrada.titulo}</h2>
          <p>{noticiaEncontrada.noticia}</p>
        </div>
      </Container>
    </Home>
  )
}

export default Page
