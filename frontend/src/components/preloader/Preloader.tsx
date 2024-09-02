import './Preloader.scss';
import {Box, CircularProgress} from "@mui/material";

function Preloader(props: { size?: number }) {
    return <Box sx={{display: 'flex'}}>
        <CircularProgress size={props.size ? props.size : 48} classes={{circle: 'preloader'}}/>
    </Box>
}

export default Preloader;