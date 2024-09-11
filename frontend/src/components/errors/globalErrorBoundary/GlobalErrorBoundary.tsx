import Button from "../../button/Button.tsx";
import {Color} from "../../../utils/types.ts";
import {FallbackProps} from "react-error-boundary";
import {FunctionComponent} from "react";

export const GlobalErrorBoundary: FunctionComponent<FallbackProps> = ({error, resetErrorBoundary}) => {
    return <div className={"abt-center flex flex-col items-center"}>
        <div>I don't know what to do, but you got an error: {error?.message}</div>
        <Button colorClass={Color.primary} text="Retry" action={resetErrorBoundary}></Button>
    </div>
}