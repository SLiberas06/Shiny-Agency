// import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {StyledLink} from '../../utils/Atoms'
import logo from '../../assets/logo.png'


const GlobalHeader = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
padding:30px;
`

function Header(){
    return(
        <GlobalHeader>
            <img src={logo} alt='Shiny-agency'/>
        <nav>    
            <StyledLink to='/' $isFullLink>Accueil</StyledLink>
            <StyledLink to='/freelances' $isFullLink>Profils</StyledLink>
            <StyledLink to='/survey/1' $isFullLink>Faire le test</StyledLink>
        
        </nav>
        </GlobalHeader>
    )
}

export default Header;