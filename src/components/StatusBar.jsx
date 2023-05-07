import styled from 'styled-components'
import Battery from 'components/Battery';
import { useState, useEffect } from 'react';

const Header = styled.div`
  position: absolute;
  width: 382px;
  height: 14px;
  left: calc(50% - 382px/2 + 1px);
  top: 10px;
`

const DateText = styled.p`
  position: absolute;
  left: 0%;
  right: 62.83%;
  top: 0%;
  bottom: 0%;

  font-family: 'Arial';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-align: center;

  color: #FFFFFF;
`

const PercentText = styled.p`
  position: absolute;
  left: 86.94%;
  right: 5.5%;
  top: 0%;
  bottom: 0%;

  font-family: 'Arial';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-align: center;

  color: #FFFFFF;
`

const getCurrentDate = (date) => {
  let result = { 'month_day' : "", 'time' : "" }
  let month_day = getCurrentMonthDay(date);
  let time = getCurrentTime(date);
  result.month_day = month_day;
  result.time = time;
  return result;
}

const getCurrentMonthDay = (date) => {
  let month_day = new Intl.DateTimeFormat('en-US',
  {
    dateStyle: 'long',
  }).format(date)
  return month_day;
}

const getCurrentTime = (date) => {
  let time = new Intl.DateTimeFormat('en-US',
  {
    timeStyle: 'short'
  }).format(date)
  return time;
}

const StatusBar = () => {
  let date = new Date();
  const [curDate, setCurDate] = useState(getCurrentDate(date));

  useEffect(()=>{
    const interval = setInterval(() => {
      let date = new Date();
      setCurDate(getCurrentDate(date))
    }, 60000); // 1분마다 업데이트

    return () => {
      clearInterval(interval);
    }
  }, [])
  
  return (
    <>
      <Header>
        <DateText>{curDate.month_day}&nbsp;&nbsp;&nbsp;&nbsp;{curDate.time}</DateText>
        <Battery />
        <PercentText>v1.0</PercentText>
      </Header>
    </>
  )
}

export default StatusBar;