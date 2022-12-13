import * as React from "react";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

/**
 * Write a query which fetches from the
 * `https://ui.dev/api/courses/react-query/users/:userId`
 * endpoint using the provided user ID.
 *
 * Use the return value of that query to render a profile
 * picture.
 *
 * Provide placeholder data so the query will render a
 * placeholder image while the query loads.
 *
 * Hint: https://unsplash.it/200 is a good generic profile
 * picture URL.
 */

async function fetchUser(userId) {
  userId = "u_2";
  return fetch(`https://ui.dev/api/courses/react-query/users/${userId}`).then(
    (res) => res.json()
  );
}

export default function UserProfilePicture({ userId }) {
  userId = "u_2";
  const userQuery = useQuery(["user", userId], () => fetchUser(userId), {
    placeholderData: {
      id: "placeholder",
      name: "Placeholder",
      profilePictureUrl: "https://unsplash.it/200",
    },
  });

  return (
    <Image className="placeholder-image-practice" src={userQuery.data.profilePictureUrl} alt={userQuery.data.name} width={200} height={200} />
  );
}
