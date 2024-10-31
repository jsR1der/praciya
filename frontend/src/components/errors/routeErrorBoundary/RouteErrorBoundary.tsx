import {useRouteError} from "react-router-dom";
import Button from "../../button/Button.tsx";
import {Color} from "../../../utils/types.ts";

export function RouteErrorBoundary() {
    const error = useRouteError()
    const returnBack = () => {
        window.history.back()
    }
    return <div className={"abt-center flex flex-col items-center"}>
        <div>I don't know what to do, but you got an error: {(error as Error)?.message}</div>
        <Button classes={{color: Color.primary}} text="Return" action={returnBack}></Button>
    </div>
}