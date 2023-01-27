// import {Link} from 'react-router-dom'
import styled from 'styled-components'
import { StyledLink } from '../../utils/Atoms'
import logo from '../../assets/logo.png'

const GlobalHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 992px) {
    padding: 30px;
    flex-direction: row;
  }
`

function Header() {
  return (
    <GlobalHeader>
      <img src={logo} alt="Shiny-agency" />
      <nav>
        <StyledLink to="/" $isFullLink>
          Accueil
        </StyledLink>
        <StyledLink to="/freelances" $isFullLink>
          Profils
        </StyledLink>
        <StyledLink to="/survey/1" $isFullLink>
          Faire le test
        </StyledLink>
      </nav>
    </GlobalHeader>
  )
}

export default Header
