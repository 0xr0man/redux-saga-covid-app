import React from "react";
import { Row, Col, Button, Tabs, Tab, Container } from "react-bootstrap";
import Results from "../components/Results";
import {Chart} from "../components/Chart";
import {connect} from 'react-redux';
import {getContinentStats, getStats} from '../actions'
import Loading from "../components/Loading";
import Error from "../components/Error";


class AppContainer extends React.Component {
    
    componentDidMount() {
        this.props.getStats();
    }
    
    handleBtnClick = () => {
        this.props.getStats();
    }

    render() {
        if(this.props.statsState.loading) {
            return <Loading />
        }
        if(this.props.statsState.error) {
            return <Error />
        }
        return(
            <Container>
            <Row>
                <Button onClick={() => {this.handleBtnClick()}}>Reload results</Button>
                <Tabs defaultActiveKey="results" className="mb-3">
                    <Tab eventKey="results" title="Results">
                        <Col><Results data={this.props.statsState.stats} loading={this.props.statsState.loading}/></Col>
                    </Tab>
                    <Tab eventKey="chart" title="Charts">
                        <Col><Chart data={this.props.statsState.continentStats} loading={this.props.statsState.loading} radioChangeHandler={this.props.getContinentStats}/></Col>
                    </Tab>
                </Tabs>
            </Row>
            </Container>
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