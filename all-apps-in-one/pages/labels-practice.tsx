import { useQuery } from "@tanstack/react-query";

/**
 * Add a query to the `https://ui.dev/api/courses/react-query/labels`
 * endpoint.
 *
 * The UI for rendering the labels is already in place,
 * but you need to add a loading state.
 */

export default function GithubStats() {
    // Replace this with the results of your query
    const labelsQuery = useQuery(
        ["labels"],
        () => fetch("https://ui.dev/api/courses/react-query/labels").then(res => res.json())
    )

    const labels = [{ id: "1", color: "red", name: "bug" }];
    // const labels = labelsQuery.data;

    const username = "erickariasec"

    const userQuery = useQuery(
    ["user", username],
    () => fetch(`https://api.github.com/users/${username}`)
        .then((res) => res.json())
    );

    return (
        <div>
            {userQuery.isSuccess && <h2>{userQuery.data.name}</h2>}

            <h1>Labels</h1>
            {labelsQuery.isLoading ? <p>Loading...</p> :
            <ul>
                {labelsQuery.data.map((label: any) => (
                <li key={label.id} className="li-label" >
                    <span style={{ color: label.color }} className="span-label"></span> {label.name}
                </li>
                ))}
            </ul>}
        </div>
        // <div>
        //     <h1>Labels</h1>
        //     {labelsQuery.isLoading && <p>Loading...</p>}
        //     {labelsQuery.isSuccess && (
        //         <ul>
        //         {labels.map((label) => (
        //             <li key={label.id}>
        //             <span style={{ color: label.color }}></span> {label.name}
        //             </li>
        //         ))}
        //         </ul>
        //     )}
        // </div>
    )
}