import { useQueryClient, useQuery } from '@tanstack/react-query'

const Users = () => {
    const queryClient = useQueryClient();

    const productsQuery = useQuery(
        ["products"], 
        ({signal}) => fetch("https://fakestoreapi.com/products", {signal})
            .then(res => res.json())
    );

    return (
        <div>
        <button onClick={() => queryClient.cancelQueries(["products"])}>
            Cancel User Query
        </button>
        <div>
            {productsQuery.isLoading ? "Loading..." : 
                productsQuery.data.map((product) => (
                    <p key={product.id}>{product.title}</p>
                ))
            }
        </div>
        </div>
    )
}

export default Users;