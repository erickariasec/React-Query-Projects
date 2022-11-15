import { useQuery } from "@tanstack/react-query";

let count = 0;
const ErrorComponent = () => {
    const errorQuery = useQuery(
        ["error"],
        async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        if (count === 0) {
            count++;
            return "Successful";
        } else {
            throw new Error("Failed");
        }
        },
        { retry: false }
    );

    return (
        <div>
        {errorQuery.isError ? (
            <div className="error-message">{errorQuery.error.message}</div>
        ) : null}
        {errorQuery.isLoading ? "Loading..." : errorQuery.data}
        </div>
    );
};

export default ErrorComponent;