import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const IssueSearch = () => {
    const [search, setSearch] = useState('');
    const queryString = 'q=' + encodeURIComponent(
        `${search} is:issue repo:facebook/react`
    );

    const issuesQuery = useQuery(
        ['issues', search],
        () => fetch(
            `https://api.github.com/search/issues?${queryString}`
        ).then((res) => res.json()),
        {
            enabled: !!search,
        }
    );

    return (
        <div style={{height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <form onSubmit={e => {
                e.preventDefault();
                setSearch(e.target.elements.search.value);
            }}>
                <h2 style={{textAlign: "center"}}>ISSUE SEARCH</h2>
                <input
                    type="text"
                    name="search"
                    placeholder="Search for issues..."
                    style={{fontSize: "25px", padding: "10px"}}
                />
            </form>
            {issuesQuery.fetchStatus === "idle" && 
                issuesQuery.isLoading ? null :
                issuesQuery.isLoading 
                ? <p>Loading issues...</p>
                : (
                <ul>
                    {issuesQuery.data.items.map((issue) => (
                    <li key={issue.id}>{issue.title}</li>
                    ))}
                </ul>
                )
            }
        </div>
    );
};
export default IssueSearch;