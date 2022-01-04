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
            <>
            <Loading />
            <Error />
            <Container>
                <Button onClick={() => {this.handleReloadStatsBtnClick()}}>Reload results</Button>
                <TabsComponent 
                    first={<Results data={this.props.statsState.stats} loading={this.props.statsState.loading}/>}
                    second={<Chart data={this.props.statsState.continentStats} loading={this.props.statsState.loading} radioChangeHandler={this.props.getContinentStats}/>} />
            </Container>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    statsState: state,
})

const mapDispatchToProps = {
    getStats: getStats,
    getContinentStats: getContinentStats,
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);