import { useQuery } from "@tanstack/react-query";

let count = 1;
function GithubUser({ username }) {
    username = "erickariasec"
    const userQuery = useQuery(["user", username], async () => {
        console.log("Fetching...", count++);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        if (count > 2) {
            throw new Error("This is a manufactured error");
        }
        return fetch(`https://api.github.com/users/${username}`).then((res) =>
            res.json()
        );
    });

    if (userQuery.isLoading) {
        return <div>...</div>;
    }

    return (
        <div>
        {userQuery.isError ? <div>Error: {userQuery.error.message}</div> : null}
        <pre>{JSON.stringify(userQuery.data, null, 2)}</pre>
        </div>
    );
}

export default GithubUser;