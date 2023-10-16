'use client'
import Inicio from './inicio/page'

import {
  MenuContainer,
  MenuItem,
  StyledLink,
  DivImg,
  IMG
} from '../styles/page'

const Home = ({ children = <Inicio /> }) => {
  return (
    <main>
      <MenuContainer>
        <DivImg>
          <IMG
            src="https://github.com/RochaGabriell/nextjs/blob/main/src/assets/imagens/ifpi.png?raw=true"
            alt="IFPI Logo"
          />
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
            <MenuItem>
              <StyledLink href="/nomes">Nomes</StyledLink>
            </MenuItem>
          </ul>
        </div>
      </MenuContainer>
      {children}
    </main>
  )
}

export default Home
