import { useState, useEffect } from 'react';
import { getCurrentDateCurrency } from 'services/utils';
import styled from 'styled-components';
import axios from 'axios';
import { backend_url, koreaexim_url } from 'services/config';

import us_flag from 'assets/us-flag.svg'
import eu_flag from 'assets/eu-flag.svg'
import jp_flag from 'assets/jp-flag.svg'

const Background = styled.div`
  position: absolute;
  height: 61px;
  left: 10px;
  right: 8px;
  bottom: 17px;

  background: #151515;
  border-radius: 15px;
`

const CurrencyCardLeft = styled.div`
  position: absolute;
  left: 0%;
  right: 66.75%;
  top: 0%;
  bottom: 0%;
`

const CurrencyCardMiddle = styled.div`
  position: absolute;
  left: 33.25%;
  right: 33.51%;
  top: 0%;
  bottom: 0%;
`

const CurrencyCardRight = styled.div`
  position: absolute;
  left: 66.75%;
  right: 0%;
  top: 0%;
  bottom: 0%;
`

const Flag = styled.div`
  position: absolute;
  width: 24px;
  height: 13.71px;
  left: 7px;
  top: calc(50% - 13.71px/2 + 0.36px);

  background: url(image.png);
`

const Price = styled.div`
  position: absolute;
  width: 80px;
  height: 61px;
  right: 8px;
  top: calc(50% - 61px/2);

  font-family: 'Arial';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 17px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #FFFFFF;
`

const CurrencyBody = () => {
  const delay = 1000 * 60 * 30 // 30분
  let results = {
    'USD': {'up': '0', 'down': '0'},
    'EUR': {'up': '0', 'down': '0'},
    'JPY': {'up': '0', 'down': '0'},
  }
  const [result, setResult] = useState(results);
  const regex = /(?<=\.\d{1})\b/g;
  

  useEffect(() => {
    async function fetchData() {
      await axios.get(backend_url + '/currency', {
        headers: { "ngrok-skip-browser-warning":"any" },
        params: {
          url:  koreaexim_url + '/exchangeJSON',
          authkey: 'QFbn3uFi2qt75VOXPvnnGxuVirl8XfgP',
          searchdate: getCurrentDateCurrency(),
          data: 'AP01'
        }
      })
      .then(res => {
        const json = JSON.parse(res.data.result)
        json.forEach(element => {
          if (element.cur_unit === 'USD' && element.result === 1) {
            results.USD.up = element.tts.replace(regex, '0');
            results.USD.down = element.ttb.replace(regex, '0');
          }
          else if (element.cur_unit === 'EUR' && element.result === 1) {
            results.EUR.up = element.tts.replace(regex, '0');
            results.EUR.down = element.ttb.replace(regex, '0');
          }
          else if (element.cur_unit === 'JPY(100)' && element.result === 1) {
            results.JPY.up = element.tts.replace(regex, '0');
            results.JPY.down = element.ttb.replace(regex, '0');
          }
        });
        console.log(results);
        setResult(results);
      })
      .catch(err => {
        console.error(err);
      });
    }
    fetchData();

    const interval = setInterval(async () => {
      fetchData();
    }, delay);

    return () => {
      clearInterval(interval);
    }
  }, [])

  return (
    <>
      <Background>
        <CurrencyCardLeft>
          <Flag className='us_flag'>
            <img alt='us flag' src={us_flag} />
          </Flag>
          <Price>
            {result.USD.up}<br />{result.USD.down}
          </Price>
        </CurrencyCardLeft>
        <CurrencyCardMiddle>
          <Flag className='eu_flag'>
            <img alt='eu flag' src={eu_flag} />
          </Flag>
          <Price>
            {result.EUR.up}<br />{result.EUR.down}
          </Price>
        </CurrencyCardMiddle>
        <CurrencyCardRight>
          <Flag className='jp_flag'>
            <img alt='jp flag' src={jp_flag} />
          </Flag>
          <Price>
            {result.JPY.up}<br />{result.JPY.down}
          </Price>
        </CurrencyCardRight>
      </Background>
    </>
  )
}

export default CurrencyBody;