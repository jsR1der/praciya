import './Header.scss';
import Button from "../button/Button.tsx";

import {Color} from "../../utils/types.ts";
import Logo from '../Logo/Logo.tsx';
import {useAuth0} from "@auth0/auth0-react";
import {User} from "../user/User.tsx";
import {UserModel} from "../../models/user.model.ts";

function Header(props: { user: UserModel }) {
    const {loginWithRedirect, logout: auth0Logout, isAuthenticated} = useAuth0()
    const login = async () => {
        await loginWithRedirect().then()
    }
    const logout = async () => {
        try {
            await auth0Logout()
        } catch (e) {
            // !todo dunno
            console.error(e)
        }

    }
    return <nav className="header flex items-center justify-between">
        <Logo></Logo>
        <div className='buttons flex'>
            {isAuthenticated ?
                //!todo make it smooth
                props.user && <User user={props.user} logout={logout}></User>
                :
                <Button classes={{color: Color.primary}} action={login} text="Login"></Button>
            }
        </div>

    </nav>
}

export default Header;