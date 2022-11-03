import { useQuery } from "@tanstack/react-query";
import axios from "axios"
import Image from "next/image";

export default function GithubStats() {
    const { isLoading, error, data, isFetching } = useQuery(["productData"], () =>
        axios
            .get("https://fakestoreapi.com/products/1")
            .then((res) => res.data)
    );

    if (isLoading) return "Loading...";

    if (error) return "An error has occurred: " + error;

    return (
        <div>
            <h1>{data.title}</h1>
            <Image loader={() => data.image} unoptimized priority src={data.image} width={300} height={400} alt="fake-store-iamge" />
            <p>{data.description}</p>
            <strong>$ {data.price}</strong>{" "}
            <strong>✨ {data.rating.rate}</strong>{" "}
            <strong>🍴 {data.category.toUpperCase()}</strong>
            <div>{isFetching ? "Updating..." : ""}</div>
        </div>
    )
}