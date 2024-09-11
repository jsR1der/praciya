export interface ErrorDialogProps {
    open: boolean;
    error: Error;
    resetErrorCallback: (...args: any[]) => void;
}