import styled from 'styled-components';

const TitleText = styled.div`
  position: absolute;
  width: 79px;
  height: 24px;
  left: 10px;
  bottom: 78px;

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

const CurrencyTitle = () => {
  return (
    <>
      <TitleText>Currency</TitleText>
    </>
  )
}

export default CurrencyTitle;