'use client'
import Inicio from './inicio/page'

import { MenuContainer, MenuItem, StyledLink, DivImg, IMG } from '../styles/page'

const Home = ({ children = <Inicio /> }) => {
  return (
    <main>
      <MenuContainer>
        <DivImg>
          <IMG src="/imagens/ifpi.png" alt="IFPI Logo" />
        </DivImg>
        <div>
          <ul>
            <MenuItem>
              <StyledLink href="/">Home</StyledLink>
            </MenuItem>
            <MenuItem>
              <StyledLink href="/contato">Contato</StyledLink>
            </MenuItem>
            <MenuItem>
              <StyledLink href="/fotos">Fotos</StyledLink>
            </MenuItem>
          </ul>
        </div>
      </MenuContainer>
      {children}
    </main>
  )
}

export default Home
