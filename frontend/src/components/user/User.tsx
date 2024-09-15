// import styles from './User.module.scss'

import {RoundedImage} from "../image/RoundedImage.tsx";
import {Menu, MenuItem} from "@mui/material";
import {SyntheticEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {DefaultUserModel} from "../../models/defaultUser.model.ts";

export const User = (props: { user: DefaultUserModel, logout: () => Promise<void> }) => {
    const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: SyntheticEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (): void => {
        setAnchorEl(null);
    };

    const onClose = () => {
        handleClose();
        props.logout().then()
    }

    const navigateToSettings = () => {
        handleClose()
        navigate('settings', {})
    }


    return (
        <>
            <div onClick={handleClick} id="container">
                <RoundedImage url={props.user!.picture}></RoundedImage>
            </div>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'container',
                }}
            >
                <MenuItem onClick={navigateToSettings}>Settings</MenuItem>
                <MenuItem onClick={onClose}>Logout</MenuItem>
            </Menu>
        </>
    );
};