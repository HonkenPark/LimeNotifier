import StatusBar from 'components/StatusBar';
import StockTitle from 'components/StockTitle';
import MainTitle from 'components/MainTitle';
import styled from 'styled-components'
import GoldTitle from 'components/GoldTitle';
import HotdealTitle from 'components/HotdealTitle';
import FlightTitle from 'components/FlightTitle';
import CurrencyTitle from 'components/CurrencyTitle';
import CurrencyBody from 'components/CurrencyBody';
import StockBody from 'components/StockBody';
import GoldBody from 'components/GoldBody';
import HotdealBody from 'components/HotdealBody';
import FlightBody from 'components/FlightBody';

const BackGround = styled.div`
    position: relative;
    width: 400px;
    height: 700px;

    background: #2B2F55;
`

const MainPage = () => {
    return (
        <>
            <BackGround>
                <StatusBar />
                <MainTitle />
                <StockTitle />
                <StockBody />
                <GoldTitle />
                <GoldBody />
                <HotdealTitle />
                <HotdealBody />
                <FlightTitle />
                <FlightBody />
                <CurrencyTitle />
                <CurrencyBody />
            </BackGround>
        </>
    )
}

export default MainPage;