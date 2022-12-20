import styled from 'styled-components'
import imageAccueil from '../../assets/imageAccueil.png'
import { StyledLink } from '../../utils/Atoms'
import colors from '../../utils/colors'
import {useTheme} from '../../utils/hooks'

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const HomeContainer = styled.div`
margin: 30px;
// background-color: ${colors.backgroundLight};
padding: 60px 90px;
display: flex;
flex-direction: row;
max-width: 1200px;
`
const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  ${StyledLink} {
    max-width: 250px;
  }
`
const Hometitle = styled.h1`
padding-bottom: 30px;
  max-width: 280px;
  line-height: 50px;
`

const Homeimg = styled.img`
flex: 1
`

function Home() {
  const {theme} =useTheme()
  return (
    <HomeWrapper>
    <HomeContainer theme={theme}>
      <LeftCol>
      <Hometitle theme={theme}>
        Repérez vos besoins, on s'occupe du reste, avec les meilleurs talents
      </Hometitle>
      <StyledLink to="/survey/1" $isFullLink>
        Faire le test
      </StyledLink>
      </LeftCol>
      <Homeimg src={imageAccueil} alt="accueil" />
    </HomeContainer>
    </HomeWrapper>
  )
}

export default Home
