import styled from 'styled-components'
import icon from 'assets/lime.svg'

const TitleText = styled.h1`
  position: absolute;
  left: 10%;
  right: 8.62%;
  top: 0%;
  bottom: 0%;

  font-family: 'Plaster';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #FFFFFF;
`

const LimeIcon = styled.div`
  position: absolute;
  left: 82.76%;
  right: 0%;
  top: 4.17%;
  bottom: 7.6%;

  /* background: url(lime_ci.png); */
`
const TitleContainer = styled.div`
  position: absolute;
  width: 174px;
  height: 24px;
  left: calc(50% - 174px/2);
  top: 42px;
`

const MainTitle = () => {
  return (
    <>
      <TitleContainer>
        <TitleText>notifier</TitleText>
        <LimeIcon className='lime_icon'>
          <img alt="Icon of Lime" src={icon} />
        </LimeIcon>
      </TitleContainer>
    </>
  )
}

export default MainTitle;