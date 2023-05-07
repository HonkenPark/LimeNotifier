import styled from 'styled-components';

const TitleText = styled.div`
  position: absolute;
  width: 71px;
  height: 24px;
  left: 9px;
  bottom: 212px;

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

const HotdealTitle = () => {
  return (
    <>
      <TitleText>Hotdeal</TitleText>
    </>
  )
}

export default HotdealTitle;