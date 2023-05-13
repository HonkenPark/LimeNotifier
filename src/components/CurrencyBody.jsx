import { useState, useEffect } from 'react';
import { getCurrentDateDigit } from 'services/utils';
import styled from 'styled-components';
import axios from 'axios';
import { backend_url, koreaexim_url } from 'services/config';

const Background = styled.div`
  position: absolute;
  height: 61px;
  left: 10px;
  right: 8px;
  bottom: 17px;

  background: #151515;
  border-radius: 15px;
`

const CurrencyBody = () => {
  const [result, setResult] = useState();

  useEffect(() => {
    async function fetchData() {
      let results = {
        'USD': {'up': '0', 'down': '0'},
        'EUR': {'up': '0', 'down': '0'},
        'JPY': {'up': '0', 'down': '0'},
      }
      await axios.get(backend_url + '/currency', {
        headers: { "ngrok-skip-browser-warning":"any" },
        params: {
          url:  koreaexim_url + '/exchangeJSON',
          authkey: 'QFbn3uFi2qt75VOXPvnnGxuVirl8XfgP',
          searchdate: getCurrentDateDigit(),
          data: 'AP01'
        }
      })
      .then(res => {
        const json = JSON.parse(res.data.result)
        json.forEach(element => {
          if (element.cur_unit === 'USD' && element.result === 1) {
            results.USD.up = element.tts;
            results.USD.down = element.ttb;
          }
          else if (element.cur_unit === 'EUR' && element.result === 1) {
            results.EUR.up = element.tts;
            results.EUR.down = element.ttb;
          }
          else if (element.cur_unit === 'JPY(100)' && element.result === 1) {
            results.JPY.up = element.tts;
            results.JPY.down = element.ttb;
          }
        });
        console.log(results)
      })
      .catch(err => {
        console.error(err);
      });
    }
    fetchData();
  })
  return (
    <>
      <Background>
      </Background>
    </>
  )
}

export default CurrencyBody;