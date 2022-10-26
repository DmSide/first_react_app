import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

interface ErrorMessageProps {
    error: string
}

export function ErrorMessage({error}: ErrorMessageProps){
    return (
        <p className="text-center text-red-600"> {error} </p>
    )
}