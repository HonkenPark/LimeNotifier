import styled from 'styled-components';

const Background = styled.div`
  position: absolute;
  height: 226px;
  left: 10px;
  right: 8px;
  top: calc(50% - 226px/2 - 146px);

  background: #C8C8C8;
  border-radius: 30px;
`

const StockBody = () => {
  return (
    <>
      <Background></Background>
    </>
  )
}

export default StockBody;