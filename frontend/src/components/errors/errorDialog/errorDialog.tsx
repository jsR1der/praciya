import {ErrorDialogProps} from "./errorDialog.model.ts";
import {Dialog} from "@mui/material";
import Button from "../../button/Button.tsx";
import {Color} from "../../../utils/types.ts";

export const ErrorDialog = ({resetErrorCallback, open, error}: ErrorDialogProps) => {
    const handleClose = () => {
        resetErrorCallback()
        open = false;
    }
    return (
        <Dialog open={open}>
            <div>{error.message}</div>
            <Button classes={{color: Color.primary}} text="Retry" action={handleClose}></Button>
        </Dialog>
    );
};