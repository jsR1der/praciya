import {withErrorBoundary} from "react-error-boundary";
import {Career} from "./Career.tsx";
import {GlobalErrorBoundary} from "../errors/globalErrorBoundary/GlobalErrorBoundary.tsx";

export const CareerWithErrorBoundary = withErrorBoundary(Career, {
    FallbackComponent: GlobalErrorBoundary,
    onError: (error, info) => console.log(error, info),
    onReset: (details) => console.log(details),
    resetKeys: []
});