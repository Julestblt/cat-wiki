import Logo from "./Logo";
import {Link} from "react-router-dom";

const Header = () => {

    return (
        <Link to={'/'}>
            <div className={'pt-6 ml-5 xl:ml-0 lg:ml-0'}>
                <Logo width={'120'}/>
            </div>
        </Link>

    )

}

export default Header;
