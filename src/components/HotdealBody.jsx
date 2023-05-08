import { useState, useEffect } from 'react';
import { requestAxois, getCurrentTime } from 'services/utils';
import styled from 'styled-components';
import axios from 'axios';

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
  width: 320px;
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
  const composeSentence = (result, keyword) => {
    let date = new Date();
    if (result) {
      return '[' + result + '] 결과를 찾았습니다!!'
    }
    else {
      return '[' + getCurrentTime(date) + '] 현재까지 조건에 맞는 게시물이 없습니다.'
    }
  }
  const [result, setResult] = useState(composeSentence(false, ''))

  //TODO: result를 로컬스토리지에 json화하여 누적 저장 시키고 읽어오는 로직 구현

  useEffect(() => {
    async function fetchData() {
      await axios.get('https://f3e7-222-112-77-160.ngrok-free.app/hotdeal', {
        headers: { "ngrok-skip-browser-warning":"any" }
      })
      .then(res => {
        console.log(res.data.result)
        const json = JSON.parse(res.data.result.replace(/'/g, '"').replace(/False/g, "false").replace(/"\r\n"/g, ""));
        console.log(json);
        if (json.search) {
          console.log('find!!')
          setResult(composeSentence(json.search, json.keyword));
        }
        else {
          console.log('not yet..')
          setResult(composeSentence(json.search, json.keyword));
        }
        return json;
      })
      .catch(err => {
        console.error(err);
      });
      
    }
    fetchData();

    // const interval = setInterval(async () => {
    //   let res = await requestAxois('https://f3e7-222-112-77-160.ngrok-free.app/hotdeal');
    //   if (res) {
    //     const json = JSON.parse(res.replace(/'/g, '"').replace(/False/g, "false").replace(/"\r\n"/g, ""));
    //     console.log(json.result.search)
    //     console.log(json.result.keyword)
    //     console.log(typeof(res));
    //   }
    //   else {
    //     console.log(res);
    //   }
    // }, 6000000); // 1분마다 업데이트

    // return () => {
    //   clearInterval(interval);
    // }
  }, [])

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
  
  

  return (
    <>
      <Background>
        <HotDealResults>
          a<br />{result}
        </HotDealResults>
      </Background>
    </>
  )
}

export default HotdealBody;