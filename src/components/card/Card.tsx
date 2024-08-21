import './Card.scss';
import Image from '../image/Image'
import {User} from "../../utils/types.ts";

function Card(props: { user: User }) {
    return <div className="grid grid-cols-1 card-grid w-full">
        <Image url={props.user.photo}></Image>
        <p className="truncate w-full text-center name">{props.user.name}</p>

        <div className="flex flex-col gap-[5px]">
            <p className="truncate w-full text-center title">{props.user.position}</p>
            <p className="truncate w-full text-center email">{props.user.email}</p>
            <p className="truncate w-full text-center phone">{props.user.phone}</p>
        </div>
    </div>
}

export default Card;