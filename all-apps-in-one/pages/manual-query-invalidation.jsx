import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useReducer } from "react";

const Queryer = () => {
    const query = useQuery(
        ["test"],
        () => {
            return new Promise((res) => setTimeout(res, 500)).then((res) =>
                Math.random()
        );
        },
        {
            staleTime: 5000
        }
    );
    if (query.isLoading) return <>Loading...</>;
    return <>{query.data}</>;
};
const Buttons = () => {
    const client = useQueryClient();

    return (
        <div>
        <button onClick={() => client.refetchQueries(["test"])}>Refetch</button>
        <button onClick={() => client.invalidateQueries(["test"])}>
            Invalidate
        </button>
        </div>
    );
};

export default function ManualQueryInvalidation() {
  const [mounted, toggleMounted] = useReducer((state) => !state, false);
  return (
    <div>
        <button onClick={toggleMounted}>{mounted ? "Show" : "Hide"} Query</button>
        {mounted ? null : <Queryer />}
        <Buttons />
    </div>
  );
}