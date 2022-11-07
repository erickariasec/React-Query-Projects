import { useQuery } from "@tanstack/react-query";

// async function getLabelsAndIssues(owner, repo) {
//     const labels = await fetch(
//         `https://api.github.com/repos/${owner}/${repo}/labels`,
//     ).then((res) => res.json());

//     const issues = await fetch(
//         `https://api.github.com/repos/${owner}/${repo}/issues?labels=${labels[0].name}`
//     ).then((res) => res.json())

//     return [labels, issues];
// }

const IssueLabelFilter = ({ owner, repo }) => {

    owner = "lauripiispanen"
    repo = "most-active-github-users-counter"

    const labelsQuery = useQuery(
        ["repos", owner, repo, "labels"], 
        () => fetch(
        `https://api.github.com/repos/${owner}/${repo}/labels`
        ).then((res) => res.json())
    );

    const labels = labelsQuery.data
    
    const issuesQuery = useQuery(
        ["repos", owner, repo, "issues"],
        () => fetch(
        `https://api.github.com/repos/${owner}/${repo}/issues?labels=${labels[0].name}`
        ).then((res) => res.json()),
        {
            enabled: !!labels
        }
    );

    return (
        <div>
            <h2>Labels</h2>
            {labelsQuery.isLoading ? (
                <p>Loading labels...</p>
            ) : (
                <ul>
                    {labelsQuery.data.map((label) => (
                        <li key={label.id}>{label.name}</li>
                    ))}
                </ul>
            )}

            <hr />
        
            <h2>Issues</h2>
            {issuesQuery.fetchStatus === "idle" &&
            issuesQuery.isLoading ? null:
            issuesQuery.isLoading ? (
                <p>Loading issues...</p>
            ) : (
                <ul>
                    {issuesQuery.data.map((issue) => (
                        <li key={issue.id}>{issue.title}</li>
                    ))}
                </ul>
            
            )}
        </div>
    );
};

export default IssueLabelFilter;