import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function StrapiBlog() {
  const { isLoading, error, data, isFetching } = useQuery(["blogData"], () =>
    axios.get("http://localhost:1337/api/static-pages/1").then((res) => res.data)
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error;

  return (
    <div>
      <h1>{data.data.attributes.title}</h1>
      <p>{data.data.attributes.content}</p>
      <p>{data.data.attributes.keywords}</p>
      <p>{data.data.attributes.coordinates}</p>
      <p>{data.data.attributes.slug}</p>
      <div>{isFetching ? "Updating..." : ""}</div>
    </div>
  );
}
