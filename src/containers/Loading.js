import LinearProgress from '@mui/material/LinearProgress';
import { connect } from "react-redux";
import { getLoading } from '../reducers/loading.selectors';

export const Loading = (props) => (
    props.loading ? 
    <LinearProgress /> : null
);

const mapStateToProps = (state) => ({
    loading: getLoading(state),
})

export default connect(mapStateToProps, null)(Loading);