import styled from 'styled-components';

const Background = styled.div`
  position: absolute;
  height: 34px;
  left: 9px;
  right: 9px;
  bottom: 178px;

  background: #171E22;
  border-radius: 15px;
`

const HotDealResults = styled.div`
  position: absolute;
  width: 262px;
  height: 28px;
  left: 21px;
  top: calc(50% - 28px/2);

  font-family: 'Arial';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #FFF500;
`

const HotdealBody = () => {
  // 요청후 데이터 받기
  // 로컬스토리지 사용 고려
  return (
    <>
      <Background>
        <HotDealResults>
          a<br />b
        </HotDealResults>
      </Background>
    </>
  )
}

export default HotdealBody;