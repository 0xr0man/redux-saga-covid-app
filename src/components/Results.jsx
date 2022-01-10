import Table from '@mui/material/Table';
import React from "react";
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import NoData from "./NoData";
import {connect} from "react-redux"
import { getAllStats } from '../reducers/stats.selectors';
import { loadStats } from '../actions';
import PropTypes from "prop-types";

export class Results extends React.Component {
    static propTypes = {
        stats: PropTypes.arrayOf(
            PropTypes.shape({
                ActiveCases: PropTypes.number,
                Case_Fatality_Rate: PropTypes.number,
                Country: PropTypes.string,
                Infection_Risk: PropTypes.number,
                NewCases: PropTypes.number,
                NewDeaths: PropTypes.number,
                NewRecovered: PropTypes.number,
                Population: PropTypes.number,
                Recovery_Proporation: PropTypes.number,
                Serious_Critical: PropTypes.number,
                Test_Percentage: PropTypes.number,
                ThreeLetterSymbol: PropTypes.string,
                TotalCases: PropTypes.number,
                TotalDeaths: PropTypes.number,
                TotalRecovered: PropTypes.number,
                TotalTests: PropTypes.number,
                TwoLetterSymbol: PropTypes.string
                })
        ),
        loadStats: PropTypes.func.isRequired
    }
    componentDidMount() {
        this.props.loadStats();
    }
    render() {
        const data = this.props.stats;
        if(!data) {
            return <NoData />
        }
            return (
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Country</TableCell>
                            <TableCell align="right">Total Deaths</TableCell>
                            <TableCell align="right">Total Cases</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {data.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.Country}
                                </TableCell>
                                <TableCell align="right">{row.TotalDeaths}</TableCell>
                                <TableCell align="right">{row.TotalCases}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            );
    }
}

const mapStateToProps = (state) => ({
    stats: getAllStats(state)
})

const mapDispatchToProps = {
    loadStats
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);
