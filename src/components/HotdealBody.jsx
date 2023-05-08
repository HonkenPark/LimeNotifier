import styled from 'styled-components';
import axios from 'axios';
import { requestAxois } from 'services/utils';

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
  // axios.get('https://f3e7-222-112-77-160.ngrok-free.app/hotdeal', {
  //   headers: { 'Access-Control-Allow-Origin': '*',
  //   "ngrok-skip-browser-warning":"any" }
  // })
  // .then(res => {
  //   console.log(res)
  //   console.log(res.data)
  //   console.log(typeof(res.data))
  // })
  // .catch(err => {
  //   console.error(err);
  // });
  let res = requestAxois('https://f3e7-222-112-77-160.ngrok-free.app/hotdeal');
  if (res) {
    const json = JSON.parse(res.replace(/'/g, '"').replace(/False/g, "false").replace(/"\r\n"/g, ""));
    console.log(json.result.search)
    console.log(json.result.keyword)
  }
  else {
    console.log(res);
  }
  console.log(res);
  console.log(typeof(res));

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