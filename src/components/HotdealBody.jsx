import { useState, useEffect } from 'react';
import { getCurrentTime } from 'services/utils';
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
  const delay = 1000 * 60 * 30 // 30분
  const composeSentence = (result, keyword) => {
    let date = new Date();
    if (result) {
      return '[' + keyword + '] 결과를 찾았습니다!!'
    }
    else {
      return '[' + getCurrentTime(date) + '] 현재까지 조건에 맞는 게시물이 없습니다.'
    }
  }

  let initialState = composeSentence(false, '');
  const [result, setResult] = useState({previous: initialState, current: initialState})

  useEffect(() => {
    async function fetchData() {
      await axios.get('https://f3e7-222-112-77-160.ngrok-free.app/hotdeal', {
        headers: { "ngrok-skip-browser-warning":"any" }
      })
      .then(res => {
        const json = JSON.parse(res.data.result.replace(/'/g, '"').replace(/False/g, "false").replace(/"\r\n"/g, ""));
        let result_list = {previous: result.current, current: composeSentence(json.search, json.keyword)};
        setResult(result_list);

        if (json.search) {
          console.log('find!!')
        }
        else {
          console.log('not yet..')
        }
        return json;
      })
      .catch(err => {
        console.error(err);
      });
    }
    fetchData();

    const interval = setInterval(async () => {
      // fetchData();
    }, delay);

    return () => {
      clearInterval(interval);
    }
  }, [])

  return (
    <>
      <Background>
        <HotDealResults>
          {result.previous}<br />{result.current}
        </HotDealResults>
      </Background>
    </>
  )
}

export default HotdealBody;