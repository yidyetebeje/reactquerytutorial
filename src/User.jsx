import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "./api/user";
export default function User() {
    const { id } = useParams();
    const { isLoading, error, data, refetch } = useQuery({
        queryKey: ["user",id],
        queryFn: ()=>getUser(id),
    });
    return (
        <>
            {isLoading && <div>Loading...</div>}
            {error && <div>Error: {error.message}
             <button onClick={() => refetch()}>Refresh</button>
            </div>}
            {data && (
                <div>
                   
                    <div>{data.name}</div>
                    <div>{data.email}</div>
                    <div>{data.address.street}</div>
                </div>
            )}
        </>
    )
}