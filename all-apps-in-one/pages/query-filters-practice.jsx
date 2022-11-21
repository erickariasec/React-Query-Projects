import * as React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";

/**
 * Using the three query functions below, create three queries.
 * Render the loading state and data for each of the queries. Include
 * buttons next to each result which invalidate the corresonding query.
 *
 * Also include a button which invalidates all the queries. It should only
 * call `invalidateQueries` once using a query filter.
 */

async function randomDecimal() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return Math.random();
}
async function randomInteger() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return Math.floor(Math.random() * 100);
}
async function randomString() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return Math.random().toString(36).substring(7);
}

export default function QueryFilters() {
    const queryClient = useQueryClient();
    const decimalQuery = useQuery(["random", "decimal"], randomDecimal, {
        staleTime: 3000
    })
    const intQuery = useQuery(["random", "int"], randomInteger, {
        staleTime: 5000
    })
    const stringQuery = useQuery(["random", "string"], randomString, {
        staleTime: 10000
    })
    return (
        <div>
        <p>
            <strong>Random Decimal: {decimalQuery.isLoading ? "..." : decimalQuery.data}</strong>
            <button
                onClick={() => {
                    // decimalQuery.refetch();
                    queryClient.invalidateQueries(["random", "decimal"])
                }}
            >Invalidate</button>
        </p>
        <p>
            <strong>Random Integer: {intQuery.isLoading ? "..." : intQuery.data}</strong>
            <button
                onClick={() => {
                    intQuery.refetch();
                }}
            >Invalidate</button>
        </p>
        <p>
            <strong>Random String: {stringQuery.isLoading ? "..." : stringQuery.data}</strong>
            <button
                onClick={() => {
                    stringQuery.refetch();
                }}
            >Invalidate</button>
        </p>
        <InvalidateButton />
        </div>
    );
}

function InvalidateButton() {
    const queryClient = useQueryClient();
    return (
        <button
            onClick={() => {
                queryClient.invalidateQueries(["random"])
            }}
        >
            Invalidate All
        </button>
    );
}