import styled from 'styled-components'
import Card from '../components/Card'
import jiji from '../assets/images/jiji.JPG'
import eli from '../assets/images/eli.JPG'
import sab from '../assets/images/sab.JPG'
import mar from '../assets/images/mar.JPG'

const freelanceProfiles = [
  {
    name: 'Jean-Marie ROMELART',
    jobTitle: "Ne sait pas ce qu'il fout là",
    picture: jiji,
  },
  {
    name: 'Sabrina LIBERAS',
    jobTitle: 'Développeuse Fullstack',
    picture: sab,
  },
  {
    name: 'Elisa ROMELART',
    jobTitle: 'Développeuse Flanfeuse',
    picture: eli,
  },
  {
    name: 'Margo ROMELART',
    jobTitle: 'Biberonneuse Fullstack',
    picture: mar,
  },
]
const StyledFreelances = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

const TitleFreelance = styled.h1`
  font-weight: 700;
  font-size: 30px;
  text-align: center;
`

const SubtitleFreelance = styled.h3`
  font-weight: 200;
  font-size: 20px;
  color: #8186a0;
  margin-bottom: 70px;
`

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 330px 330px;
  grid-template-columns: repeat(2, 2fr);
`

function Freelances() {
  return (
    <StyledFreelances>
      <TitleFreelance>Trouvez votre prestataire</TitleFreelance>
      <SubtitleFreelance>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </SubtitleFreelance>
      <CardsContainer>
        {freelanceProfiles.map((profile, index) => (
          <Card
            key={`${profile.name}-${index}`}
            label={profile.jobTitle}
            title={profile.name}
            picture={profile.picture}
          />
        ))}
      </CardsContainer>
    </StyledFreelances>
  )
}
export default Freelances
