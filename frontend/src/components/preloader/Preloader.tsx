import './Preloader.scss';
import {Box, CircularProgress} from "@mui/material";

function Preloader(props: { size?: number }) {
    const defaultSize = 48;
    return <div className="loader-container">
        <Box sx={{display: 'flex'}}>
            <CircularProgress size={props.size ? props.size : defaultSize} classes={{circle: 'preloader'}}/>
        </Box>
    </div>
}

export default Preloader;