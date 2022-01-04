import React from "react";
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Results from "../components/Results";
import {Chart} from "../components/Chart";
import {connect} from 'react-redux';
import {getContinentStats, getStats} from '../actions'
import Loading from "../containers/Loading";
import Error from "../containers/Error";
import TabsComponent from "../components/Tabs";


class AppContainer extends React.Component {
    
    componentDidMount() {
        this.props.getStats();
    }
    
    handleReloadStatsBtnClick = () => {
        this.props.getStats();
    }

    render() {
        return(
            <React.Fragment>
            <Loading />
            <Error />
            <Container>
                <Button onClick={() => {this.handleReloadStatsBtnClick()}}>Reload results</Button>
                <TabsComponent 
                    first={<Results data={this.props.statsState.stats} loading={this.props.statsState.loading}/>}
                    second={<Chart data={this.props.statsState.continentStats} loading={this.props.statsState.loading} radioChangeHandler={this.props.getContinentStats}/>} />
            </Container>
            </React.Fragment>
        );
    }
}

/*
1) Обычно _весь стеит никто не вытягивает_, потому что он огромный вытягивают то что конкретно нужно здесь
для этого делают селекторы, который возвращают кусочки стеита.
как минимум нам нужно 2 селектора getTab1State gtTab2State как вариант.
2) Обыячно к редуксу подключают кучу разных компонентов, чтоы работать с маленькими кусочками стеита.
Ну и чтобы функции для работы со стеитом не передавать через все дерево компонентов.
Т.е. если нам в радиобаттонах чтото делать надо лучше контеинер содержащих радиобатоны подрубить к редуксу, а не прямо рутовый компонент прилажаения.э

В товем примере напрашивается таб1 к стеиту подрубить, вытягивать там стеит для таб1. 
и таб2 к стеиту подрубить вытягивать стеит для таб2
3) У нас в проекте так и сделано и есть отдельно selectors для вычитки кусочков стеита
*/
const mapStateToProps = (state) => ({
    statsState: state,
})

const mapDispatchToProps = {
    getStats: getStats,
    getContinentStats: getContinentStats,
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);