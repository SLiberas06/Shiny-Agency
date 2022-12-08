import styled from 'styled-components'
import imageAccueil from '../../assets/imageAccueil.png'
import colors from '../../utils/colors'
import { StyledLink } from '../../utils/Atoms'

const HomeContainer = styled.div`
  width: 90%;
  height: 700px;
  display: flex;
  align-items: left;
  flex-direction: column;
  background-color: #f9f9fc;
  margin: 5%;
  @media (min-width: 992px) {
    background-color: blue;
  }
`
const Hometitle = styled.h1`
  text-align: left;
  width: 40%;
  margin: 10% 5%;
  font-size: 40px;
`

const Homeimg = styled.img`
  width: 400px;
  height: 400px;
  position: absolute;
  right: 100px;
  bottom: 100px;
`

function Home() {
  return (
    <HomeContainer>
      <Hometitle>
        Repérez vos besoins, on s'occupe du reste, avec les meilleurs talents
      </Hometitle>
      <StyledLink to="/survey/1" $isFullLink>
        Faire le test
      </StyledLink>
      <Homeimg src={imageAccueil} alt="accueil" />
    </HomeContainer>
  )
}

export default Home
