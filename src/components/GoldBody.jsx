import styled from 'styled-components';

const Background = styled.div`
  position: absolute;
  height: 105px;
  left: 10px;
  right: 8px;
  top: calc(50% - 105px/2 + 52.5px);

  background: #474741;
  border-radius: 15px;
`

const GoldBody = () => {
  return (
    <>
      <Background></Background>
    </>
  )
}

export default GoldBody;