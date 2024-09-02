import {FieldError} from "react-hook-form";

export const handleErrorMessage = (error: FieldError | undefined) => {
    const err = error;
    if (err) {
        if (err?.type === 'required') {
            return 'Input is empty'
        }
        return err.message;
    } else {
        return '';
    }
}