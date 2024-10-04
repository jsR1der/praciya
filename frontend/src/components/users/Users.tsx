import './Users.scss';
import Button from "../button/Button.tsx";
import {Color, UserPagination} from "../../utils/types.ts";
import Card from "../card/Card.tsx";
import Preloader from "../preloader/Preloader.tsx";
import {useQuery} from "@tanstack/react-query";
import {getUserPagination} from "../../services/api/api-base.service.ts";
import {useState} from "react";


function Users() {
    const [page, setPage] = useState(() => 1)
    const useUsers = () => {
        return useQuery<UserPagination | null>(
            {
                queryKey: ['users', page],
                queryFn: async (): Promise<UserPagination | null> => getUserPagination(page),
                retry: 3,
                retryDelay: (attempt: number) => attempt === 1 ? 2000 : attempt * 1000,
                initialData: () => null,
                refetchOnWindowFocus: false,
            });
    }
    const {data, error, isFetching, refetch} = useUsers();

    const getTemplate = () => {
        if (isFetching) {
            return <Preloader size={70}></Preloader>
        }
        if (error) {
            return <div>{error.message}</div>
        }

        if (!data?.users?.length) {
            return <div>Nema</div>
        }
        return <>
            <h1>Existing Clients</h1>
            <div className="card-grid-list w-full">
                {data?.users?.map(user => (<Card key={user.id} user={user}></Card>))}
            </div>
            <Button action={fetchNextPage} colorClass={Color.primary} text="Show more"></Button>˝
        </>
    }

    const fetchNextPage = async () => {
        setPage((prevState) => prevState + 1)
        await refetch()
    }

    return <section className="user-section relative">
        {getTemplate()}
    </section>
}

export default Users;