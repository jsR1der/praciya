import './Users.scss';
import Button from "../button/Button.tsx";
import {Color, UserPagination} from "../../utils/types.ts";
import Card from "../card/Card.tsx";
import {useEffect, useState} from "react";
import {getUserPagination} from "../../apiService.ts";

function Users() {
    const [usersPagination, setUsersPagination] = useState<UserPagination | null>(null)

    useEffect(() => {
        getUserPagination(1).then(response => setUsersPagination(response))
    }, [])

    const addPage = () => {
        const lastPage = usersPagination?.page;
        getUserPagination(lastPage ? lastPage + 1 : 1).then(response => setUsersPagination(response))
    }

    return <section className="user-section">
        <h1>Existing Clients</h1>
        <div className="card-grid-list w-full">
            {usersPagination?.users?.map(user => (<Card key={user.id} user={user}></Card>))}
        </div>
        <Button action={addPage} colorClass={Color.primary} text="Show more"></Button>
    </section>
}

export default Users;