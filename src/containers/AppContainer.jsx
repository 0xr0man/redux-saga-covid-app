import React from "react";
import Container from '@mui/material/Container';
import Results from "../components/Results";
import Chart from "../components/Chart";
import Loading from "../containers/Loading";
import Error from "../containers/Error";
import TabsComponent from "../components/Tabs";


class AppContainer extends React.Component {

    render() {
        return(
            <React.Fragment>
            <Loading />
            <Error />
            <Container>
                <TabsComponent
                    first={<Results/>}
                    second={<Chart/>} />
            </Container>
            </React.Fragment>
        );
    }
}
export default AppContainer;
