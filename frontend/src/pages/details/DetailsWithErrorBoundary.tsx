import {withErrorBoundary} from "react-error-boundary";
import {Details} from "./Details.tsx";
import {GlobalErrorBoundary} from "../../components/errors/globalErrorBoundary/GlobalErrorBoundary.tsx";

export const DetailsWithErrorBoundary = withErrorBoundary(Details, {
    FallbackComponent: GlobalErrorBoundary,
    onError: (error, info) => console.log(error, info),
    onReset: (details) => console.log(details),
    resetKeys: []
});