import * as React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";

/**
 * Create a component that fetches data from the
 * `https://ui.dev/api/courses/react-query/users` endpoint.
 * It should include a loading indicator, and render the
 * data to a list of users (name only). Give the query a
 * stale time of 5 minutes.
 *
 * Finally, include a button that will invalidate the query,
 * causing a refetch.
 */
export default function ManualQueryInvalidation() {
    const queryClient = useQueryClient();
    const usersQuery = useQuery(["users"], 
        () => fetch("https://ui.dev/api/courses/react-query/users").then(res => 
            res.json()),
        {
            staleTime: 1000 * 60 * 5
        }
    )
    return (
        <div>
            <h2>Users</h2>
            {usersQuery.isLoading ? <h3>Loading...</h3> : (
                <ul>
                    {usersQuery.data.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            )}
            {usersQuery.isStale ? <p>Stale</p> : (
                <button 
                    onClick={() => {
                        // usersQuery.refetch();
                        queryClient.invalidateQueries(["users"])
                    }}
                >
                    Invalidate Query
                </button>
            )}
        </div>
    );
}