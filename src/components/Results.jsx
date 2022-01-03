import { Table } from "react-bootstrap";
import NoData from "./NoData";

export const Results = ({data}) => {
    if(!data) {
        return <NoData />
    }
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Country</th>
                    <th>New deaths</th>
                    <th>New cases</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.Country}</td>
                                <td>{item.NewDeaths}</td>
                                <td>{item.NewCases}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        );
    }

export default Results;