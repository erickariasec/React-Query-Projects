import { useQueries } from "@tanstack/react-query";

const ReposAndGists2 = ({ username }) => {
    username = "rparias";
    
    const [reposQuery, gistQuery] = useQueries({
        queries: [
            {
                queryKey: ["repos", username],
                queryFn: () => {
                    return fetch(
                        `https://api.github.com/users/${username}/repos`
                    ).then((res) => res.json());
                },
            },
            {
                queryKey: ["gists", username],
                queryFn: () => {
                    return fetch(
                        `https://api.github.com/users/${username}/gists`
                    ).then((res) => res.json());
                },
            }
        ] 
    });

    return (
        <div>
        <h2>Repos</h2>
        {reposQuery.isLoading && <p>Loading repos...</p>}
        {reposQuery.isError && (
            <p>Error loading repos: {reposQuery.error.message}</p>
        )}
        {reposQuery.data && (
            <ul>
            {reposQuery.data.map((repo) => (
                <li key={repo.id}>{repo.name}</li>
            ))}
            </ul>
        )}

        <hr />

        <h2>Gists</h2>
        {gistQuery.isLoading && <p>Loading gists...</p>}
        {gistQuery.isError && (
            <p>Error loading gists: {gistQuery.error.message}</p>
        )}
        {gistQuery.data && (
            <ul>
            {gistQuery.data.map((gist) => (
                <li key={gist.id}>{gist.description}</li>
            ))}
            </ul>
        )}
        </div>
    );
};

export default ReposAndGists2;