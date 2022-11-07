import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useState } from "react";

/**
 * Write a query that fetches a single user
 * record from the
 * `https://ui.dev/api/courses/react-query/users/:userId` endpoint.
 *
 * The user IDs are `u_1`, `u_2`, `u_3`, and `u_4`
 *
 * There is already UI for displaying the user,
 * but you need to add a loading state.
 */

export default function IndividualRecords() {
    const [userId, setUserId] = useState("u_1");
    const userQuery = useQuery(["users", userId], () => 
        fetch(
            `https://ui.dev/api/courses/react-query/users/${userId}`
        ).then((res => res.json()))
    );

    // Replace this with the results of the query
    // const user = {
    //     id: "u_4",
    //     name: "Alex",
    //     profilePictureUrl:
    //     "https://pbs.twimg.com/profile_images/1403026826075779075/cHtraFgQ_400x400.jpg"
    // };

    const user = userQuery.data;
    
    return (
        <div>
            <UserPicker userId={userId} setUserId={setUserId} />
            {userQuery.isLoading ? (
                <p>Loading....</p>
            ) : (
                <>
                    <h1>User: {user.name}</h1>
                    <Image src={user.profilePictureUrl} alt={user.name} width={400} height={400} />
                </>
            )}
        </div>
    );
}

function UserPicker({ userId, setUserId }) {
  return (
        <ul className="ul-user-picker">
            <li>
                <button
                    onClick={() => setUserId("u_1")}
                    style={{ fontWeight: userId === "u_1" ? 800 : 400 }}
                >
                    User 1
                </button>
            </li>
            <li>
                <button
                    onClick={() => setUserId("u_2")}
                    style={{ fontWeight: userId === "u_2" ? 800 : 400 }}
                >
                    User 2
                </button>
            </li>
            <li>
                <button
                    onClick={() => setUserId("u_3")}
                    style={{ fontWeight: userId === "u_3" ? 800 : 400 }}
                >
                    User 3
                </button>
            </li>
            <li>
                <button
                    onClick={() => setUserId("u_4")}
                    style={{ fontWeight: userId === "u_4" ? 800 : 400 }}
                >
                    User 4
                </button>
            </li>
        </ul>
    )
}