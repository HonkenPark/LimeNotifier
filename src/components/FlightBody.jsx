import { useState, useEffect } from 'react';
import { getCurrentTime } from 'services/utils';
import styled from 'styled-components';
import axios from 'axios';

const Background = styled.div`
  position: absolute;
  height: 34px;
  left: 9px;
  right: 9px;
  bottom: 111px;

  background: #000000;
  border-radius: 15px;
`

const FlightResults = styled.div`
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

  color: #FF5C00;
`

const FlightBody = () => {
  const delay = 1000 * 60 * 20 // 20분
  const composeSentence = (result, keyword) => {
    let date = new Date();
    if (result) {
      return '원하시는 조건의 항공권을 찾았습니다!!'
    }
    else {
      return '[' + getCurrentTime(date) + '] 현재까지 조건에 맞는 항공권이 없습니다.'
    }
  }

  let initialState = 'spawn 파이썬 모듈에러 해결까지 블럭'//composeSentence(false, '');
  const [result, setResult] = useState({previous: initialState, current: initialState})

  // var data = {
  //   authkey: 'QFbn3uFi2qt75VOXPvnnGxuVirl8XfgP',
  //   searchdate: '20230509',
  //   data: 'AP01',
  // };

  // fetch('https://www.koreaexim.go.kr/site/program/financial/exchangeJSON', {
  //       method: 'POST', // or 'PUT'
  //       body: JSON.stringify(data), // data can be `string` or {object}!
  //       headers:{
  //         'Content-Type': 'application/json'
  //       }
  //     }).then(res => res.json())
  //     .then(response => console.log('Success:', JSON.stringify(response)))
  //     .catch(error => console.error('Error:', error));

  useEffect(() => {
    async function fetchData() {
      await axios.get('https://f3e7-222-112-77-160.ngrok-free.app/flight', {
        headers: { "ngrok-skip-browser-warning":"any" }
      })
      .then(res => {
        console.log(res);
        console.log(typeof res);
        const json = JSON.parse(res.data.result.replace(/'/g, '"').replace(/False/g, "false").replace(/"\r\n"/g, ""));
        console.log(json)
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
    // fetchData();

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
        <FlightResults>
          {result.previous}<br />{result.current}
        </FlightResults>
      </Background>
    </>
  )
}

export default FlightBody;