import { useQuery } from "@tanstack/react-query";
import { useReducer } from "react";

function GithubUser({ username, isFresh }) {
    const userQuery = useQuery(
        ["user", username],
        async () => {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            return fetch(`https://api.github.com/users/${username}`).then((res) =>
                res.json()
            );
        },
        {
            staleTime: isFresh ? 3000 : 0,
            refetchInterval: 10 * 1000
        }
    );

    if (userQuery.isLoading) {
        return <div>...</div>;
    }

    if (userQuery.isError) {
        return <div>{userQuery.error.message}</div>;
    }

    return <pre>{JSON.stringify(userQuery.data, null, 2)}</pre>;
}

export default function CacheStates() {
    const [userHidden, toggleUserHidden] = useReducer(
        (state) => !state,
        false
    );
    const [isFresh, toggleIsFresh] = useReducer((state) => !state, false);
    return (
        <div>
            <div style={{marginTop:"15px", display:"flex", justifyContent:"center", gap:"20px"}}>
                <button onClick={toggleUserHidden} style={{fontSize:"24px"}}>
                    {userHidden ? "Show" : "Hide"} User
                </button>
                <button onClick={toggleIsFresh} style={{fontSize:"24px"}}>
                    {isFresh ? "Enable" : "Disable"} Fresh Data
                </button>
            </div>
            {userHidden ? null : <GithubUser username="uidotdev" isFresh={isFresh} />}
        </div>
    );
}