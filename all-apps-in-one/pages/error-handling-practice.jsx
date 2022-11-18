import { useQuery } from "@tanstack/react-query";

/**
 * Add proper error handling to this query.
 *
 * This includes three things:
 *
 * 1. Change the query function so it lets React Query
 *    know there is an error.
 * 2. Add an error message to the component.
 * 3. Add a callback to the query function that calls
 *    `console.error` with the error message.
 *
 * Do not remove the headers from the `fetch` call in
 * the query function. These can help you debug the
 * error handling.
 *
 * You can know the response is an error if it returns
 * a non-200 status code and a JSON object with a `error`
 * property.
 */

async function fetchLabels() {
    // Don't change this fetch request
    const response = await fetch(
        "https://ui.dev/api/courses/react-query/labels",
        {
        headers: {
            "x-error": true
        }
        }
    );

    // You can change how the error is handled here
    const results = await response.json();
    if (response.status >= 400) {
        throw new Error(`${results.error || "An error has ocurred"} - and this is a good thing!`)
    }
    return results;
}

export default function ErrorHandlingApp() {
    const labelsQuery = useQuery(["labels"], fetchLabels, {
        retry: false,
        onError: (error) => console.error(error)
    });

    return (
        // <div>
        //     <h1>Labels</h1>
        //     {labelsQuery.isError && <p>{labelsQuery.error.message}</p>}
        //     {labelsQuery.isLoading ? (
        //         <p>Loading...</p>
        //     ) : (
        //         <ul>
        //             {labelsQuery.data.map((label) => (
        //                 <li key={label.id}>{label.name}</li>
        //             ))}
        //         </ul>
        //     )}
        // </div>
        <div>
            <h1>Labels</h1>
            {labelsQuery.isError ? <p>ERROR! {labelsQuery.error.message}</p> : null}

            {labelsQuery.isLoading ? (
                <p>Loading...</p>
            ) : labelsQuery.data ? (
                <ul>
                    {labelsQuery.data.map((label) => (
                        <li key={label.id}>{label.name}</li>
                    ))}
                </ul>
            ) : null}
        </div>
    );
}