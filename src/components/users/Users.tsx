import './Users.scss';
import Button from "../button/Button.tsx";
import {Color} from "../../utils/types.ts";
import Card from "../card/Card.tsx";

function Users() {
    return <section className="user-section">
        <h1>Working with GET request</h1>
        <div className="card-grid-list">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </div>
        <Button colorClass={Color.primary} text="Show more"></Button>
    </section>
}

export default Users;