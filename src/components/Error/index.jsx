import error from '../../assets/error.png'
import styled from 'styled-components'

const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  background-color: #f9f9fc;
  margin: 5% 5%;
  height: 700px;
`
const ErrorTitle = styled.h1`
  margin: 50px 0 50px 0;
`

const ErrorImg = styled.img`
  width: 500px;
  margin-bottom: 50px;
`
function Error() {
  return (
    <ErrorWrapper>
      <ErrorTitle>Oups... </ErrorTitle>
      <ErrorImg src={error} alt="error" />
      <ErrorTitle>Il semblerait qu'il y ait un problème</ErrorTitle>
    </ErrorWrapper>
  )
}
export default Error
