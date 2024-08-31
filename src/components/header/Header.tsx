import './Header.scss';
import Button from "../button/Button.tsx";

import {Color} from "../../utils/types.ts";
import Logo from '../Logo/Logo.tsx';

function Header() {
    return <nav className="header flex items-center justify-between">
        <Logo></Logo>
        <div className='buttons flex'>
            <Button colorClass={Color.primary} text="Sign Up"></Button>
        </div>

    </nav>
}

export default Header;