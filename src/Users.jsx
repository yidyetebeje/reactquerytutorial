import { useQuery } from "@tanstack/react-query";
import { getUsers } from "./api/user";
import { Link } from "react-router-dom";
export default function Users(){
    const {isLoading, error, data, refetch} = useQuery({
        queryKey: ["users"],
        queryFn: getUsers,
    })
    return (
        <>
        {isLoading && <div>Loading...</div>}
        {error && <div>Error: {error.message}
        <button onClick={() => refetch()}>Refresh</button>
        </div>}
        {data && (
            <div>
                <button onClick={() => refetch()}>Refresh</button>
                <ul>
                    {data.map((user) => (
                       <li key={user.id}><Link to={`/${user.id}`} >{user.name}</Link></li> 
                    ))}
                </ul>
            </div>
        )}
        </>
    )
}