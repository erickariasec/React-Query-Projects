import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

/**
 * For this practice, you'll be querying two APIs.
 * First, query the
 *
 * `https://ui.dev/api/courses/react-query/labels`
 *
 * API and create a button for each label in a list.
 * When you click on one of these labels, it should
 * make a query to the
 *
 * `https://ui.dev/api/courses/react-query/issues`
 *
 * API and return a list of issues that have that label.
 *
 * Example: `https://ui.dev/api/courses/react-query/issues?labels[]=bug`
 *
 * Remember, React Query is declarative. Think about how
 * you will let React Query know that it needs to query the
 * issues API when the user clicks on a label. It might also
 * help to think about what the issues API query key is.
 *
 * Hint: This is a form of dependent query.
 */

export default function FilteredQueryData() {
    const [selectedLabel, setSelectedLabel] = useState(null);
    const labelsQuery = useQuery(["labels"], () =>
        fetch("https://ui.dev/api/courses/react-query/labels").then((res) =>
            res.json()
        )
    );
    const issuesQuery = useQuery(
        ["issues", { selectedLabel }], () =>
        fetch(
            `https://ui.dev/api/courses/react-query/issues?labels[]=${selectedLabel}`
        ).then((res) => res.json()),
        {
            enabled: !!selectedLabel
        }
    );
    return (
        <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", fontSize:"22px"}}>
            <h2>Labels</h2>
            {labelsQuery.isLoading ? (
                <p>Loading...</p>
            ) : (
                <ul style={{display: "flex", justifyContent:"space-evenly", flexWrap:"wrap", gap:"20px"}}>
                {labelsQuery.data.map((label) => (
                    <li key={label.id} style={{listStyle:"none"}}>
                    <button
                        style={{
                            fontWeight: label.id === selectedLabel ? 900 : 200,
                            fontSize: "24px",
                            backgroundColor: `${label.color}`
                        }}
                        onClick={() => setSelectedLabel(label.id)}
                    >
                        {label.name}
                    </button>
                    </li>
                ))}
                </ul>
            )}
            {issuesQuery.status === "loading" &&
            issuesQuery.fetchStatus === "idle" ? null : (
                <>
                <h2>Issues</h2>
                {issuesQuery.isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <ul>
                    {issuesQuery.data.map((issue) => (
                        <li key={issue.id}>{issue.title}</li>
                    ))}
                    </ul>
                )}
                </>
            )}
        </div>
    );
}
