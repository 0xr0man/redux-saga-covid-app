import LinearProgress from '@mui/material/LinearProgress';
import { connect } from "react-redux";

export const Loading = (props) => (
    props.statsState.loading ? 
    <LinearProgress /> : null
);

const mapStateToProps = (state) => ({
    statsState: state,
})

export default connect(mapStateToProps, null)(Loading);