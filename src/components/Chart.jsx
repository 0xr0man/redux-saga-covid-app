import Plot from 'react-plotly.js'
import RadioComponent from '../components/Radio'
import NoData from "./NoData";
import React from "react"
import {connect} from "react-redux"
import {loadContinentStats} from "../actions";
import {getContinentStats} from "../reducers/stats.selectors"

const radios = [
  { name: 'Europe', value: 'europe' },
  { name: 'Asia', value: 'asia' },
];

// TODO save active radio btn in state
export class Chart extends React.Component {
    componentDidMount() {
        this.props.loadContinentStats('europe');
    }
    render() {
        const data = this.props.continentStats;
        if (!data) {
            return (
                <div>
                    <RadioComponent radios={radios} radioChangeHandler={this.props.loadContinentStats}/>
                    <NoData/>
                </div>
            );
        } else {
            return (
                <div>
                    <RadioComponent radios={radios} radioChangeHandler={this.props.loadContinentStats}/>
                    <br/>
                    <Plot
                        data={[
                            {
                                x: data.map((item, index) => {
                                    return (item.TotalDeaths)
                                }),
                                y: data.map((item, index) => {
                                    return (item.Country)
                                }),
                                type: 'bar',
                                orientation: 'h'
                            },
                        ]}
                        layout={{width: 500, height: 400, title: 'Deaths by continent'}}
                    />
                    <Plot
                        data={[
                            {
                                x: data.map((item, index) => {
                                    return (item.TotalCases)
                                }),
                                y: data.map((item, index) => {
                                    return (item.Country)
                                }),
                                type: 'bar',
                                orientation: 'h'
                            },
                        ]}
                        layout={{width: 500, height: 400, title: 'Cases by continent'}}
                    />
                    <Plot
                        data={[
                            {
                                x: data.map((item, index) => {
                                    return (item.TotalTests)
                                }),
                                y: data.map((item, index) => {
                                    return (item.Country)
                                }),
                                type: 'bar',
                                orientation: 'h'
                            },
                        ]}
                        layout={{width: 500, height: 400, title: 'Tests by continent'}}
                    />
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => ({
    continentStats: getContinentStats(state)
})

const mapDispatchToProps = {
    loadContinentStats
}
export default connect(mapStateToProps, mapDispatchToProps)(Chart);
