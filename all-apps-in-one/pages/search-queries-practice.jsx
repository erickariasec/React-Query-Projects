import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

/**
 * Create a query that searches for issues using
 * the `https://ui.dev/api/courses/react-query/search/issues`
 * endpoint. The search term should go in the `q` query parameter.
 *
 * Example: `https://ui.dev/api/courses/react-query/search/issues?q=dependencies`
 *
 * Make sure the query doesn't run too frequently,
 * and only runs when there is a search term.
 *
 * Also be sure to handle the loading state.
 */

export default function SearchQueries() {
    const [search, setSearch] = useState("");

    const issuesSearch = useQuery(
        ["issues", "search", search],
        () =>
        fetch(
            `https://ui.dev/api/courses/react-query/search/issues?q=${search}`
        ).then((res) => res.json()),
        {
            enabled: !!search
        }
    );

    return (
        <div>
            <form 
                onSubmit={e => {
                    e.preventDefault()
                    setSearch(e.target.search.value)
                }}
                style={{
                    marginTop: "10px",
                    display: "flex",
                    justifyContent: "center",
                    fontSize: "24px",
                }}
            >
                <label>
                    Search:
                    <input type="text" name="search" placeholder="Search..." style={{marginLeft:"10px", fontSize:"24px"}} />
                </label>
            </form>
            <p style={{textAlign:"center"}}>
                Try something like <code>Dependencies</code>.
            </p>
            {/* Put the search results and loading states here */}
            {issuesSearch.fetchStatus === "idle" && issuesSearch.isLoading ? null : issuesSearch.isLoading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <h2>Results: {issuesSearch.data.count}</h2>
                    <ul>
                        {issuesSearch.data.items.map(issue => <li key={issue.id}>{issue.title}</li>)}
                    </ul>
                </>
            )}
        </div>
    );
}