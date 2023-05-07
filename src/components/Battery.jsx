import styled from 'styled-components'
import icon from 'assets/battery.svg'

const BatteryIcon = styled.div`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 100%;
  bottom: -100%;

  transform: matrix(1, 0, 0, -1, 0, 0);
`
const BatteryContainer = styled.div`
  position: absolute;
  left: 94.5%;
  right: 0%;
  top: 92.86%;
  bottom: -78.57%;

  transform: matrix(1, 0, 0, -1, 0, 0);
`

const Battery = () => {
  return (
    <>
      <BatteryContainer>
        <BatteryIcon className='battery_icon'>
          <img alt="Icon of Percentage of Battery" src={icon} />
        </BatteryIcon>
      </BatteryContainer>
    </>
  )
}

export default Battery;