import styled from 'styled-components';

const TitleText = styled.div`
  position: absolute;
  width: 41px;
  height: 24px;
  left: 10px;
  top: calc(50% - 24px/2 - 12px);

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

const GoldTitle = () => {
  return (
    <>
      <TitleText>Gold</TitleText>
    </>
  )
}

export default GoldTitle;