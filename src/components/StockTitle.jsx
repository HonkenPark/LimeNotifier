import styled from 'styled-components';

const TitleText = styled.div`
  position: absolute;
  width: 56px;
  height: 24px;
  left: 10px;
  top: calc(50% - 24px/2 - 271px);

  font-family: 'Rammetto One';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-align: center;

  color: #FFFFFF;
`

const StockTitle = () => {
  return (
    <>
      <TitleText>Stocks</TitleText>
    </>
  )
}

export default StockTitle;