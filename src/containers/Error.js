import Snackbar from '@mui/material/Snackbar';
import { connect } from "react-redux";

export const Error = (props) => (
    props.statsState.error ? 
    <Snackbar
        open={true}
        autoHideDuration={6000}
        message="Error while fetching data"
      /> : null
);

const mapStateToProps = (state) => ({
    statsState: state,
})

export default connect(mapStateToProps, null)(Error);